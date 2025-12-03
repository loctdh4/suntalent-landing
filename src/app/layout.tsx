import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const siteUrl = "https://suntalent.vn";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SunTalent - Đối Tác Tuyển Dụng Chiến Lược Hàng Đầu Việt Nam",
    template: "%s | SunTalent",
  },
  description:
    "SunTalent - Công ty tư vấn nhân sự chuyên nghiệp. Cung cấp dịch vụ tuyển dụng, headhunt, RPO với hơn 10,000+ hồ sơ ứng viên chất lượng. Đối tác tin cậy của 300+ doanh nghiệp.",
  keywords: [
    "tuyển dụng",
    "nhân sự",
    "headhunt",
    "HR",
    "việc làm",
    "tuyển dụng nhân sự",
    "dịch vụ tuyển dụng",
    "RPO",
    "phòng tuyển dụng thuê ngoài",
    "tìm việc",
    "Đà Nẵng",
    "Việt Nam",
    "SunTalent",
    "tư vấn nhân sự",
    "headhunter",
  ],
  authors: [{ name: "SunTalent", url: siteUrl }],
  creator: "SunTalent",
  publisher: "SunTalent",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  // Open Graph - Facebook, LinkedIn
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteUrl,
    siteName: "SunTalent",
    title: "SunTalent - Đối Tác Tuyển Dụng Chiến Lược Hàng Đầu Việt Nam",
    description:
      "Kết nối nhân tài, kiến tạo thành công. SunTalent cung cấp giải pháp tuyển dụng chuyên nghiệp với hơn 10,000+ hồ sơ ứng viên và 300+ doanh nghiệp đối tác.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SunTalent - Đối Tác Tuyển Dụng Chiến Lược",
      },
    ],
  },
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "SunTalent - Đối Tác Tuyển Dụng Chiến Lược",
    description:
      "Kết nối nhân tài, kiến tạo thành công. Giải pháp tuyển dụng chuyên nghiệp với hơn 10,000+ hồ sơ ứng viên.",
    images: ["/og-image.jpg"],
    creator: "@suntalent",
  },
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Verification (thay bằng mã thực tế khi có)
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-verification-code",
  // },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "SunTalent",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/assets/logo.png`,
        width: 200,
        height: 60,
      },
      description:
        "Công ty TNHH Tư Vấn Nhân Sự Doanh Nghiệp SunTalent - Đối tác tuyển dụng chiến lược hàng đầu Việt Nam",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Đà Nẵng",
        addressCountry: "VN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+84-XXX-XXX-XXX",
        contactType: "customer service",
        availableLanguage: ["Vietnamese", "English"],
      },
      sameAs: [
        "https://www.facebook.com/suntalent",
        "https://www.linkedin.com/company/suntalent",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "SunTalent",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "vi-VN",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "SunTalent - Đối Tác Tuyển Dụng Chiến Lược Hàng Đầu Việt Nam",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#organization`,
      },
      description:
        "Kết nối nhân tài, kiến tạo thành công. SunTalent cung cấp giải pháp tuyển dụng chuyên nghiệp với hơn 10,000+ hồ sơ ứng viên.",
      inLanguage: "vi-VN",
    },
    {
      "@type": "Service",
      name: "Dịch vụ Tuyển dụng Nhân sự",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      description:
        "Cung cấp dịch vụ tuyển dụng chuyên nghiệp, headhunt cấp cao, RPO cho doanh nghiệp",
      areaServed: {
        "@type": "Country",
        name: "Vietnam",
      },
      serviceType: ["Headhunting", "RPO", "Recruitment"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
