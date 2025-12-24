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

    // 4. 设置数据并渲染
    doc.setData(data);
    doc.render();

    // 5. 生成并下载文件
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
