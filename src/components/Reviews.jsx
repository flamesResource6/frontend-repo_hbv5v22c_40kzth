import { Quote } from "lucide-react"

const reviews = [
  {
    quote:
      "A beautifully structured meditation on memory and longing. It lingers like a familiar song at dusk.",
    source: "Literary Weekly",
  },
  {
    quote:
      "Propulsive and razor-sharp. Hidden Joker is a grin with teeth—impossible to put down.",
    source: "Thriller Desk",
  },
  {
    quote:
      "Jardim writes with a cinematic pulse and lyrical edge. Every chapter hums.",
    source: "Paper & Ink Reviews",
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="bg-slate-900 py-20 sm:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">What readers are saying</h2>
          <p className="mt-2 text-blue-100/80">Handpicked highlights from critics and readers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <figure key={i} className="relative rounded-2xl p-6 border border-white/10 bg-white/5">
              <Quote className="absolute -top-3 -left-3 w-8 h-8 text-blue-400/30" />
              <blockquote className="text-blue-50/90 leading-relaxed">“{r.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-blue-200/70">— {r.source}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
