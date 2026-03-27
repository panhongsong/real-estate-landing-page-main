import Link from "next/link";

export default function Tagline() {
  return (
    <div className="w-full lg:w-auto">
      <div className="mb-6">
        <Link href="/" aria-label="home">
          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight transition-colors">
            REAL ESTATE
          </h2>
        </Link>
      </div>
      <p className="text-sm text-neutral-300 max-w-[23ch]">
        From luxury residential to golden commercial spaces, we connect global
        investors with premium properties and trusted partners worldwide.
      </p>
    </div>
  );
}