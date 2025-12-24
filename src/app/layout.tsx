import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' data-app='study-demo'>
      <body>{children}</body>
    </html>
  );
}
