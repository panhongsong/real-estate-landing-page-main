import { Ubuntu } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

import { METADATA } from "@/common/constant/metadata";
import Layout from "@/components/layouts";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.DOMAIN || "http://localhost:3000"
  ),
  title: {
    default: "Real Estate",
    template: "%s | Real Estate",
  },
  description: METADATA.description,
  keywords: METADATA.keyword,
  authors: {
    name: METADATA.authors.name,
    url: METADATA.authors.url,
  },
  creator: METADATA.creator,
  openGraph: {
    type: "website",
    locale: "id-ID",
    title: "Real Estate",
    siteName: "Real Estate",
    url: METADATA.openGraph.url,
    description:
      METADATA.description,
    images: [{
      url: METADATA.openGraph.images.url,
      width: METADATA.openGraph.images.width,
      height: METADATA.openGraph.images.height,
      alt: METADATA.openGraph.images.alt,
    }],
  },
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
  // verification: {
  //   google: "google",
  //   yandex: "yandex",
  //   yahoo: "yahoo",
  //   other: {
  //     me: ["benzhao", "linkcard"],
  //   },
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}