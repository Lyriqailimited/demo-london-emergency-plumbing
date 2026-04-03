"use client";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Services", link: "#services" },
  { name: "AI Receptionist", link: "#ai-section" },
  { name: "Book a Call", link: "#cta" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,10,20,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full"
              style={{ background: "linear-gradient(135deg, #5d4fff, #f97316)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2Z"/>
                <path d="m7 14 2-2 2 2 4-4"/>
              </svg>
            </div>
            <span className="font-display font-bold text-white text-sm leading-tight">
              London Emergency<br /><span style={{ color: "#f97316" }}>Plumbing</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-sm text-white/70 hover:text-white transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+442080641046" className="text-sm text-white/60 hover:text-white transition-colors">
              +44 20 8064 1046
            </a>
            <a
              href="#ai-section"
              className="text-sm font-semibold text-white px-4 py-2 rounded-full transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #5d4fff, #7c6fff)" }}
            >
              Get Started
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="lg:hidden py-4 px-2 rounded-2xl mb-3"
            style={{ background: "rgba(10,10,20,0.95)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setMobileOpen(false)}
                className="block py-3 px-4 text-white/80 hover:text-white transition-colors font-medium text-sm"
              >
                {item.name}
              </a>
            ))}
            <a
              href="tel:+442080641046"
              className="block py-3 px-4 text-sm font-semibold"
              style={{ color: "#f97316" }}
            >
              +44 20 8064 1046
            </a>
            <div className="px-4 mt-2">
              <a
                href="#ai-section"
                onClick={() => setMobileOpen(false)}
                className="block text-center text-sm font-semibold text-white px-4 py-3 rounded-full transition-all duration-200"
                style={{ background: "linear-gradient(135deg, #5d4fff, #7c6fff)" }}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
