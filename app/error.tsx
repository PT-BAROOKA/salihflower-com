"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <p className="text-rose-gold text-sm font-semibold uppercase tracking-widest mb-4">
        Terjadi Kesalahan
      </p>
      <h2 className="font-playfair text-3xl text-charcoal mb-3">
        Ada yang Tidak Beres
      </h2>
      <p className="text-muted text-sm mb-8 max-w-sm">
        Maaf, ada kesalahan teknis. Silakan coba lagi atau hubungi kami via WhatsApp.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={reset}
          className="bg-rose-gold text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-rose-dark transition-colors"
        >
          Coba Lagi
        </button>
        <a
          href="https://wa.me/6285674500030"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors"
        >
          Hubungi via WhatsApp
        </a>
      </div>
    </div>
  );
}
