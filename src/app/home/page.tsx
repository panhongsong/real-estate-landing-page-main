import { Metadata } from "next";
import Home from "@/modules/home/components/Home";

export const metadata: Metadata = {
  title: "Real Estate - Home",
  description: "Helping You Get More For Your Real Estate",
  alternates: {
    canonical: `${process.env.DOMAIN || 'http://localhost:3000'}/home`,
  },
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}