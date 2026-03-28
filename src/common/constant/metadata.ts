export const METADATA = {
  title: "Real Estate",
  authors: {
    name: "Abdur Rozaq Fakhruddin",
    url: process.env.DOMAIN || "http://localhost:3000",
  },
  creator: "Abdur Rozaq F",
  description:
    "Website Real Estate, landing page, residential, commercial, industrial, raw land, and special use",
  keyword: [
    "houses for sale",
    "tiny houses for sale",
    "cheap houses for sale",
    " house boats for sale",
    "zillow houses for sale",
    "Houses for sale near me",
    "houses for sale by owner",
    "cheap houses for sale near me",
    "houses for sale near me zillow",
    "houses for sale near me by owner",
  ],
  openGraph: {
    type: "website",
    locale: "id-ID",
    title: "Real Estate",
    siteName: "Real Estate",
    url: process.env.DOMAIN || "https://realestate-landingpage.vercel.app/",
    description:
      "Website Real Estate, landing page, residential, commercial, industrial, raw land, and special use",
    images: {
      url: `${process.env.DOMAIN || "https://realestate-landingpage.vercel.app"}/og.png`,
      width: 1200,
      height: 630,
      alt: "Real Estate",
    },
  },
  siteUrl: process.env.DOMAIN || "https://realestate-landingpage.vercel.app/",
  manifest: process.env.DOMAIN ? `${process.env.DOMAIN}/site.webmanifest` : "https://realestate-landingpage.vercel.app/site.webmanifest",
};