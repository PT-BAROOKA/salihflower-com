import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-playfair text-xl text-white mb-3">
            Salih <span className="text-rose-gold">Flower</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Premium custom congratulation board dan paper flower decor
            handmade dari Klaten. Kualitas nasional, sentuhan personal.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
            Halaman
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/produk", label: "Produk" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/corporate", label: "Corporate Order" },
              { href: "/cara-order", label: "Cara Order" },
              { href: "/faq", label: "FAQ" },
              { href: "/kontak", label: "Kontak" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-rose-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
            Hubungi Kami
          </h4>
          <p className="text-sm mb-2">Klaten, Jawa Tengah</p>
          <a
            href="https://wa.me/6285674500030"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-rose-light hover:text-rose-gold transition-colors"
          >
            +62 856-7450-030 (WhatsApp)
          </a>
          <p className="text-xs mt-6 text-white/40">
            &copy; {new Date().getFullYear()} Salih Flower. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
