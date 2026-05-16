"use client";

import { useFormState } from "react-dom";
import { submitLead, LeadFormState } from "@/app/actions";

const initialState: LeadFormState = { success: false, message: "" };

const jenisAcaraOptions = [
  "Wisuda",
  "Ulang Tahun",
  "Wedding / Pernikahan",
  "Corporate Event",
  "Grand Opening",
  "Sweet Seventeen",
  "Anniversary Perusahaan",
  "Peluncuran Produk",
  "Lainnya",
];

export default function LeadForm() {
  const [state, action, pending] = useFormState(submitLead, initialState);

  if (state.success && state.message) {
    return (
      <div className="bg-rose-light/20 border border-rose-light rounded-2xl p-8 text-center">
        <svg className="w-12 h-12 text-rose-gold mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="font-playfair text-xl text-charcoal mb-2">Pesan Terkirim!</h3>
        <p className="text-muted text-sm leading-relaxed">{state.message}</p>
        <a
          href="https://wa.me/6285674500030"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex mt-6 bg-green-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors"
        >
          Chat WhatsApp Langsung
        </a>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">
          Nama Lengkap <span className="text-rose-gold">*</span>
        </label>
        <input
          name="nama"
          required
          className="w-full border border-rose-light/50 rounded-xl px-4 py-3 text-sm text-charcoal bg-white focus:outline-none focus:border-rose-gold transition-colors"
          placeholder="Nama Anda"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">
          Perusahaan / Instansi <span className="text-muted text-xs">(opsional)</span>
        </label>
        <input
          name="perusahaan"
          className="w-full border border-rose-light/50 rounded-xl px-4 py-3 text-sm text-charcoal bg-white focus:outline-none focus:border-rose-gold transition-colors"
          placeholder="Nama perusahaan (jika ada)"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">
          Nomor WhatsApp <span className="text-rose-gold">*</span>
        </label>
        <input
          name="whatsapp"
          required
          type="tel"
          className="w-full border border-rose-light/50 rounded-xl px-4 py-3 text-sm text-charcoal bg-white focus:outline-none focus:border-rose-gold transition-colors"
          placeholder="08xx-xxxx-xxxx"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">
          Email <span className="text-muted text-xs">(opsional)</span>
        </label>
        <input
          name="email"
          type="email"
          className="w-full border border-rose-light/50 rounded-xl px-4 py-3 text-sm text-charcoal bg-white focus:outline-none focus:border-rose-gold transition-colors"
          placeholder="email@anda.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">
          Jenis Acara <span className="text-rose-gold">*</span>
        </label>
        <select
          name="jenis_acara"
          required
          className="w-full border border-rose-light/50 rounded-xl px-4 py-3 text-sm text-charcoal bg-white focus:outline-none focus:border-rose-gold transition-colors"
        >
          <option value="">Pilih jenis acara</option>
          {jenisAcaraOptions.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1">
            Tanggal Acara
          </label>
          <input
            name="tanggal_acara"
            type="date"
            className="w-full border border-rose-light/50 rounded-xl px-4 py-3 text-sm text-charcoal bg-white focus:outline-none focus:border-rose-gold transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1">
            Jumlah Item
          </label>
          <input
            name="jumlah_item"
            type="number"
            min="1"
            className="w-full border border-rose-light/50 rounded-xl px-4 py-3 text-sm text-charcoal bg-white focus:outline-none focus:border-rose-gold transition-colors"
            placeholder="misal: 2"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">
          Pesan / Brief
        </label>
        <textarea
          name="pesan"
          rows={4}
          className="w-full border border-rose-light/50 rounded-xl px-4 py-3 text-sm text-charcoal bg-white focus:outline-none focus:border-rose-gold transition-colors resize-none"
          placeholder="Ceritakan tema, warna preferensi, atau kebutuhan khusus..."
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-rose-gold text-white py-4 rounded-full text-sm font-semibold hover:bg-rose-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? "Mengirim..." : "Kirim Permintaan"}
      </button>
    </form>
  );
}
