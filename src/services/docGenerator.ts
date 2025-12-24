import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";

// 类型定义
export interface DocumentData {
  [key: string]: unknown;
}

export interface GenerateDocumentOptions {
  templatePath?: string;
  outputFileName?: string;
}

// 常量配置
const DEFAULT_TEMPLATE_PATH = "/templates/demo-docx.docx";
const DEFAULT_OUTPUT_FILENAME = "generated-document.docx";
const DOCX_MIME_TYPE = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
const MIN_FILE_SIZE = 4; // 最小文件大小（字节）

/**
 * 生成 DOCX 文档
 * @param data - 要注入到模板中的数据
 * @param options - 可选配置（模板路径、输出文件名）
 * @returns Promise<boolean> - 生成成功返回 true
 * @throws Error - 如果生成过程中出现错误
 */
export async function generateSimpleDocument(
  data: DocumentData,
  options: GenerateDocumentOptions = {}
): Promise<boolean> {
  const { templatePath = DEFAULT_TEMPLATE_PATH, outputFileName = DEFAULT_OUTPUT_FILENAME } = options;

  try {
    // 1. 加载模板文件
    const template = await loadTemplate(templatePath);

    // 2. 解析 ZIP 文件
    const zip = parseZipFile(template);

    // 3. 创建并配置 Docxtemplater 实例
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true, // 处理循环段落
      linebreaks: true, // 保留换行符
    });

    // 4. 清理数据：确保所有未填写的变量都显示为空字符串
    const cleanedData: DocumentData = {};
    for (const key in data) {
      const value = data[key];
      // 如果值为 undefined、null 或空字符串，统一设置为空字符串
      cleanedData[key] = value == null || value === "" ? "" : String(value);
    }

    // 5. 设置数据并渲染
    doc.setData(cleanedData);
    doc.render();

    // 6. 生成并下载文件
    const blob = doc.getZip().generate({
      type: "blob",
      mimeType: DOCX_MIME_TYPE,
    });

    saveAs(blob, outputFileName);

    return true;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "未知错误";
    console.error("生成文档失败:", error);
    throw new Error(`文档生成失败: ${errorMessage}`);
  }
}

/**
 * 加载模板文件
 */
async function loadTemplate(templatePath: string): Promise<ArrayBuffer> {
  const response = await fetch(templatePath);

  if (!response.ok) {
    throw new Error(`无法加载模板文件: ${response.status} ${response.statusText}`);
  }

  const template = await response.arrayBuffer();

  if (template.byteLength === 0) {
    throw new Error("模板文件为空");
  }

  if (template.byteLength < MIN_FILE_SIZE) {
    throw new Error("模板文件格式无效：文件太小");
  }

  return template;
}

/**
 * 解析 ZIP 文件
 */
function parseZipFile(template: ArrayBuffer): PizZip {
  try {
    return new PizZip(template);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new Error(`无法解析模板文件，请确保文件是有效的 DOCX 格式: ${errorMessage}`);
  }
}

/**
 * 从上传的文件生成文档
 */
export async function generateDocumentFromFile(
  file: File,
  data: DocumentData,
  outputFileName?: string
): Promise<boolean> {
  const fileName = outputFileName || `generated-${Date.now()}.docx`;

  try {
    // 1. 读取上传的文件
    const arrayBuffer = await file.arrayBuffer();

    if (arrayBuffer.byteLength === 0) {
      throw new Error("上传的文件为空");
    }

    if (arrayBuffer.byteLength < MIN_FILE_SIZE) {
      throw new Error("文件格式无效：文件太小");
    }

    // 2. 解析 ZIP 文件
    const zip = parseZipFile(arrayBuffer);

    // 3. 创建并配置 Docxtemplater 实例
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    // 4. 清理数据：确保所有未填写的变量都显示为空字符串
    const cleanedData: DocumentData = {};
    for (const key in data) {
      const value = data[key];
      // 如果值为 undefined、null 或空字符串，统一设置为空字符串
      cleanedData[key] = value == null || value === "" ? "" : String(value);
    }

    // 5. 设置数据并渲染
    doc.setData(cleanedData);
    doc.render();

    // 5. 生成并下载文件
    const blob = doc.getZip().generate({
      type: "blob",
      mimeType: DOCX_MIME_TYPE,
    });

    saveAs(blob, fileName);

    return true;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "未知错误";
    console.error("生成文档失败:", error);
    throw new Error(`文档生成失败: ${errorMessage}`);
  }
}

/**
 * 解析 DOCX 模板中的变量
 * @param file - 上传的 DOCX 文件
 * @returns Promise<string[]> - 变量名数组
 */
