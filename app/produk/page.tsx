import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Produk",
  description: "Katalog lengkap produk Salih Flower — custom congratulation board dan paper flower decor.",
};

const products = [
  {
    name: "Mini Greeting Board",
    price: "Rp 150.000",
    desc: "Cocok untuk ucapan selamat personal, kecil namun berkesan. Ukuran A4, tersedia dalam berbagai warna.",
    ideal: "Hadiah pribadi, ucapan ulang tahun",
  },
  {
    name: "Congratulation Board Persegi",
    price: "Rp 350.000",
    desc: "Board persegi premium dengan paper flower 3D, custom nama dan ucapan. Ukuran 40x40 cm.",
    ideal: "Wisuda, promosi jabatan, anniversary",
  },
  {
    name: "Signature Round Board",
    price: "Rp 500.000",
    desc: "Board bulat eksklusif dengan rangkaian paper flower melingkar. Tampilan premium dan instagrammable.",
    ideal: "Wedding, sweet seventeen, brand activation",
  },
  {
    name: "Corporate Custom Board",
    price: "Rp 1.000.000",
    desc: "Disesuaikan penuh dengan identitas brand Anda — logo, warna corporate, dan pesan kustom. Minimum order dan harga berdasarkan kebutuhan.",
    ideal: "Peluncuran produk, anniversary perusahaan, event B2B",
  },
  {
    name: "Event Decor / Paper Flower",
    price: "Request Quote",
    desc: "Dekorasi paper flower untuk event berskala besar. Backdrop, arch, table decor, dan instalasi custom.",
    ideal: "Wedding, pameran, corporate event, grand opening",
  },
];

export default function ProdukPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-14">
        <span className="text-rose-gold text-sm font-semibold uppercase tracking-widest">Katalog Produk</span>
        <h1 className="font-playfair text-4xl md:text-5xl text-charcoal mt-3 mb-4">
          Pilihan Premium untuk Setiap Momen
        </h1>
        <p className="text-muted max-w-xl mx-auto">
          Setiap produk dibuat to order — bisa dikustomisasi sesuai kebutuhan dan preferensi Anda.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-ivory border border-rose-light/30 rounded-2xl p-8 hover:border-rose-gold/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <h2 className="font-playfair text-xl text-charcoal">{p.name}</h2>
              <span className="text-rose-gold font-semibold text-sm whitespace-nowrap ml-4">
                {p.price === "Request Quote" ? "Request Quote" : `Mulai ${p.price}`}
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-4">{p.desc}</p>
            <div className="bg-rose-light/20 rounded-lg px-4 py-2">
              <span className="text-xs text-rose-gold font-semibold uppercase tracking-wider">Ideal untuk: </span>
              <span className="text-xs text-muted">{p.ideal}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center bg-charcoal rounded-3xl p-12">
        <h2 className="font-playfair text-2xl text-white mb-4">Butuh Sesuatu yang Lebih Custom?</h2>
        <p className="text-white/60 mb-6 max-w-md mx-auto">
          Tidak menemukan yang sesuai? Ceritakan kebutuhan Anda dan kami akan buatkan solusi terbaik.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/corporate"
            className="bg-rose-gold text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-rose-dark transition-colors"
          >
            Isi Form Custom Order
          </Link>
          <a
            href="https://wa.me/6285674500030?text=Halo%2C%20saya%20mau%20tanya%20tentang%20produk%20custom"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors"
          >
            Chat WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
