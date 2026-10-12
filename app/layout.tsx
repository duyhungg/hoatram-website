import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hòa Tràm | Phân Bón & Thuốc Bảo Vệ Thực Vật - Kiến Tạo Mùa Vàng",
  description: "Công ty Nông Dược Hòa Tràm chuyên cung ứng phân bón sinh học và thuốc bảo vệ thực vật chất lượng cao, đồng hành cùng nhà nông kiến tạo mùa vàng bội thu.",
  keywords: ["Hòa Tràm", "nông dược hòa tràm", "phân bón hòa tràm", "thuốc bảo vệ thực vật", "thuốc trừ sâu sinh học", "thuốc trị nấm bệnh"],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
