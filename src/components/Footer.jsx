export default function Footer() {
  return (
    <footer className="bg-slate-950 py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-blue-200/60">© {new Date().getFullYear()} Alex Jardim • All rights reserved</p>
        <nav className="flex items-center gap-6 text-blue-200/70 text-sm">
          <a href="#books" className="hover:text-white transition">Books</a>
          <a href="#reviews" className="hover:text-white transition">Reviews</a>
          <a href="#top" className="hover:text-white transition">Back to top</a>
        </nav>
      </div>
    </footer>
  )
}