export async function parseTemplateVariables(file: File): Promise<string[]> {
  try {
    const arrayBuffer = await file.arrayBuffer();

    if (arrayBuffer.byteLength === 0) {
      throw new Error("上传的文件为空");
    }

    const zip = parseZipFile(arrayBuffer);

    // 收集所有可能包含变量的 XML 文件内容
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const zipAny = zip as any;
    let allXmlContent = "";

    // 1. 读取主文档文件
    const documentXml = zipAny.file("word/document.xml");
    if (documentXml) {
      allXmlContent += documentXml.asText() + "\n";
    }

    // 2. 读取所有可能的 XML 文件（包括表格、页眉、页脚等）
    // 检查 word 目录下的所有 XML 文件
    const fileNames = Object.keys(zip.files || {});
    const xmlFiles = fileNames.filter((name) => name.startsWith("word/") && name.endsWith(".xml"));

    // 读取所有 XML 文件内容
    for (const fileName of xmlFiles) {
      try {
        const xmlFile = zipAny.file(fileName);
        if (xmlFile) {
          const content = xmlFile.asText();
          if (content && content.length > 0) {
            allXmlContent += content + "\n";
          }
        }
      } catch (e) {
        // 忽略无法读取的文件
        console.warn(`无法读取文件 ${fileName}:`, e);
      }
    }

    if (!allXmlContent) {
      throw new Error("无法找到文档内容");
    }

    const xmlContent = allXmlContent;

    // 使用更全面的正则表达式提取所有变量
    // 匹配多种格式：
    // 1. {{variable}} - 标准格式
    // 2. {variable} - 单括号格式
    // 3. 处理可能被 XML 标签分割的情况
    // 4. 处理 XML 转义字符（&lt; &gt; 等）

    // 先解码 XML 实体
    const decodedContent = xmlContent
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");

    // 改进的正则表达式：匹配所有可能的变量格式
    // 支持：{{var}}, {var}, {{var.sub}}, {var_123} 等
    const variablePatterns = [
      /\{\{([a-zA-Z_][a-zA-Z0-9_.]*)\}\}/g, // {{variable}}
      /\{([a-zA-Z_][a-zA-Z0-9_.]*)\}/g, // {variable} (但排除 {{variable}} 的情况)
    ];

    const variables = new Set<string>();

    // 使用第一个模式（双括号）匹配
    let match;
    while ((match = variablePatterns[0].exec(decodedContent)) !== null) {
      const varName = match[1];
      // 过滤掉 Docxtemplater 的特殊标记
      if (!varName.startsWith("#") && !varName.startsWith("/") && varName.trim()) {
        variables.add(varName.trim());
      }
    }

    // 使用第二个模式（单括号）匹配，但排除已经被双括号匹配的
    // 重置正则表达式
    variablePatterns[1].lastIndex = 0;
    while ((match = variablePatterns[1].exec(decodedContent)) !== null) {
      const varName = match[1];

      // 检查是否已经被双括号模式匹配（避免重复）
      const doubleBracePattern = new RegExp(`\\{\\{${varName}\\}\\}`);
      if (!doubleBracePattern.test(decodedContent)) {
        // 过滤掉 Docxtemplater 的特殊标记
        if (!varName.startsWith("#") && !varName.startsWith("/") && varName.trim()) {
          variables.add(varName.trim());
        }
      }
    }

    // 处理被 XML 标签分割的变量（例如：<w:t>{{col</w:t><w:t>umn2_2}}</w:t>）
    // 移除所有 XML 标签，只保留文本内容，然后重新匹配
    const textOnly = decodedContent.replace(/<[^>]+>/g, "");

    // 在纯文本中查找所有变量
    const textPatterns = [
      /\{\{([a-zA-Z_][a-zA-Z0-9_.]*)\}\}/g, // {{variable}}
      /\{([a-zA-Z_][a-zA-Z0-9_.]*)\}/g, // {variable}
    ];

    for (const pattern of textPatterns) {
      pattern.lastIndex = 0;
      while ((match = pattern.exec(textOnly)) !== null) {
        const varName = match[1];
        if (!varName.startsWith("#") && !varName.startsWith("/") && varName.trim()) {
          variables.add(varName.trim());
        }
      }
    }

    // 如果还是没找到足够的变量，尝试更宽松的匹配
    // 匹配可能被分割的变量：{ { var } } 或 {{ var }}
    if (variables.size < 3) {
      const allText = textOnly.replace(/[{}]/g, " ").split(/\s+/);
      for (const word of allText) {
        if (
          word.match(/^[a-zA-Z_][a-zA-Z0-9_.]*$/) &&
          word.length > 1 &&
          !word.startsWith("#") &&
          !word.startsWith("/")
        ) {
          // 检查原始 XML 中是否包含这个变量（前后有花括号）
          const varPattern = new RegExp(`[{}]*${word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[{}]*`);
          if (varPattern.test(textOnly)) {
            variables.add(word);
          }
        }
      }
    }

    const result = Array.from(variables).sort();

    // 调试日志（开发时使用）
    if (process.env.NODE_ENV === "development") {
      console.log("解析到的变量:", result);
      console.log("变量数量:", result.length);
      console.log("XML 文件列表:", xmlFiles);
      console.log("纯文本内容片段:", textOnly.substring(0, 2000));

      // 查找可能遗漏的变量模式
      const potentialVars = textOnly.match(/[a-zA-Z_][a-zA-Z0-9_.]*/g) || [];
      const uniqueWords = [...new Set(potentialVars)].filter(
        (w) => w.length > 2 && !w.startsWith("#") && !w.startsWith("/")
      );
      console.log("潜在的变量名（未匹配）:", uniqueWords.slice(0, 20));
    }

    return result;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "未知错误";
    console.error("解析模板变量失败:", error);
    throw new Error(`解析模板变量失败: ${errorMessage}`);
  }
}
