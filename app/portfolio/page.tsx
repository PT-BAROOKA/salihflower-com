import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Gallery karya Salih Flower — custom board dan paper flower decor untuk berbagai acara.",
};

const portfolioItems = [
  { id: 11, img: "/images/img-11-portfolio-wisuda-1.webp", category: "Wisuda", label: "Congratulation Board — Wisuda S1" },
  { id: 12, img: "/images/img-12-portfolio-corporate-1.webp", category: "Corporate", label: "Corporate Board — HUT Perusahaan" },
  { id: 13, img: "/images/img-13-portfolio-wedding-1.webp", category: "Wedding", label: "Round Board — Ahmad & Sari Wedding" },
  { id: 14, img: "/images/img-14-portfolio-ulang-tahun-1.webp", category: "Ulang Tahun", label: "Custom Board — HUT Perusahaan" },
  { id: 15, img: "/images/img-15-portfolio-grand-opening.webp", category: "Event", label: "Grand Opening — Toko Berkah Jaya" },
  { id: 16, img: "/images/img-16-portfolio-promosi-jabatan.webp", category: "Corporate", label: "Promosi Jabatan — Keep Inspiring" },
  { id: 17, img: "/images/img-17-portfolio-sweet-seventeen.webp", category: "Ulang Tahun", label: "Sweet Seventeen — Yasmine" },
  { id: 18, img: "/images/img-18-portfolio-peluncuran-produk.webp", category: "Corporate", label: "Launching — Produk Inovasi 2026" },
  { id: 19, img: "/images/img-19-portfolio-anniversary.webp", category: "Corporate", label: "Anniversary Perusahaan — 25 Tahun" },
  { id: 20, img: "/images/img-20-portfolio-wisuda-s2.webp", category: "Wisuda", label: "Wisuda S2 — dr. Budi Santoso, M.Kes" },
  { id: 21, img: "/images/img-21-portfolio-arch-wedding.webp", category: "Wedding", label: "Paper Flower Arch — Wedding" },
  { id: 22, img: "/images/img-22-portfolio-corporate-gathering.webp", category: "Event", label: "Annual Gathering 2026 — Bersama Kita Maju" },
];

const categories = ["Semua", "Wisuda", "Corporate", "Wedding", "Ulang Tahun", "Event"];

export default function PortfolioPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-14">
        <span className="text-rose-gold text-sm font-semibold uppercase tracking-widest">Portfolio</span>
        <h1 className="font-playfair text-4xl md:text-5xl text-charcoal mt-3 mb-4">
          Karya yang Berbicara
        </h1>
        <p className="text-muted max-w-xl mx-auto">
          Setiap board adalah karya unik. Lihat koleksi kami untuk inspirasi desain custom Anda.
        </p>
      </div>

      <div className="flex gap-3 flex-wrap justify-center mb-12">
        {categories.map((c) => (
          <span
            key={c}
            className={`px-5 py-2 rounded-full text-sm cursor-pointer border transition-colors ${
              c === "Semua"
                ? "bg-rose-gold text-white border-rose-gold"
                : "border-rose-light/50 text-muted hover:border-rose-gold hover:text-rose-gold"
            }`}
          >
            {c}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl overflow-hidden border border-rose-light/30 hover:border-rose-gold/50 transition-colors group"
          >
            <div className="relative aspect-square">
              <Image
                src={item.img}
                alt={item.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-300 flex items-end">
                <div className="p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 w-full">
                  <span className="text-xs text-rose-gold font-semibold uppercase tracking-wider bg-white/90 px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <p className="text-white text-xs mt-1 font-medium leading-tight">{item.label}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <p className="text-muted mb-6">Tertarik dengan salah satu karya kami?</p>
        <a
          href="https://wa.me/6285674500030?text=Halo%2C%20saya%20lihat%20portfolio%20Salih%20Flower%20dan%20mau%20tanya%20tentang%20custom%20board"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex bg-green-500 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors"
        >
          Diskusi via WhatsApp
        </a>
      </div>
    </div>
  );
}
