import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <span className="font-playfair text-8xl text-rose-gold/20 font-bold mb-4">404</span>
      <p className="text-rose-gold text-sm font-semibold uppercase tracking-widest mb-3">
        Halaman Tidak Ditemukan
      </p>
      <h1 className="font-playfair text-3xl text-charcoal mb-3">
        Ups, Halaman Ini Tidak Ada
      </h1>
      <p className="text-muted text-sm mb-8 max-w-sm">
        Halaman yang kamu cari mungkin sudah dipindah atau tidak pernah ada.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="bg-rose-gold text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-rose-dark transition-colors"
        >
          Kembali ke Beranda
        </Link>
        <Link
          href="/portfolio"
          className="border border-rose-gold text-rose-gold px-6 py-3 rounded-full text-sm font-semibold hover:bg-rose-light/20 transition-colors"
        >
          Lihat Portfolio
        </Link>
      </div>
    </div>
  );
}
