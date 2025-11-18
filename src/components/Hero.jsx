import { BookOpen, ExternalLink } from "lucide-react"

export default function Hero({ onScrollToBooks }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(59,130,246,0.25),transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-200 text-xs mb-5">
              <BookOpen size={14} />
              <span>Author Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Alex Jardim
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-blue-100/90 leading-relaxed">
              Contemporary fiction exploring love, loss, and the mysteries that bind us.
              Step into vivid worlds shaped by sharp emotion and suspenseful twists.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
              <button
                onClick={onScrollToBooks}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 font-semibold shadow-lg shadow-blue-600/20 transition"
              >
                Explore the books
              </button>
              <a
                href="#reviews"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 text-white px-5 py-3 font-semibold border border-white/20 backdrop-blur transition"
              >
                Read reviews <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="relative mx-auto w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-indigo-500/30 to-purple-500/40" />
              <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(255,255,255,0.3),transparent_60%)]" />
              <div className="relative h-full w-full p-6 flex flex-col">
                <div className="flex-1">
                  <p className="text-white/80 text-sm">Featured author</p>
                  <h3 className="mt-2 text-3xl font-bold text-white">Stories that linger</h3>
                  <p className="mt-2 text-blue-100/90 text-sm">
                    Crafted with atmosphere, rhythm, and a pulse of intrigue.
                  </p>
                </div>
                <div className="pt-4 text-white/70 text-xs">
                  © {new Date().getFullYear()} Alex Jardim
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
