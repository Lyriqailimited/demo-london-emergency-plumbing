"use client";
import {
  Navbar as NavbarRoot,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

const navItems = [
  { name: "Services", link: "#services" },
  { name: "AI Receptionist", link: "#ai-section" },
  { name: "Book a Call", link: "#cta" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full z-50">
      <NavbarRoot>
        <NavBody>
          {/* Logo */}
          <a href="#" className="relative z-20 flex items-center gap-2 px-2 py-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-full" style={{ background: "linear-gradient(135deg, #5d4fff, #f97316)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2Z"/>
                <path d="m7 14 2-2 2 2 4-4"/>
              </svg>
            </div>
            <span className="font-display font-bold text-white text-sm leading-tight">
              London Emergency<br /><span style={{ color: "#f97316" }}>Plumbing</span>
            </span>
          </a>

          <NavItems items={navItems} />

          <div className="flex items-center gap-3">
            <a href="tel:+442080641046" className="text-sm text-white/70 hover:text-white transition-colors hidden md:block">
              +44 20 8064 1046
            </a>
            <NavbarButton
              variant="primary"
              as="a"
              href="#ai-section"
              className="text-white font-semibold"
              style={{ background: "linear-gradient(135deg, #5d4fff, #7c6fff)" }}
            >
              Get Started
            </NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full" style={{ background: "linear-gradient(135deg, #5d4fff, #f97316)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2Z"/>
                  <path d="m7 14 2-2 2 2 4-4"/>
                </svg>
              </div>
              <span className="font-display font-bold text-white text-sm">London Emergency Plumbing</span>
            </a>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-white/80 hover:text-white transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="tel:+442080641046"
              className="block py-2 text-accent font-semibold"
              style={{ color: "#f97316" }}
            >
              +44 20 8064 1046
            </a>
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full text-white font-semibold mt-2"
              style={{ background: "linear-gradient(135deg, #5d4fff, #7c6fff)" }}
            >
              Get Started
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </NavbarRoot>
    </div>
  );
}
