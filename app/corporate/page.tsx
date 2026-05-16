import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Corporate & Custom Order",
  description: "Formulir custom order untuk perusahaan dan event besar. Dapatkan penawaran khusus dari Salih Flower.",
};

const benefits = [
  "Custom logo, warna, dan identitas brand Anda",
  "Invoice resmi untuk keperluan keuangan perusahaan",
  "Volume order tersedia dengan harga khusus",
  "Lead time ekspres tersedia untuk kebutuhan mendadak",
  "Dedicated account manager untuk klien corporate",
  "Pengiriman ke seluruh Indonesia",
];

export default function CorporatePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <span className="text-rose-gold text-sm font-semibold uppercase tracking-widest">Corporate & Custom Order</span>
        <h1 className="font-playfair text-4xl md:text-5xl text-charcoal mt-3 mb-4">
          Solusi Dekorasi untuk Bisnis Anda
        </h1>
        <p className="text-muted max-w-2xl mx-auto">
          Kami melayani perusahaan, event organizer, dan institusi dengan kebutuhan custom
          skala besar. Dapatkan penawaran khusus dengan mengisi form di bawah.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-playfair text-2xl text-charcoal mb-6">Keuntungan Corporate Order</h2>
          <ul className="space-y-4 mb-10">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted">
                <span className="w-5 h-5 rounded-full bg-rose-gold/10 flex-shrink-0 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-rose-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="bg-ivory rounded-2xl p-6 border border-rose-light/30">
            <p className="text-sm text-muted mb-3">Lebih suka via WhatsApp?</p>
            <a
              href="https://wa.me/6285674500030?text=Halo%2C%20saya%20dari%20perusahaan%20dan%20ingin%20tanya%20tentang%20corporate%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-green-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors"
            >
              Chat Langsung
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-playfair text-2xl text-charcoal mb-6">Form Permintaan Penawaran</h2>
          <LeadForm />
        </div>
      </div>
    </div>
  );
}
