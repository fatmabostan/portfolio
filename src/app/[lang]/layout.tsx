import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "../globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ["latin"], variable: "--font-serif", weight: "400" });

export const metadata: Metadata = {
  title: "Fatma Bostan",
  description: "Created with ❤️ in Ankara",
};

interface LangParams {
  dict: string;
}

export async function generateStaticParams() {
  return [{ dict: "en" }, { dict: "tr" }];
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Awaited<LangParams>; // Awaited ile çözüm tipi kullanıldı
}>) {
  return (
    <html lang={params.dict} className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-[#141619] text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
