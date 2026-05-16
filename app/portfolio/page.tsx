import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Gallery karya Salih Flower — custom board dan paper flower decor untuk berbagai acara.",
};

const categories = ["Semua", "Wisuda", "Corporate", "Wedding", "Ulang Tahun", "Event"];
const placeholders = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  category: ["Wisuda", "Corporate", "Wedding", "Ulang Tahun", "Event", "Wisuda"][i % 6],
  label: [
    "Mini Greeting Board — Wisuda",
    "Corporate Board — Brand Activation",
    "Round Board — Wedding",
    "Custom Board — HUT Perusahaan",
    "Event Decor — Grand Opening",
    "Congratulation Board — Promosi",
    "Mini Board — Sweet Seventeen",
    "Corporate Custom — Peluncuran Produk",
    "Round Board — Anniversary",
    "Custom Board — Wisuda S2",
    "Paper Flower Arch — Wedding",
    "Corporate Board — Gathering",
  ][i],
}));

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
        {placeholders.map((item) => (
          <div
            key={item.id}
            className="bg-ivory border border-rose-light/30 rounded-2xl aspect-square flex flex-col items-center justify-center p-4 hover:border-rose-gold/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-rose-gold/10 flex items-center justify-center mb-3 group-hover:bg-rose-gold/20 transition-colors">
              <svg className="w-6 h-6 text-rose-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-xs text-rose-gold font-semibold uppercase tracking-wider mb-1">{item.category}</span>
            <p className="text-xs text-muted text-center leading-tight">{item.label}</p>
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
