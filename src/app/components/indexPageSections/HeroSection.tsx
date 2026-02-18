
export default function HeroSection() {
  return (
    <header className="pt-24 md:pt-32 pb-8 md:pb-12 relative overflow-hidden bg-slate-200">

      {/* Content container with glass backdrop */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* iOS-style glass card for main content */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/90 via-white/85 to-white/80 border border-white/30 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/10 hover:shadow-3xl hover:shadow-black/15 hover:border-white/50 hover:from-white/95 hover:via-white/90 hover:to-white/85 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
              {/* Subtle inner glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 rounded-3xl pointer-events-none"></div>
              {/* Content wrapper */}
              <div className="relative z-10">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 text-[#0A2463] leading-tight tracking-tight">
                e-Porozumienie
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-10 md:mb-12 text-[#0A2463]/90 leading-relaxed max-w-3xl mx-auto">
                Zawrzyj porozumienie dzięki <strong className="font-semibold text-[var(--turquoise)] drop-shadow-sm">AI</strong> w 3 dni.
                <br className="hidden md:block" />
                <span className="md:inline">Pierwsza taka platforma w </span><strong className="font-semibold text-[var(--turquoise)] drop-shadow-sm">Polsce</strong>
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

