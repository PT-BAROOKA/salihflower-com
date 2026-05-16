"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/produk", label: "Produk" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/corporate", label: "Corporate" },
  { href: "/cara-order", label: "Cara Order" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur border-b border-rose-light/30">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-playfair text-xl font-bold text-charcoal tracking-wide">
          Salih <span className="text-rose-gold">Flower</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-inter text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="hover:text-rose-gold transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/corporate"
          className="hidden md:inline-flex bg-rose-gold text-white text-sm px-4 py-2 rounded-full hover:bg-rose-dark transition-colors"
        >
          Order Sekarang
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-charcoal"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-rose-light/30 px-4 py-4">
          <ul className="flex flex-col gap-4 text-sm text-muted">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="hover:text-rose-gold transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/corporate"
                className="inline-block bg-rose-gold text-white text-sm px-4 py-2 rounded-full"
                onClick={() => setOpen(false)}
              >
                Order Sekarang
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
