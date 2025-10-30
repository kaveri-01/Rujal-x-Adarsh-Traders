// src/pages/Home.jsx
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  // Simple animated counters for the stats section
  const [stats, setStats] = useState({ clients: 0, projects: 0, countries: 0, years: 0 });
  useEffect(() => {
    const targets = { clients: 1200, projects: 2800, countries: 42, years: 25 };
    const duration = 1200; // ms
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      setStats({
        clients: Math.floor(p * targets.clients),
        projects: Math.floor(p * targets.projects),
        countries: Math.floor(p * targets.countries),
        years: Math.floor(p * targets.years),
      });
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, []);

  // Carousel logic for Latest Offerings
  const scrollerRef = useRef(null);
  const scrollBy = (dir = 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const child = el.querySelector("[data-card]");
    const amount = child ? child.getBoundingClientRect().width + 24 : 320;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const offerings = [
    {
      title: "Pre-Owned Ring Frame Rieter G33",
      tag: "Machinery",
      img: "https://images.unsplash.com/photo-1581091215367-59ab6dcef3f6?q=80&w=1200&auto=format&fit=crop",
      desc: "High-efficiency ring frame with excellent yarn quality for medium to fine counts.",
    },
    {
      title: "Autoconer Schlafhorst X6",
      tag: "Winders",
      img: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1200&auto=format&fit=crop",
      desc: "Automation-ready cone winder with superior splice strength and package build.",
    },
    {
      title: "Uster Tester 6 Lab Package",
      tag: "Testing",
      img: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1200&auto=format&fit=crop",
      desc: "Complete yarn quality lab setup with advanced analytics and cloud reporting.",
    },
    {
      title: "Carding Trutzschler TC 15",
      tag: "Carding",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
      desc: "Low neps and excellent CVm with intelligent waste management systems.",
    },
  ];

  const divisions = [
    {
      title: "Machinery Trading",
      desc: "Sourcing and commissioning of new & pre-owned spinning, weaving and processing machines.",
      img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Spares & Consumables",
      desc: "Genuine parts and consumables to maximize uptime and reduce lifecycle cost.",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Consulting & Audits",
      desc: "Mill audits, productivity improvement, cost optimization and training programs.",
      img: "https://images.unsplash.com/photo-1520607162886-398722287d7d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Digital Solutions",
      desc: "IoT-based monitoring, energy dashboards and quality analytics for modern mills.",
      img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-16 md:pt-32 md:pb-24 relative z-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center text-sm font-semibold tracking-wide text-blue-700 bg-blue-100 px-3 py-1 rounded-full">Trusted Textile Partner</span>
            <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
              Global <span className="text-blue-700">Textile Solutions</span> for Modern Mills
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              From machinery sourcing to consulting and digital transformation—everything you need to spin, weave and grow.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#latest" className="inline-flex items-center gap-2 rounded-xl bg-blue-700 text-white px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition">
                Explore Latest Offering <ArrowRight size={18} />
              </a>
              <a href="#contact-cta" className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50 transition">
                Contact Us
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-center md:text-left">
              <div>
                <p className="text-3xl font-bold">{stats.clients.toLocaleString()}</p>
                <p className="text-gray-600 text-sm">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold">{stats.projects.toLocaleString()}</p>
                <p className="text-gray-600 text-sm">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold">{stats.countries.toLocaleString()}+</p>
                <p className="text-gray-600 text-sm">Countries Served</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1515542706656-8e6ef17a1521?q=80&w=1600&auto=format&fit=crop"
                alt="Modern textile machinery in a mill"
                className="w-full h-full object-cover"
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section id="divisions" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-bold">Our Divisions</h2>
          <p className="text-gray-600 mt-3 max-w-2xl">Deep domain expertise across the textile value chain—curated to your goals.</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {divisions.map((d, i) => (
              <article key={i} className="group rounded-2xl overflow-hidden border bg-white hover:shadow-xl transition">
                <div className="aspect-video overflow-hidden">
                  <img src={d.img} alt={d.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg">{d.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{d.desc}</p>
                  <a href="#contact-cta" className="inline-flex items-center gap-1 mt-4 text-blue-700 font-medium">
                    Learn more <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Offering (Carousel) */}
      <section id="latest" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Latest Offering</h2>
              <p className="text-gray-600 mt-3 max-w-2xl">Curated machines and solutions ready to deploy for performance and ROI.</p>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <button aria-label="Scroll left" onClick={() => scrollBy(-1)} className="p-2 rounded-xl border bg-white hover:bg-gray-50"><ChevronLeft /></button>
              <button aria-label="Scroll right" onClick={() => scrollBy(1)} className="p-2 rounded-xl border bg-white hover:bg-gray-50"><ChevronRight /></button>
            </div>
          </div>

          <div className="relative mt-8">
            <div ref={scrollerRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-p-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none]" style={{ scrollbarWidth: "none" }}>
              {offerings.map((o, i) => (
                <article data-card key={i} className="min-w-[300px] sm:min-w-[360px] snap-start rounded-2xl overflow-hidden border bg-white hover:shadow-xl transition">
                  <div className="aspect-video overflow-hidden">
                    <img src={o.img} alt={o.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-100 rounded-full px-2 py-1">{o.tag}</span>
                    <h3 className="mt-3 font-semibold text-lg">{o.title}</h3>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">{o.desc}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <a href="#contact-cta" className="inline-flex items-center gap-1 text-blue-700 font-medium">
                        Enquire <ArrowRight size={16} />
                      </a>
                      <button className="rounded-lg border px-3 py-2 text-sm hover:bg-gray-50">Details</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            {/* Mobile controls */}
            <div className="mt-4 flex md:hidden items-center justify-center gap-3">
              <button aria-label="Scroll left" onClick={() => scrollBy(-1)} className="p-2 rounded-xl border bg-white"><ChevronLeft /></button>
              <button aria-label="Scroll right" onClick={() => scrollBy(1)} className="p-2 rounded-xl border bg-white"><ChevronRight /></button>
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section id="about" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold">Why Textile Leaders Choose Us</h2>
            <p className="text-gray-600 mt-3">We combine decades of shop-floor experience with global sourcing and data-driven execution.</p>
            <ul className="mt-6 space-y-3 text-gray-700">
              {[
                "End-to-end project delivery from selection to commissioning",
                "Lean audits that unlock 5–12% productivity in 90 days",
                "Genuine spares and responsive after-sales",
                "Digital monitoring to reduce energy and waste",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-4">
              <a href="#divisions" className="rounded-xl border px-5 py-3 font-semibold hover:bg-gray-50">Explore Divisions</a>
              <a href="#contact-cta" className="rounded-xl bg-blue-700 text-white px-5 py-3 font-semibold shadow-lg hover:shadow-xl">Talk to an Expert</a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1530016420102-5f6b27c9f2d9?q=80&w=1600&auto=format&fit=crop"
                alt="Team consulting in a textile unit"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News & Insights */}
      <section id="news" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-bold">News & Insights</h2>
          <p className="text-gray-600 mt-3 max-w-2xl">Perspectives on markets, machinery and mill performance.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Spinning Efficiency: Top 7 Wins in 2025",
                img: "https://images.unsplash.com/photo-1520975954732-35dd22a3f6ae?q=80&w=1200&auto=format&fit=crop",
              },
              {
                title: "How to Source Pre-Owned Machines Safely",
                img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
              },
              {
                title: "IoT in Mills: Energy Visibility to Action",
                img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
              },
            ].map((n, i) => (
              <article key={i} className="group rounded-2xl overflow-hidden border bg-white hover:shadow-xl transition">
                <div className="aspect-video overflow-hidden">
                  <img src={n.img} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg">{n.title}</h3>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">Quick frameworks and field notes for decision makers.</p>
                  <a href="#" className="inline-flex items-center gap-1 mt-4 text-blue-700 font-medium">
                    Read article <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section id="contact-cta" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 text-white p-10 md:p-14 shadow-2xl">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 10%, white 2px, transparent 2px)' }} />
            <div className="relative z-10 grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">Need help choosing the right machine?</h2>
                <p className="mt-3 text-white/90 max-w-xl">Speak with our specialists for sourcing, audits or a turnkey expansion plan.</p>
              </div>
              <div className="md:text-right">
                <a href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-white text-blue-700 px-6 py-3 font-semibold shadow-lg hover:shadow-xl">
                  Get a Consultation <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer placeholder */}
      <footer className="border-t py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <nav className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-blue-700">About</a>
            <a href="#latest" className="hover:text-blue-700">Latest</a>
            <a href="/contact" className="hover:text-blue-700">Contact</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
