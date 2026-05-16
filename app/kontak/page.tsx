import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi Salih Flower — konsultasi custom board dan paper flower via WhatsApp atau form.",
};

export default function KontakPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-14">
        <span className="text-rose-gold text-sm font-semibold uppercase tracking-widest">Kontak</span>
        <h1 className="font-playfair text-4xl md:text-5xl text-charcoal mt-3 mb-4">
          Ayo Mulai Bicara
        </h1>
        <p className="text-muted max-w-xl mx-auto">
          Konsultasi gratis, tidak ada komitmen. Ceritakan kebutuhan Anda dan kami
          akan berikan solusi terbaik.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="space-y-6 mb-8">
            <div className="bg-ivory rounded-2xl p-6 border border-rose-light/30">
              <h3 className="font-semibold text-charcoal mb-1">WhatsApp</h3>
              <a
                href="https://wa.me/6285674500030"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-gold text-sm hover:underline"
              >
                +62 856-7450-030
              </a>
              <p className="text-muted text-xs mt-1">Respons cepat, chat langsung dengan tim</p>
            </div>
            <div className="bg-ivory rounded-2xl p-6 border border-rose-light/30">
              <h3 className="font-semibold text-charcoal mb-1">Lokasi</h3>
              <p className="text-muted text-sm">Klaten, Jawa Tengah</p>
              <p className="text-muted text-xs mt-1">Pickup tersedia — konfirmasi jadwal dulu ya</p>
            </div>
            <div className="bg-ivory rounded-2xl p-6 border border-rose-light/30">
              <h3 className="font-semibold text-charcoal mb-1">Jam Operasional</h3>
              <p className="text-muted text-sm">Senin – Sabtu: 08.00 – 21.00 WIB</p>
              <p className="text-muted text-xs mt-1">Minggu & hari libur: WhatsApp saja</p>
            </div>
          </div>

          <a
            href="https://wa.me/6285674500030?text=Halo%20Salih%20Flower%2C%20saya%20mau%20tanya"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors"
          >
            Chat WhatsApp Sekarang
          </a>
        </div>

        <div>
          <h2 className="font-playfair text-2xl text-charcoal mb-6">Kirim Pesan</h2>
          <LeadForm />
        </div>
      </div>
    </div>
  );
}
