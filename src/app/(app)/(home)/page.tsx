import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { FileText, Zap, Shield, Download } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='container mx-auto px-4 py-20 text-center'>
        <div className='max-w-3xl mx-auto space-y-6'>
          <h1 className='text-5xl font-bold tracking-tight sm:text-6xl'>DOCX 注入演示</h1>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            一个强大的工具，用于演示和测试 DOCX 文档的动态内容注入功能
          </p>
          <div className='flex gap-4 justify-center pt-4'>
            <Button asChild size='lg'>
              <Link href='/post'>
                <FileText className='mr-2 h-5 w-5' />
                开始使用
              </Link>
            </Button>
            <Button asChild variant='outline' size='lg'>
              <Link href='#features'>了解更多</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='features' className='container mx-auto px-4 py-20'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold tracking-tight mb-4'>核心功能</h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>探索我们的强大功能，让文档处理变得简单高效</p>
        </div>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto'>
          <Card>
            <CardHeader>
              <div className='h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4'>
                <FileText className='h-6 w-6 text-primary' />
              </div>
              <CardTitle>文档处理</CardTitle>
              <CardDescription>支持 DOCX 格式文档的动态内容注入和模板处理</CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-muted-foreground'>轻松处理复杂的文档结构，支持变量替换和动态内容生成</p>
            </CardContent>
            <CardFooter>
              <Button variant='outline' className='w-full' asChild>
                <Link href='/post'>查看示例</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className='h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4'>
                <Zap className='h-6 w-6 text-primary' />
              </div>
              <CardTitle>快速高效</CardTitle>
              <CardDescription>高性能的文档处理引擎，快速生成和处理文档</CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-muted-foreground'>优化的算法确保即使在处理大型文档时也能保持出色的性能</p>
            </CardContent>
            <CardFooter>
              <Button variant='outline' className='w-full' asChild>
                <Link href='/post'>立即体验</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className='h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4'>
                <Shield className='h-6 w-6 text-primary' />
              </div>
              <CardTitle>安全可靠</CardTitle>
              <CardDescription>内置安全机制，确保文档处理过程的安全性和可靠性</CardDescription>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-muted-foreground'>严格的数据验证和错误处理，保护您的文档和数据安全</p>
            </CardContent>
            <CardFooter>
              <Button variant='outline' className='w-full' asChild>
                <Link href='/post'>了解更多</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className='container mx-auto px-4 py-20'>
        <Card className='max-w-4xl mx-auto bg-muted/50'>
          <CardHeader className='text-center'>
            <CardTitle className='text-3xl mb-2'>准备开始了吗？</CardTitle>
            <CardDescription className='text-lg'>立即体验 DOCX 文档注入功能，创建您的第一个动态文档</CardDescription>
          </CardHeader>
          <CardContent className='text-center'>
            <p className='text-muted-foreground mb-6'>无需注册，无需配置，直接开始使用</p>
            <Button size='lg' asChild>
              <Link href='/post'>
                <Download className='mr-2 h-5 w-5' />
                开始创建文档
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
