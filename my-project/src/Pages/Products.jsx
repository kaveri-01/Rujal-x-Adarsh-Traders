// src/pages/Products.jsx
import { useEffect, useMemo, useState } from "react";
import { Filter, X, ArrowRight, ChevronLeft, ChevronRight, Search } from "lucide-react";

// --- Demo dataset (replace with API/JSON later) ---
const INVENTORY = [
  {
    id: "TX-1001",
    title: "Rieter G33 Ring Frame (2016)",
    category: "Spinning",
    type: "Ring Frame",
    brand: "Rieter",
    year: 2016,
    country: "India",
    price: 185000,
    thumbnail:
      "https://images.unsplash.com/photo-1515542706656-8e6ef17a1521?q=80&w=1600&auto=format&fit=crop",
    tags: ["Pre-Owned", "Excellent Condition"],
  },
  {
    id: "TX-1002",
    title: "Trützschler TC 15 Card (2018)",
    category: "Spinning",
    type: "Carding",
    brand: "Trutzschler",
    year: 2018,
    country: "Vietnam",
    price: 139000,
    thumbnail:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
    tags: ["Low Neps", "Energy Efficient"],
  },
  {
    id: "TX-1003",
    title: "Schlafhorst Autoconer X6 (2019)",
    category: "Winding",
    type: "Autoconer",
    brand: "Schlafhorst",
    year: 2019,
    country: "Indonesia",
    price: 212000,
    thumbnail:
      "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1600&auto=format&fit=crop",
    tags: ["Automation", "High Splice Strength"],
  },
  {
    id: "TX-1004",
    title: "Uster Tester 6 Lab (2020)",
    category: "Testing",
    type: "Lab Equipment",
    brand: "Uster",
    year: 2020,
    country: "Bangladesh",
    price: 98000,
    thumbnail:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1600&auto=format&fit=crop",
    tags: ["Analytics", "Cloud Reports"],
  },
  {
    id: "TX-1005",
    title: "Toyota JAT810 Airjet Loom (2017)",
    category: "Weaving",
    type: "Airjet Loom",
    brand: "Toyota",
    year: 2017,
    country: "Turkey",
    price: 45000,
    thumbnail:
      "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=1600&auto=format&fit=crop",
    tags: ["High Speed", "Low Stop Marks"],
  },
  {
    id: "TX-1006",
    title: "Picanol OmniPlus-i Loom (2021)",
    category: "Weaving",
    type: "Rapier Loom",
    brand: "Picanol",
    year: 2021,
    country: "India",
    price: 76000,
    thumbnail:
      "https://images.unsplash.com/photo-1596256325520-f1e4d54d7a44?q=80&w=1600&auto=format&fit=crop",
    tags: ["Latest Gen", "Energy Saving"],
  },
  {
    id: "TX-1007",
    title: "Lakshmi LMW LR9 Ring Frame (2015)",
    category: "Spinning",
    type: "Ring Frame",
    brand: "LMW",
    year: 2015,
    country: "Pakistan",
    price: 99000,
    thumbnail:
      "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa9?q=80&w=1600&auto=format&fit=crop",
    tags: ["Well Maintained"],
  },
  {
    id: "TX-1008",
    title: "Monforts Stenter (2014)",
    category: "Processing",
    type: "Stenter",
    brand: "Monforts",
    year: 2014,
    country: "India",
    price: 120000,
    thumbnail:
      "https://images.unsplash.com/photo-1530016420102-5f6b27c9f2d9?q=80&w=1600&auto=format&fit=crop",
    tags: ["8 Chambers", "Gas Heated"],
  },
  {
    id: "TX-1009",
    title: "Rieter Unifloc A 12 Bale Opener (2017)",
    category: "Blowroom",
    type: "Bale Opener",
    brand: "Rieter",
    year: 2017,
    country: "Vietnam",
    price: 54000,
    thumbnail:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1600&auto=format&fit=crop",
    tags: ["Consistency", "Low Maintenance"],
  },
  {
    id: "TX-1010",
    title: "Savio Polar Autoconer (2016)",
    category: "Winding",
    type: "Autoconer",
    brand: "Savio",
    year: 2016,
    country: "Indonesia",
    price: 128000,
    thumbnail:
      "https://images.unsplash.com/photo-1581091014534-8987c1d7c1b9?q=80&w=1600&auto=format&fit=crop",
    tags: ["Electronic Clearers"],
  },
];

const unique = (arr) => Array.from(new Set(arr)).sort();

