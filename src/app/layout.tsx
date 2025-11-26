import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SunTalent - Đối Tác Tuyển Dụng Chiến Lược",
  description: "Công ty TNHH Tư Vấn Nhân Sự Doanh Nghiệp SunTalent - Chuyên cung cấp các giải pháp tìm kiếm và phát triển nhân tài toàn diện tại Việt Nam",
  keywords: "tuyển dụng, nhân sự, headhunt, HR, việc làm, Đà Nẵng, Việt Nam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
