export default function StatsSection() {
  return (
    <section className="py-8 md:py-12 relative">
      {/* Background with glass effect and turquoise accents */}
      <div className="absolute inset-0 bg-slate-200">
        <div className="absolute inset-0 bg-[var(--glass-turquoise-bg)] opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--glass-turquoise-accent),transparent_70%)] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          <div className="group backdrop-blur-sm bg-white/60 p-8 md:p-10 rounded-3xl text-center shadow-xl hover:shadow-3xl transition-all duration-300 border border-[var(--glass-turquoise-border)] hover:border-[var(--turquoise)]/40 hover:-translate-y-1 hover:bg-white/70">
            <h3 className="text-6xl md:text-7xl font-bold text-[#0A2463] mb-3 tracking-tight drop-shadow-sm">18 mln+</h3>
            <p className="text-gray-700 text-lg leading-relaxed">spraw sądowych rocznie w Polsce</p>
          </div>
          <div className="group backdrop-blur-sm bg-white/60 p-8 md:p-10 rounded-3xl text-center shadow-xl hover:shadow-3xl transition-all duration-300 border border-[var(--glass-turquoise-border)] hover:border-[var(--turquoise)]/40 hover:-translate-y-1 hover:bg-white/70">
            <h3 className="text-6xl md:text-7xl font-bold text-[#0A2463] mb-3 tracking-tight drop-shadow-sm">1%</h3>
            <p className="text-gray-700 text-lg leading-relaxed">spraw rocznie trafia na drogę mediacji według danych MS i NIK</p>
          </div>
          <div className="group backdrop-blur-sm bg-white/60 p-8 md:p-10 rounded-3xl text-center shadow-xl hover:shadow-3xl transition-all duration-300 border border-[var(--glass-turquoise-border)] hover:border-[var(--turquoise)]/40 hover:-translate-y-1 hover:bg-white/70">
            <h3 className="text-6xl md:text-7xl font-bold text-[#0A2463] mb-3 tracking-tight drop-shadow-sm">2,1 mln</h3>
            <p className="text-gray-700 text-lg leading-relaxed">spraw rocznie nadaje się do mediacji w Polsce</p>
          </div>
        </div>
      </div>
    </section>
  );
}