export default function Products() {
  // --- UI state ---
  const [q, setQ] = useState("");
  const [openFilters, setOpenFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: [], // multi
    type: [], // multi
    brand: [], // multi
    country: [], // multi
    yearMin: 2010,
    yearMax: 2025,
    priceMin: 0,
    priceMax: 250000,
  });
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);
  const pageSize = 12;

  // --- derive filter options from data ---
  const options = useMemo(() => {
    return {
      categories: unique(INVENTORY.map((i) => i.category)),
      types: unique(INVENTORY.map((i) => i.type)),
      brands: unique(INVENTORY.map((i) => i.brand)),
      countries: unique(INVENTORY.map((i) => i.country)),
      yearMin: Math.min(...INVENTORY.map((i) => i.year)),
      yearMax: Math.max(...INVENTORY.map((i) => i.year)),
      priceMin: 0,
      priceMax: Math.max(...INVENTORY.map((i) => i.price)),
    };
  }, []);

  // --- apply filters ---
  const filtered = useMemo(() => {
    let data = INVENTORY.filter((item) => {
      const text = `${item.title} ${item.brand} ${item.type} ${item.category} ${item.country}`.toLowerCase();
      if (q && !text.includes(q.toLowerCase())) return false;
      if (filters.category.length && !filters.category.includes(item.category)) return false;
      if (filters.type.length && !filters.type.includes(item.type)) return false;
      if (filters.brand.length && !filters.brand.includes(item.brand)) return false;
      if (filters.country.length && !filters.country.includes(item.country)) return false;
      if (item.year < filters.yearMin || item.year > filters.yearMax) return false;
      if (item.price < filters.priceMin || item.price > filters.priceMax) return false;
      return true;
    });

    // sort
    data = [...data].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "az":
          return a.title.localeCompare(b.title);
        case "za":
          return b.title.localeCompare(a.title);
        case "newest":
        default:
          return b.year - a.year; // newest year first
      }
    });
    return data;
  }, [q, filters, sort]);

  // --- pagination ---
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  useEffect(() => setPage(1), [q, filters, sort]);
  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page]);

  // --- handlers ---
  const toggle = (key, value) => {
    setFilters((f) => {
      const arr = new Set(f[key]);
      arr.has(value) ? arr.delete(value) : arr.add(value);
      return { ...f, [key]: Array.from(arr) };
    });
  };

  const clearAll = () => {
    setFilters({
      category: [],
      type: [],
      brand: [],
      country: [],
      yearMin: options.yearMin,
      yearMax: options.yearMax,
      priceMin: options.priceMin,
      priceMax: options.priceMax,
    });
    setQ("");
  };

  // initialize ranges from options once
  useEffect(() => {
    setFilters((f) => ({
      ...f,
      yearMin: options.yearMin,
      yearMax: options.yearMax,
      priceMin: options.priceMin,
      priceMax: options.priceMax,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.yearMin, options.yearMax, options.priceMax]);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-700" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20 text-white">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Latest Offering</h1>
              <p className="mt-2 text-blue-100 max-w-2xl">Browse curated textile machinery ready for deployment. Filter by category, brand, year, location, and more.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="md:hidden inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 px-4 py-2" onClick={() => setOpenFilters(true)}>
                <Filter size={16} /> Filters
              </button>
              <div className="hidden md:flex items-center gap-2 text-sm">
                <span>Sort by</span>
                <select
                  className="rounded-lg bg-white/10 border border-white/20 px-3 py-2 outline-none"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                >
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="az">A → Z</option>
                  <option value="za">Z → A</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside className="md:col-span-3">
            {/* Desktop sidebar */}
            <div className="hidden md:block sticky top-24 space-y-6">
              <SearchBox q={q} setQ={setQ} />
              <FiltersPanel
                filters={filters}
                setFilters={setFilters}
                options={options}
                toggle={toggle}
                clearAll={clearAll}
              />
            </div>

            {/* Mobile filter drawer */}
            {openFilters && (
              <div className="fixed inset-0 z-50">
                <div className="absolute inset-0 bg-black/40" onClick={() => setOpenFilters(false)} />
                <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl p-6 overflow-y-auto">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Filters</h3>
                    <button onClick={() => setOpenFilters(false)} className="p-2 rounded-lg border"><X size={16} /></button>
                  </div>
                  <SearchBox q={q} setQ={setQ} />
                  <FiltersPanel
                    filters={filters}
                    setFilters={setFilters}
                    options={options}
                    toggle={toggle}
                    clearAll={clearAll}
                  />
                  <div className="mt-6">
                    <button className="w-full rounded-xl bg-blue-700 text-white px-4 py-3 font-semibold" onClick={() => setOpenFilters(false)}>
                      Show Results
                    </button>
                  </div>
                </div>
              </div>
            )}
          </aside>

          {/* Results */}
          <div className="md:col-span-9">
            {/* Top bar (mobile sort) */}
            <div className="md:hidden mb-4 flex items-center justify-between gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl border px-4 py-2" onClick={() => setOpenFilters(true)}>
                <Filter size={16} /> Filters
              </button>
              <div className="flex items-center gap-2 text-sm">
                <span>Sort</span>
                <select className="rounded-lg border px-3 py-2" value={sort} onChange={(e) => setSort(e.target.value)}>
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="az">A → Z</option>
                  <option value="za">Z → A</option>
                </select>
              </div>
            </div>

            {/* Result summary */}
            <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
              <p>{filtered.length} results</p>
              <button onClick={clearAll} className="hover:text-blue-700">Clear all</button>
            </div>

            {/* Cards grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paged.map((p) => (
                <article key={p.id} className="group rounded-2xl overflow-hidden border bg-white hover:shadow-xl transition">
                  <div className="aspect-video overflow-hidden relative">
                    <img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-blue-700 text-xs font-semibold">
                      <span>{p.category}</span>
                      <span>•</span>
                      <span>{p.brand}</span>
                    </div>
                    <h3 className="mt-1 font-semibold text-lg line-clamp-1" title={p.title}>{p.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{p.country} • {p.year}</p>
                    <p className="mt-3 font-bold">${p.price.toLocaleString()}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t, i) => (
                        <span key={i} className="text-xs bg-gray-100 border px-2 py-1 rounded-full">{t}</span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <a href={`/products/${p.id}`} className="inline-flex items-center gap-1 text-blue-700 font-medium">View details <ArrowRight size={16} /></a>
                      <a href="#contact" className="rounded-lg border px-3 py-2 text-sm hover:bg-gray-50">Enquire</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex items-center justify-center gap-2">
              <button
                className="p-2 rounded-lg border disabled:opacity-40"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                aria-label="Previous page"
              >
                <ChevronLeft />
              </button>
              <span className="px-3 py-2 rounded-lg border bg-white text-sm">Page {page} of {totalPages}</span>
              <button
                className="p-2 rounded-lg border disabled:opacity-40"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                aria-label="Next page"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// --- Components ---
function SearchBox({ q, setQ }) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2" size={16} />
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search by title, brand, type..."
        className="w-full rounded-xl border pl-9 pr-3 py-2 outline-none focus:ring-2 focus:ring-blue-700"
      />
    </div>
  );
}

function FiltersPanel({ filters, setFilters, options, toggle, clearAll }) {
  return (
    <div className="space-y-6">
      {/* Category */}
      <fieldset className="border rounded-xl p-4">
        <legend className="px-1 text-sm font-semibold">Category</legend>
        <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
          {options.categories.map((c) => (
            <label key={c} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-blue-700"
                checked={filters.category.includes(c)}
                onChange={() => toggle("category", c)}
              />
              <span>{c}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Type */}
      <fieldset className="border rounded-xl p-4">
        <legend className="px-1 text-sm font-semibold">Machine Type</legend>
        <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
          {options.types.map((t) => (
            <label key={t} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-blue-700"
                checked={filters.type.includes(t)}
                onChange={() => toggle("type", t)}
              />
              <span>{t}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Brand */}
      <fieldset className="border rounded-xl p-4">
        <legend className="px-1 text-sm font-semibold">Brand</legend>
        <div className="mt-2 grid grid-cols-2 gap-2 text-sm max-h-48 overflow-auto pr-1">
          {options.brands.map((b) => (
            <label key={b} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-blue-700"
                checked={filters.brand.includes(b)}
                onChange={() => toggle("brand", b)}
              />
              <span>{b}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Country */}
      <fieldset className="border rounded-xl p-4">
        <legend className="px-1 text-sm font-semibold">Location</legend>
        <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
          {options.countries.map((ct) => (
            <label key={ct} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-blue-700"
                checked={filters.country.includes(ct)}
                onChange={() => toggle("country", ct)}
              />
              <span>{ct}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Year Range */}
      <fieldset className="border rounded-xl p-4">
        <legend className="px-1 text-sm font-semibold">Year</legend>
        <div className="mt-2 text-sm">
          <div className="flex items-center justify-between">
            <span>{filters.yearMin}</span>
            <span>{filters.yearMax}</span>
          </div>
          <div className="mt-3 space-y-2">
            <input
              type="range"
              min={options.yearMin}
              max={filters.yearMax}
              value={filters.yearMin}
              onChange={(e) => setFilters((f) => ({ ...f, yearMin: Number(e.target.value) }))}
              className="w-full"
            />
            <input
              type="range"
              min={filters.yearMin}
              max={options.yearMax}
              value={filters.yearMax}
              onChange={(e) => setFilters((f) => ({ ...f, yearMax: Number(e.target.value) }))}
              className="w-full"
            />
          </div>
        </div>
      </fieldset>

      {/* Price Range */}
      <fieldset className="border rounded-xl p-4">
        <legend className="px-1 text-sm font-semibold">Price (USD)</legend>
        <div className="mt-2 text-sm">
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={filters.priceMin}
              onChange={(e) => setFilters((f) => ({ ...f, priceMin: Number(e.target.value) }))}
              className="w-1/2 rounded-lg border px-2 py-1"
              placeholder="Min"
            />
            <input
              type="number"
              value={filters.priceMax}
              onChange={(e) => setFilters((f) => ({ ...f, priceMax: Number(e.target.value) }))}
              className="w-1/2 rounded-lg border px-2 py-1"
              placeholder="Max"
            />
          </div>
          <div className="mt-2 text-xs text-gray-500">Range: ${options.priceMin.toLocaleString()} – ${options.priceMax.toLocaleString()}</div>
        </div>
      </fieldset>

      <div className="flex items-center justify-between gap-3">
        <button className="text-sm underline" onClick={clearAll}>Reset all</button>
        <a href="#results" className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold">View results <ArrowRight size={14} /></a>
      </div>
    </div>
  );
}
