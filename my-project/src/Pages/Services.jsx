// src/pages/Services.jsx
import { ArrowRight, CheckCircle2, Package, Wrench, Ship, Cog, Headphones, Truck } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "dismantling",
      title: "Dismantling Service",
      icon: Wrench,
      img:
        "https://images.unsplash.com/photo-1581091014534-8987c1d7c1b9?q=80&w=1600&auto=format&fit=crop",
      bullets: [
        "Specialists across spinning, weaving, knitting, dyeing, finishing",
        "Methodical tagging, packing, and secure staging",
        "Optionally include transport, storage, re-installation",
      ],
      blurb:
        "Expert textile machinery dismantling with safety-first SOPs and minimal disruption. End-to-end handling from line isolation to packing and handover.",
    },
    {
      id: "commissioning",
      title: "Commissioning Service",
      icon: Cog,
      img:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
      bullets: [
        "New, pre-owned, relocated or upgraded machines",
        "Precision installation, alignment, calibration, trials",
        "Performance verification and operator training",
      ],
      blurb:
        "Commissioning programs that bring equipment to spec quickly and safely—install, configure, test and train for dependable output.",
    },
    {
      id: "loading-shipping",
      title: "Loading & Shipping Service",
      icon: Ship,
      img:
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1600&auto=format&fit=crop",
      bullets: [
        "Heavy-lift planning and rigging supervision",
        "Sea/air/road logistics with insurance options",
        "Export-grade packing and corrosion protection",
      ],
      blurb:
        "Secure, cost-effective relocation of textile machines with compliant packing, documentation and monitored transit.",
    },
    {
      id: "service-station",
      title: "Service Station Service",
      icon: Package,
      img:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
      bullets: [
        "Preventive maintenance and overhauls",
        "Precision refurb, balancing, and parts replacement",
        "Pickup, delivery and quick-turn repairs",
      ],
      blurb:
        "Nationwide repair and refurb on critical assemblies to keep uptime high and lifecycle cost low.",
    },
    {
      id: "after-sales",
      title: "After Sales Services",
      icon: Headphones,
      img:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1600&auto=format&fit=crop",
      bullets: [
        "Breakdown support and troubleshooting",
        "Spare parts supply and service contracts",
        "Periodic audits and performance tuning",
      ],
      blurb:
        "Responsive technical support for new or pre-owned machines, including spares, AMC and remote diagnostics.",
    },
    {
      id: "relocation",
      title: "Relocation Factory Service",
      icon: Truck,
      img:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
      bullets: [
        "End-to-end factory moves—local or international",
        "Downtime reduction with phased execution",
        "HSE compliance and risk-managed planning",
      ],
      blurb:
        "Turnkey plant relocations covering dismantling, logistics, reinstallation and commissioning with safety and cost control.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-700" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28 text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Services</h1>
          <p className="mt-3 text-blue-100 max-w-2xl">
            End-to-end support across the textile value chain—from dismantling and logistics to commissioning and after-sales.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a href="#dismantling" className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur border border-white/20">Dismantling</a>
            <a href="#commissioning" className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur border border-white/20">Commissioning</a>
            <a href="#loading-shipping" className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur border border-white/20">Loading & Shipping</a>
            <a href="#service-station" className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur border border-white/20">Service Station</a>
            <a href="#after-sales" className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur border border-white/20">After Sales</a>
            <a href="#relocation" className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur border border-white/20">Relocation</a>
          </div>
        </div>
      </section>

      {/* Services Grid (summary cards) */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="group rounded-2xl overflow-hidden border bg-white hover:shadow-xl transition">
                <div className="aspect-video overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-blue-700">
                    <s.icon className="w-5 h-5" />
                    <span className="text-xs font-semibold">Service</span>
                  </div>
                  <h3 className="mt-2 font-semibold text-lg">{s.title}</h3>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">{s.blurb}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-blue-700 font-medium">
                    View details <ArrowRight size={16} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      {services.map((s, idx) => (
        <section id={s.id} key={s.id} className={`py-16 md:py-24 ${idx % 2 === 1 ? "bg-white" : "bg-gray-50"}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-10 items-center">
            <div className={`order-2 md:order-${idx % 2 === 1 ? "2" : "1"}`}>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className={`order-1 md:order-${idx % 2 === 1 ? "1" : "2"}`}>
              <div className="inline-flex items-center gap-2 text-blue-700 bg-blue-100 rounded-full px-3 py-1">
                <s.icon className="w-4 h-4" />
                <span className="text-xs font-semibold">{s.title}</span>
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold">{s.title}</h2>
              <p className="text-gray-600 mt-3">{s.blurb}</p>
              <ul className="mt-6 space-y-3 text-gray-700">
                {s.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-700 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4">
                <a href="/contact" className="rounded-xl bg-blue-700 text-white px-5 py-3 font-semibold shadow-lg hover:shadow-xl">Get a Quote</a>
                <a href="#top" className="rounded-xl border px-5 py-3 font-semibold hover:bg-gray-50">Back to top</a>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 text-white p-10 md:p-14 shadow-2xl">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 10%, white 2px, transparent 2px)' }} />
            <div className="relative z-10 grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">Planning a relocation or major overhaul?</h2>
                <p className="mt-3 text-white/90 max-w-xl">Talk to our specialists for a phased plan that optimizes cost, safety and downtime.</p>
              </div>
              <div className="md:text-right">
                <a href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-white text-blue-700 px-6 py-3 font-semibold shadow-lg hover:shadow-xl">
                  Speak to an Expert <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
