"use client";

import { useState, useRef } from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { generateDocumentFromFile, parseTemplateVariables, type DocumentData } from "~/services/docGenerator";
import { Upload, FileText, Loader2, CheckCircle2, AlertCircle, Download, X } from "lucide-react";

type Status = "idle" | "parsing" | "ready" | "generating" | "success" | "error";

export default function UploadPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [variables, setVariables] = useState<string[]>([]);
  const [formData, setFormData] = useState<DocumentData>({});
  const [errorMessage, setErrorMessage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 处理文件上传
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // 验证文件类型
    if (!file.name.endsWith(".docx")) {
      setErrorMessage("请上传 .docx 格式的文件");
      setStatus("error");
      return;
    }

    setUploadedFile(file);
    setStatus("parsing");
    setErrorMessage("");
    setFormData({});
    setVariables([]);

    try {
      const vars = await parseTemplateVariables(file);
      if (vars.length === 0) {
        setErrorMessage("未在模板中找到变量。请确保模板中包含 {{变量名}} 格式的变量。");
        setStatus("error");
        return;
      }

      setVariables(vars);
      // 初始化表单数据
      const initialData: DocumentData = {};
      vars.forEach((varName) => {
        initialData[varName] = "";
      });
      setFormData(initialData);
      setStatus("ready");
    } catch (error) {
      const message = error instanceof Error ? error.message : "解析模板失败";
      setErrorMessage(message);
      setStatus("error");
      console.error("解析模板变量错误:", error);
    }
  };

  // 处理表单输入变化
  const handleInputChange = (variable: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [variable]: value,
    }));
  };

  // 重置
  const handleReset = () => {
    setUploadedFile(null);
    setVariables([]);
    setFormData({});
    setStatus("idle");
    setErrorMessage("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // 生成文档
  const handleGenerate = async () => {
    if (!uploadedFile) return;

    setStatus("generating");
    setErrorMessage("");

    try {
      // 确保所有解析到的变量都有值（未填写的设为空字符串）
      const completeData: DocumentData = {};
      variables.forEach((varName) => {
        const value = formData[varName];
        // 如果值为 undefined、null 或空字符串，统一设置为空字符串
        completeData[varName] = value == null || value === "" ? "" : String(value);
      });

      const fileName = uploadedFile.name.replace(".docx", "_filled.docx");
      await generateDocumentFromFile(uploadedFile, completeData, fileName);
      setStatus("success");
      setTimeout(() => setStatus("ready"), 3000);
    } catch (error) {
      const message = error instanceof Error ? error.message : "生成失败，请重试";
      setErrorMessage(message);
      setStatus("error");
      console.error("生成文档错误:", error);
    }
  };

  return (
    <main className='container mx-auto px-4 py-8 max-w-4xl'>
      <Card>
        <CardHeader>
          <CardTitle>上传模板并填写变量</CardTitle>
          <CardDescription>上传包含变量的 DOCX 模板文件，填写变量值后生成文档</CardDescription>
        </CardHeader>
        <CardContent className='space-y-6'>
          {/* 文件上传区域 */}
          {status === "idle" || status === "error" ? (
            <div className='space-y-4'>
              <div className='flex items-center justify-center w-full'>
                <label
                  htmlFor='file-upload'
                  className='flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-accent/50 transition-colors'>
                  <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                    <Upload className='w-10 h-10 mb-3 text-muted-foreground' />
                    <p className='mb-2 text-sm text-muted-foreground'>
                      <span className='font-semibold'>点击上传</span> 或拖拽文件到此处
                    </p>
                    <p className='text-xs text-muted-foreground'>仅支持 .docx 格式</p>
                  </div>
                  <Input
                    id='file-upload'
                    ref={fileInputRef}
                    type='file'
                    accept='.docx'
                    onChange={handleFileUpload}
                    className='hidden'
                  />
                </label>
              </div>
            </div>
          ) : null}

          {/* 解析中状态 */}
          {status === "parsing" && (
            <div className='flex items-center justify-center py-8'>
              <Loader2 className='w-8 h-8 animate-spin text-primary' />
              <span className='ml-3 text-sm text-muted-foreground'>正在解析模板...</span>
            </div>
          )}

          {/* 生成中状态 */}
          {status === "generating" && (
            <div className='flex items-center justify-center py-8'>
              <Loader2 className='w-8 h-8 animate-spin text-primary' />
              <span className='ml-3 text-sm text-muted-foreground'>正在生成文档...</span>
            </div>
          )}

          {/* 成功状态提示 */}
          {status === "success" && (
            <div className='flex items-center gap-2 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-md'>
              <CheckCircle2 className='h-5 w-5 text-green-600 dark:text-green-400 shrink-0' />
              <p className='text-sm text-green-800 dark:text-green-200'>文档生成成功！文件已开始下载。</p>
            </div>
          )}

          {/* 错误提示 */}
          {status === "error" && errorMessage && (
            <div className='flex items-start gap-2 p-4 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-md'>
              <AlertCircle className='h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 shrink-0' />
              <div className='flex-1'>
                <p className='text-sm font-medium text-red-800 dark:text-red-200'>错误</p>
                <p className='text-sm text-red-700 dark:text-red-300 mt-1'>{errorMessage}</p>
              </div>
            </div>
          )}

          {/* 已上传文件信息 */}
          {uploadedFile && status !== "parsing" && (
            <div className='flex items-center justify-between p-4 bg-muted rounded-md'>
              <div className='flex items-center gap-3'>
                <FileText className='h-5 w-5 text-muted-foreground' />
                <div>
                  <p className='text-sm font-medium'>{uploadedFile.name}</p>
                  <p className='text-xs text-muted-foreground'>{(uploadedFile.size / 1024).toFixed(2)} KB</p>
                </div>
              </div>
              <Button variant='ghost' size='sm' onClick={handleReset}>
                <X className='h-4 w-4' />
              </Button>
            </div>
          )}

          {/* 变量表单 */}
          {status === "ready" && variables.length > 0 && (
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <h3 className='text-lg font-semibold'>填写变量 ({variables.length})</h3>
                <Button variant='outline' size='sm' onClick={handleReset}>
                  重新上传
                </Button>
              </div>

              <div className='grid gap-4'>
                {variables.map((variable) => (
                  <div key={variable} className='space-y-2'>
                    <Label htmlFor={variable}>{variable}</Label>
                    <Input
                      id={variable}
                      type='text'
                      value={(formData[variable] as string) || ""}
                      onChange={(e) => handleInputChange(variable, e.target.value)}
                      placeholder={`请输入 ${variable}`}
                    />
                  </div>
                ))}
              </div>

              <Button onClick={handleGenerate} disabled={status !== "ready"} size='lg' className='w-full'>
                <Download className='mr-2 h-4 w-4' />
                生成文档
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
