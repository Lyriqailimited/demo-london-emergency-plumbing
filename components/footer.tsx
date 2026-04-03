export default function Footer() {
  return (
    <footer className="border-t" style={{ background: "#080810", borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full" style={{ background: "linear-gradient(135deg, #5d4fff, #f97316)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2Z"/>
                  <path d="m7 14 2-2 2 2 4-4"/>
                </svg>
              </div>
              <span className="font-display font-bold text-white">London Emergency Plumbing</span>
            </div>
            <p className="text-white/50 text-sm">
              London&apos;s trusted 24/7 emergency plumbers. 10+ years serving homes and businesses across the city.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {["Services", "Privacy Policy", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Contact</h4>
            <a href="tel:+442080641046" className="text-sm font-semibold block mb-1" style={{ color: "#f97316" }}>
              +44 20 8064 1046
            </a>
            <p className="text-white/50 text-sm">Available 24/7 — London & surrounding areas</p>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <p className="text-white/30 text-xs">© 2024 London Emergency Plumbing. All rights reserved.</p>
          <p className="text-white/30 text-xs">
            Powered by{" "}
            <span style={{ color: "#5d4fff" }} className="font-medium">Plumbers Mate AI</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
