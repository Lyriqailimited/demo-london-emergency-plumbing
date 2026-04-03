"use client";
import dynamic from "next/dynamic";
const BackgroundBeamsWithCollision = dynamic(
  () => import("@/components/ui/background-beams-with-collision").then((m) => m.BackgroundBeamsWithCollision),
  { ssr: false, loading: () => <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(135deg, #0a0a14 0%, #1a1040 100%)" }} /> }
);

const services = [
  { emoji: "🚨", name: "Emergency Plumbing", description: "24/7 rapid response to burst pipes, flooding, and urgent callouts across London" },
  { emoji: "🔥", name: "Boiler Repair", description: "Fast, certified boiler diagnostics and repairs to restore your heating and hot water" },
  { emoji: "🔍", name: "Leak Detection", description: "Non-invasive leak detection technology to find hidden leaks before they cause damage" },
  { emoji: "🚿", name: "Drain Unblocking", description: "High-pressure jetting and CCTV drain surveys to clear blockages quickly" },
  { emoji: "🔧", name: "Pipe Repair", description: "Expert pipe repair and replacement for all domestic and commercial properties" },
  { emoji: "🛁", name: "Bathroom Installation", description: "Full bathroom design and installation from concept to completion" },
];

const aiFeatures = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "24/7 Availability",
    description: "Never miss a call, even at 2am on a Sunday. The AI answers every time.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
        <line x1="16" x2="16" y1="2" y2="6"/>
        <line x1="8" x2="8" y1="2" y2="6"/>
        <line x1="3" x2="21" y1="10" y2="10"/>
        <path d="m9 16 2 2 4-4"/>
      </svg>
    ),
    title: "Instant Booking",
    description: "Customers book jobs without waiting on hold. Slots fill automatically.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.28 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/>
      </svg>
    ),
    title: "Never Miss a Lead",
    description: "Every enquiry captured and followed up. No call goes unanswered.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#0a0a14" }}>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <BackgroundBeamsWithCollision className="absolute inset-0 z-0">
          <div />
        </BackgroundBeamsWithCollision>

        {/* Dark overlay */}
        <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to bottom, rgba(10,10,20,0.3) 0%, rgba(10,10,20,0.7) 100%)" }} />

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto pt-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 glass-card text-sm font-medium text-white/80"
            style={{ border: "1px solid rgba(93,79,255,0.3)", background: "rgba(93,79,255,0.1)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#f97316" }} />
            London | Available 24/7
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            London Emergency
            <br />
            <span style={{ background: "linear-gradient(135deg, #5d4fff 0%, #f97316 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Plumbing
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/60 mb-10 max-w-2xl mx-auto font-body">
            London&apos;s trusted emergency plumbers — now with an AI receptionist that handles every call, books appointments, and never misses a lead.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#ai-section"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-white font-semibold text-base transition-all duration-200 hover:scale-105 hover:shadow-2xl"
              style={{ background: "linear-gradient(135deg, #5d4fff, #7c6fff)", boxShadow: "0 0 30px rgba(93,79,255,0.4)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" x2="12" y1="19" y2="22" />
              </svg>
              Talk to Our AI Receptionist
            </a>
            <a
              href="tel:+442080641046"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-white font-semibold text-base transition-all duration-200 hover:scale-105 glass-card"
              style={{ border: "1px solid rgba(249,115,22,0.3)" }}
            >
              📞 +44 20 8064 1046
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/40 text-sm">
            <span>✓ Gas Safe Registered</span>
            <span>✓ City & Guilds Certified</span>
            <span>✓ 10+ Years Experience</span>
            <span>✓ Same-Day Response</span>
          </div>
        </div>
      </section>

      {/* AI RECEPTIONIST SECTION */}
      <section id="ai-section" className="py-20 px-6" style={{ background: "linear-gradient(to bottom, #0a0a14, #0d0d1f)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-sm font-medium"
            style={{ background: "rgba(93,79,255,0.1)", border: "1px solid rgba(93,79,255,0.25)", color: "#a78bff" }}>
            🤖 AI-Powered Reception
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Meet London Emergency Plumbing&apos;s<br />
            <span style={{ color: "#5d4fff" }}>AI Receptionist</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-2xl mx-auto">
            Available 24/7 — ask about pricing, availability, or book a job in London
          </p>

          <div className="glass-card-strong p-8 text-left max-w-2xl mx-auto">
            <h3 className="text-white font-semibold mb-5 text-lg">The AI can help you:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                { icon: "📅", text: "Book appointments" },
                { icon: "💷", text: "Answer pricing questions" },
                { icon: "🚨", text: "Handle emergency callouts" },
                { icon: "📝", text: "Take messages" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <span className="text-xl">{icon}</span>
                  <span className="text-white/80 font-medium text-sm">{text}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 rounded-xl p-4" style={{ background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.2)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" x2="12" y1="19" y2="22" />
              </svg>
              <p className="text-white/70 text-sm">
                <strong className="text-white">Try it now:</strong> Click the <span style={{ color: "#f97316" }}>Talk to AI</span> button in the bottom right to speak to the AI receptionist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="py-20 px-6" style={{ background: "#0a0a14" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-sm font-medium"
              style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.25)", color: "#fb923c" }}>
              🔧 Our Services
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">What We Do in London</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              From emergency callouts to full installations — we handle it all
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <div key={service.name} className="glass-card p-6 hover:scale-[1.02] transition-all duration-200 group cursor-default"
                style={{ border: "1px solid rgba(93,79,255,0.12)" }}>
                <div className="text-4xl mb-4">{service.emoji}</div>
                <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-[#a78bff] transition-colors">{service.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI FEATURES */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(to bottom, #0d0d1f, #0a0a14)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-sm font-medium"
              style={{ background: "rgba(93,79,255,0.1)", border: "1px solid rgba(93,79,255,0.25)", color: "#a78bff" }}>
              ⚡ AI Advantage
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Why London Emergency Plumbing Uses AI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiFeatures.map((feature) => (
              <div key={feature.title} className="glass-card p-8 text-center hover:scale-[1.02] transition-all duration-200"
                style={{ border: "1px solid rgba(93,79,255,0.15)" }}>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5"
                  style={{ background: "rgba(93,79,255,0.12)", color: "#a78bff", border: "1px solid rgba(93,79,255,0.2)" }}>
                  {feature.icon}
                </div>
                <h3 className="font-display font-bold text-white text-xl mb-3">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="cta" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(93,79,255,0.2) 0%, rgba(249,115,22,0.1) 100%)",
              border: "1px solid rgba(93,79,255,0.25)",
              boxShadow: "0 0 60px rgba(93,79,255,0.15), inset 0 1px 0 rgba(255,255,255,0.05)"
            }}>
            {/* Background glow */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(93,79,255,0.15) 0%, transparent 70%)" }} />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-sm font-medium text-white/60"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                🎯 Ready to Transform Your Business?
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Ready to Stop Missing Calls?
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
                See how London Emergency Plumbing handles every enquiry automatically — 24 hours a day, 7 days a week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={process.env.NEXT_PUBLIC_BOOKING_LINK || "#ai-section"}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-white font-semibold text-base transition-all duration-200 hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #f97316, #ea6c0a)", boxShadow: "0 0 30px rgba(249,115,22,0.4)" }}
                >
                  Book a Demo Call
                </a>
                <a
                  href="#ai-section"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-white font-semibold text-base transition-all duration-200 hover:scale-105 glass-card"
                  style={{ border: "1px solid rgba(93,79,255,0.3)" }}
                >
                  Try the AI First
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
