import type { Metadata, Viewport } from "next";
import { indexable, site } from "@/lib/site";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fbfaf7",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.origin),
  title: { default: site.title, template: "%s | ترانک" },
  description: site.description,
  applicationName: "ترانک",
  alternates: { canonical: "/" },
  robots: { index: indexable, follow: indexable },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: "ترانک | Taranak",
    title: site.title,
    description: site.description,
    url: site.origin,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Taranak – ترانک، نرم‌افزار مدیریت خانه بازی" }],
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body>
        <a className="skip-link" href="#main-content">رفتن به محتوای اصلی</a>
        {children}
      </body>
    </html>
  );
}
