import { ShoppingCart, Star, ExternalLink } from "lucide-react"

const books = [
  {
    title: "I Did Love",
    subtitle: "A Novel",
    description:
      "An evocative exploration of love remembered and love imagined—haunting, intimate, and beautifully paced.",
    cover:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
    amazon:
      "https://www.amazon.com/I-Did-Love-Alex-Jardim/dp/B0C9K6M56C/",
    rating: 4.6,
    reviews: 128,
  },
  {
    title: "Hidden Joker",
    subtitle: "A Thriller",
    description:
      "A razor-edged page-turner where every smile hides a secret and every secret cuts deep.",
    cover:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1200&auto=format&fit=crop",
    amazon:
      "https://www.amazon.com/Hidden-Joker-Alex-Jardim/dp/B0FR3GVBX4/",
    rating: 4.8,
    reviews: 212,
  },
]

function Rating({ value }) {
  const full = Math.floor(value)
  const hasHalf = value - full >= 0.5
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            "w-4 h-4 " +
            (i < full
              ? "fill-yellow-400 text-yellow-400"
              : hasHalf && i === full
              ? "fill-yellow-400/60 text-yellow-400/60"
              : "text-slate-500")
          }
        />
      ))}
    </div>
  )
}

export default function Books() {
  return (
    <section id="books" className="relative bg-slate-950 py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(99,102,241,0.12),transparent_70%)]" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Books</h2>
            <p className="mt-2 text-blue-100/80">Discover stories and shop on Amazon</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {books.map((b) => (
            <article
              key={b.title}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-white/0 hover:from-white/10 transition shadow-xl"
            >
              <div className="grid grid-cols-3 gap-0">
                <div className="col-span-1 relative min-h-[260px] sm:min-h-[320px]">
                  <img
                    src={b.cover}
                    alt={b.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="col-span-2 p-6 flex flex-col">
                  <h3 className="text-2xl font-semibold text-white">{b.title}</h3>
                  <p className="text-sm text-blue-200/70">{b.subtitle}</p>
                  <p className="mt-3 text-blue-100/90 leading-relaxed">{b.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-blue-100/80">
                    <Rating value={b.rating} />
                    <span className="text-sm">{b.rating.toFixed(1)} • {b.reviews} reviews</span>
                  </div>
                  <div className="mt-auto pt-6">
                    <a
                      href={b.amazon}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-4 py-2 transition shadow-amber-500/30 shadow"
                    >
                      <ShoppingCart size={18} />
                      Buy on Amazon
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
