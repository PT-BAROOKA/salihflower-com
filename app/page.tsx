import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Salih Flower — Premium Paper Flower & Custom Board Klaten",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Salih Flower",
  description:
    "Premium custom congratulation board dan paper flower decor handmade dari Klaten",
  telephone: "+6285674500030",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Klaten",
    addressRegion: "Jawa Tengah",
    addressCountry: "ID",
  },
  url: "https://salihflower.com",
  priceRange: "Rp 150.000 – Rp 1.000.000+",
};

const pillars = [
  {
    title: "Spesialis Custom Brand & Acara",
    desc: "Logo, warna, dan tema bisa disesuaikan penuh dengan identitas brand atau tema acara Anda.",
  },
  {
    title: "Handmade Premium, Detail Rapi",
    desc: "Setiap unit dikerjakan satu per satu dengan QC ketat — tidak ada toleransi untuk kualitas biasa.",
  },
  {
    title: "Paper Flower 3D Tahan Lama",
    desc: "Bukan bunga segar yang layu. Paper flower kami bisa dipajang sebagai kenang-kenangan permanen.",
  },
  {
    title: "Brand Klaten, Standar Nasional",
    desc: "Kualitas setara vendor kota besar, harga terjangkau, pengiriman ke seluruh Indonesia.",
  },
];

const products = [
  { name: "Mini Greeting Board", price: "Rp 150.000" },
  { name: "Congratulation Board Persegi", price: "Rp 350.000" },
  { name: "Signature Round Board", price: "Rp 500.000" },
  { name: "Corporate Custom Board", price: "Rp 1.000.000" },
  { name: "Event Decor / Paper Flower", price: "Request Quote" },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-ivory min-h-[90vh] flex items-center">
        <div className="max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-rose-gold text-sm font-semibold uppercase tracking-widest mb-4">
              Handmade · Premium · Custom
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight mb-6">
              Custom Board Buatan Tangan, Eksklusif untuk Momen Spesialmu
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Congratulation board dan paper flower decor premium dari Klaten.
              Dibuat dengan tangan, disesuaikan dengan brand dan tema acara Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/corporate"
                className="inline-flex items-center justify-center bg-rose-gold text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-rose-dark transition-colors"
              >
                Order Custom Sekarang
              </Link>
              <Link
                href="/produk"
                className="inline-flex items-center justify-center border border-rose-gold text-rose-gold px-8 py-4 rounded-full text-sm font-semibold hover:bg-rose-light/20 transition-colors"
              >
                Lihat Katalog
              </Link>
            </div>
          </div>
          <div className="bg-rose-light/30 rounded-3xl aspect-square flex flex-col items-center justify-center p-8 text-center">
            <div className="w-24 h-24 rounded-full bg-rose-gold/20 flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-rose-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <p className="font-playfair text-2xl text-charcoal mb-2">Salih Flower</p>
            <p className="text-muted text-sm">Premium Handmade Paper Flower</p>
            <p className="text-rose-gold text-xs mt-2 font-semibold">Klaten · Solo · Jogja</p>
          </div>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-rose-gold text-sm font-semibold uppercase tracking-widest">Kenapa Salih Flower?</span>
          <h2 className="font-playfair text-3xl md:text-4xl text-charcoal mt-3">
            Empat Alasan untuk Memilih Kami
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((p, i) => (
            <div key={i} className="bg-ivory rounded-2xl p-8 border border-rose-light/30">
              <div className="w-10 h-10 rounded-full bg-rose-gold/10 flex items-center justify-center mb-4">
                <span className="text-rose-gold font-playfair font-bold">{i + 1}</span>
              </div>
              <h3 className="font-playfair text-xl text-charcoal mb-2">{p.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Price preview */}
      <section className="bg-charcoal py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-rose-light text-sm font-semibold uppercase tracking-widest">Harga Transparan</span>
          <h2 className="font-playfair text-3xl md:text-4xl text-white mt-3 mb-10">
            Pilihan untuk Setiap Kebutuhan
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {products.map((p, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-rose-gold/50 transition-colors"
              >
                <h3 className="text-white font-semibold mb-2">{p.name}</h3>
                <p className="text-rose-light text-lg font-playfair">
                  {p.price === "Request Quote" ? (
                    <span className="text-rose-gold text-sm">Hubungi untuk harga</span>
                  ) : (
                    <>Mulai dari <span className="font-bold">{p.price}</span></>
                  )}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/produk"
            className="inline-flex mt-10 bg-rose-gold text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-rose-dark transition-colors"
          >
            Lihat Semua Produk
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 max-w-2xl mx-auto px-4 text-center">
        <h2 className="font-playfair text-3xl md:text-4xl text-charcoal mb-4">
          Siap Pesan untuk Acara Spesialmu?
        </h2>
        <p className="text-muted mb-8">
          Konsultasi gratis via WhatsApp. Tim kami siap membantu kamu merancang
          custom board yang sempurna.
        </p>
        <a
          href="https://wa.me/6285674500030?text=Halo%20Salih%20Flower%2C%20saya%20mau%20pesan%20custom%20board"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors"
        >
          Chat WhatsApp Sekarang
        </a>
      </section>
    </>
  );
}
