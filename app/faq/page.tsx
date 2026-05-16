import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Pertanyaan yang sering ditanyakan tentang Salih Flower — custom board dan paper flower.",
};

const faqs = [
  {
    q: "Berapa lama lead time pengerjaan?",
    a: "Standar 1–3 hari kerja setelah DP diterima dan desain disetujui. Untuk order mendadak (H-1 s/d H-2), tersedia dengan biaya tambahan — silakan konfirmasi via WhatsApp.",
  },
  {
    q: "Apakah bisa dikirim ke luar Klaten?",
    a: "Ya. Kami mengirim ke seluruh Indonesia via JNE, J&T, SiCepat, atau ekspedisi lain sesuai pilihan. Pengiriman kilat tersedia untuk kebutuhan mendesak.",
  },
  {
    q: "Apakah ada revisi desain?",
    a: "Ya, tersedia revisi desain hingga disetujui sebelum proses produksi dimulai. Setelah produksi berjalan, revisi akan dikenai biaya tambahan.",
  },
  {
    q: "Minimum order berapa?",
    a: "Untuk order individu tidak ada minimum. Untuk corporate order, harga dan minimum quantity tergantung spesifikasi — silakan isi form Corporate untuk penawaran.",
  },
  {
    q: "Apakah bisa custom logo dan warna brand?",
    a: "Tentu. Kami spesialis custom brand — logo, warna, font, dan tema acara bisa disesuaikan penuh. Kirimkan brief atau contoh referensi saat konsultasi.",
  },
  {
    q: "Bagaimana cara pembayaran?",
    a: "Transfer bank (BCA, Mandiri, BRI), Xendit (QRIS, Virtual Account), atau invoice NET 14 untuk klien corporate. Sistem DP 50% — lunas sebelum pengiriman.",
  },
  {
    q: "Apakah paper flower tahan lama?",
    a: "Ya. Paper flower premium kami bisa bertahan berbulan-bulan hingga bertahun-tahun jika disimpan di tempat kering dan terhindar dari paparan langsung sinar matahari.",
  },
  {
    q: "Bisa ambil langsung di Klaten?",
    a: "Bisa. Silakan konfirmasi via WhatsApp untuk jadwal pickup. Kami berlokasi di Klaten, Jawa Tengah.",
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <div className="text-center mb-14">
        <span className="text-rose-gold text-sm font-semibold uppercase tracking-widest">FAQ</span>
        <h1 className="font-playfair text-4xl md:text-5xl text-charcoal mt-3 mb-4">
          Pertanyaan yang Sering Ditanyakan
        </h1>
      </div>

      <div className="space-y-4 mb-16">
        {faqs.map((item, i) => (
          <div key={i} className="bg-ivory rounded-2xl p-8 border border-rose-light/30">
            <h3 className="font-playfair text-lg text-charcoal mb-3">{item.q}</h3>
            <p className="text-muted text-sm leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>

      <div className="text-center bg-charcoal rounded-3xl p-10">
        <h2 className="font-playfair text-2xl text-white mb-4">Masih ada pertanyaan?</h2>
        <p className="text-white/60 mb-6">Tim kami siap menjawab via WhatsApp.</p>
        <a
          href="https://wa.me/6285674500030?text=Halo%2C%20saya%20ada%20pertanyaan%20tentang%20Salih%20Flower"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex bg-green-500 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors"
        >
          Chat WhatsApp
        </a>
      </div>
    </div>
  );
}
