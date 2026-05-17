import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Kenali lebih dekat Salih Flower — brand paper flower premium handmade dari Klaten.",
};

export default function TentangPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-14">
        <span className="text-rose-gold text-sm font-semibold uppercase tracking-widest">Tentang Kami</span>
        <h1 className="font-playfair text-4xl md:text-5xl text-charcoal mt-3 mb-6">
          Lahir dari Kecintaan pada Detail
        </h1>
        <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto">
          Salih Flower adalah brand custom congratulation board dan paper flower decor
          premium yang berbasis di Klaten, Jawa Tengah. Kami percaya bahwa setiap momen
          spesial layak diabadikan dengan karya yang indah dan bermakna.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="relative rounded-3xl overflow-hidden aspect-video">
          <Image
            src="/images/img-05-team-studio.webp"
            alt="Tim workshop Salih Flower — handmade paper flower crafting"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <h2 className="font-playfair text-2xl text-charcoal mb-4">Kisah di Balik Salih Flower</h2>
          <p className="text-muted leading-relaxed mb-4">
            Berawal dari hobi membuat kerajinan tangan, Salih Flower tumbuh menjadi brand
            dekorasi premium yang melayani kebutuhan individu maupun perusahaan di seluruh
            Jawa Tengah dan sekitarnya.
          </p>
          <p className="text-muted leading-relaxed">
            Dengan pengerjaan penuh perhatian pada setiap detail, kami memastikan setiap
            produk yang kami hasilkan tidak sekadar indah — tapi juga memiliki makna.
            Paper flower kami bisa bertahan lama sebagai kenang-kenangan berharga.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          { label: "Momen Tersebut", val: "500+", desc: "Order sukses sejak berdiri" },
          { label: "Kota Terlayani", val: "10+", desc: "Dari Klaten hingga seluruh Indonesia" },
          { label: "Kepuasan Klien", val: "100%", desc: "Garansi revisi sampai puas" },
        ].map((s, i) => (
          <div key={i} className="text-center bg-ivory rounded-2xl p-8 border border-rose-light/30">
            <p className="font-playfair text-4xl text-rose-gold mb-2">{s.val}</p>
            <p className="font-semibold text-charcoal text-sm">{s.label}</p>
            <p className="text-muted text-xs mt-1">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-charcoal rounded-3xl p-10 text-center">
        <h2 className="font-playfair text-2xl text-white mb-4">Siap Berkolaborasi?</h2>
        <p className="text-white/60 mb-6">Ceritakan kebutuhan Anda — kami bantu wujudkan.</p>
        <Link
          href="/corporate"
          className="inline-flex bg-rose-gold text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-rose-dark transition-colors"
        >
          Mulai Order
        </Link>
      </div>
    </div>
  );
}
