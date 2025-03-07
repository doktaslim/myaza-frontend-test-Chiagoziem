import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: "MyAza Test",
  description: "Test For Myaza Frontend role",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${karla.className} antialiased min-h-dvh`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
