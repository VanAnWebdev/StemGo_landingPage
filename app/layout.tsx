import type { Metadata } from "next";
import { Inter, Permanent_Marker } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"], variable: '--font-sans' });
const marker = Permanent_Marker({ weight: '400', subsets: ["latin"], variable: '--font-marker' });

export const metadata: Metadata = {
  title: "STEMGO | Khám phá vũ trụ tri thức",
  description: "Ứng dụng học Lập trình và Toán học Gamification offline-first dành cho trẻ 6-10 tuổi.",
  openGraph: {
    title: "STEMGO | Khám phá vũ trụ tri thức",
    description: "Ứng dụng học Lập trình và Toán học Gamification offline-first dành cho trẻ 6-10 tuổi.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} ${marker.variable} font-sans bg-space min-h-screen text-slate-50 antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
