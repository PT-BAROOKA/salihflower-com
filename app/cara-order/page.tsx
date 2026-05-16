import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cara Order",
  description: "Panduan langkah demi langkah cara memesan custom board dan paper flower di Salih Flower.",
};

const steps = [
  {
    num: "01",
    title: "Konsultasi Awal",
    desc: "Hubungi kami via WhatsApp atau isi form di halaman Corporate. Ceritakan kebutuhan, tema, tanggal acara, dan anggaran Anda.",
  },
  {
    num: "02",
    title: "Desain & Penawaran",
    desc: "Tim kami akan menyusun konsep desain dan memberikan penawaran harga dalam 1x24 jam. Revisi desain tersedia sampai Anda puas.",
  },
  {
    num: "03",
    title: "Pembayaran DP 50%",
    desc: "Setelah desain disetujui, lakukan pembayaran DP 50% via transfer bank atau Xendit. Invoice akan dikirimkan untuk klien corporate.",
  },
  {
    num: "04",
    title: "Proses Produksi",
    desc: "Pengerjaan dimulai setelah DP diterima. Lead time 1–3 hari kerja untuk order reguler, lebih cepat bisa dikonfirmasi.",
  },
  {
    num: "05",
    title: "Quality Control",
    desc: "Setiap item melewati pengecekan kualitas menyeluruh sebelum dikemas. Kami kirimkan foto produk jadi untuk approval Anda.",
  },
  {
    num: "06",
    title: "Pengiriman & Pelunasan",
    desc: "Pelunasan dilakukan sebelum pengiriman. Tersedia jasa kirim ekspres untuk kebutuhan mendadak. Ambil langsung juga bisa.",
  },
];

export default function CaraOrderPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <span className="text-rose-gold text-sm font-semibold uppercase tracking-widest">Cara Order</span>
        <h1 className="font-playfair text-4xl md:text-5xl text-charcoal mt-3 mb-4">
          Mudah, Cepat, dan Transparan
        </h1>
        <p className="text-muted max-w-xl mx-auto">
          Proses pemesanan kami dirancang sederhana agar Anda bisa fokus pada momen spesial, bukan urusan teknis.
        </p>
      </div>

      <div className="space-y-6 mb-16">
        {steps.map((s, i) => (
          <div key={i} className="flex gap-6 items-start bg-ivory rounded-2xl p-8 border border-rose-light/30">
            <span className="font-playfair text-4xl text-rose-light font-bold flex-shrink-0">{s.num}</span>
            <div>
              <h3 className="font-playfair text-xl text-charcoal mb-2">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-ivory rounded-2xl p-8 border border-rose-light/30 mb-10">
        <h3 className="font-playfair text-xl text-charcoal mb-4">Pembayaran yang Diterima</h3>
        <ul className="grid grid-cols-2 gap-3 text-sm text-muted">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-gold inline-block"></span>
            Transfer BCA / Mandiri / BRI
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-gold inline-block"></span>
            Xendit (QRIS, VA, dll)
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-gold inline-block"></span>
            Invoice NET 14 (corporate)
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-gold inline-block"></span>
            DP 50%, Lunas sebelum kirim
          </li>
        </ul>
      </div>

      <div className="text-center">
        <Link
          href="/corporate"
          className="inline-flex bg-rose-gold text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-rose-dark transition-colors"
        >
          Mulai Order Sekarang
        </Link>
      </div>
    </div>
  );
}
