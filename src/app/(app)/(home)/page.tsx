"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { generateSimpleDocument } from "~/services/docGenerator";
import { Download, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

// 示例数据 - 可以根据实际需求修改
const SAMPLE_DATA = {
  title: "这是一个表格",
  description: "这是一个表格的描述",
  column1_1: "column1_1Value",
  column1_2: "column1_2Value",
  column2_1: "column2_1Value",
  column2_2: "column2_2Value",
  column3_1: "column3_1Value",
  column3_2: "column3_2Value",
} as const;

type GenerationStatus = "idle" | "generating" | "success" | "error";

export default function HomePage() {
  const [status, setStatus] = useState<GenerationStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleGenerate = async () => {
    setStatus("generating");
    setErrorMessage("");

    try {
      await generateSimpleDocument(SAMPLE_DATA, {
        outputFileName: `文档_${new Date().toISOString().split("T")[0]}.docx`,
      });
      setStatus("success");
      // 3 秒后重置状态
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      const message = error instanceof Error ? error.message : "生成失败，请重试";
      setErrorMessage(message);
      setStatus("error");
      console.error("生成文档错误:", error);
    }
  };

  return (
    <main className='container mx-auto px-4 py-8 max-w-2xl'>
      <Card>
        <CardHeader>
          <CardTitle>文档生成器</CardTitle>
          <CardDescription>根据模板生成 DOCX 文档</CardDescription>
        </CardHeader>
        <CardContent className='space-y-6'>
          {/* 状态显示 */}
          {status === "success" && (
            <div className='flex items-center gap-2 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-md'>
              <CheckCircle2 className='h-5 w-5 text-green-600 dark:text-green-400' />
              <p className='text-sm text-green-800 dark:text-green-200'>文档生成成功！文件已开始下载。</p>
            </div>
          )}

          {status === "error" && (
            <div className='flex items-start gap-2 p-4 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-md'>
              <AlertCircle className='h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 shrink-0' />
              <div className='flex-1'>
                <p className='text-sm font-medium text-red-800 dark:text-red-200'>生成失败</p>
                {errorMessage && <p className='text-sm text-red-700 dark:text-red-300 mt-1'>{errorMessage}</p>}
              </div>
            </div>
          )}

          {/* 数据预览 */}
          <div className='space-y-2'>
            <h3 className='text-sm font-medium'>当前数据：</h3>
            <div className='p-4 bg-muted rounded-md'>
              <pre className='text-xs overflow-auto'>{JSON.stringify(SAMPLE_DATA, null, 2)}</pre>
            </div>
          </div>

          {/* 生成按钮 */}
          <Button onClick={handleGenerate} disabled={status === "generating"} size='lg' className='w-full'>
            {status === "generating" ? (
              <>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                正在生成...
              </>
            ) : (
              <>
                <Download className='mr-2 h-4 w-4' />
                生成文档
              </>
            )}
          </Button>

          {/* 提示信息 */}
          <p className='text-xs text-muted-foreground text-center'>点击按钮将根据模板生成 DOCX 文档并自动下载</p>
        </CardContent>
      </Card>
    </main>
  );
}
