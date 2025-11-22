import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "صورة رجل تعب من الدنيا",
  description: "مشهد تعبيري لرجل مرهق من الحياة اليومية مع لمسة فنية على الويب.",
};

const plex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={plex.className}>{children}</body>
    </html>
  );
}
