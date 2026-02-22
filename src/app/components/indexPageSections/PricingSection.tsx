export default function PricingSection() {
  return (
    <section id="cennik" className="py-8 md:py-12 relative">
      {/* Background with glass effect and turquoise accents */}
      <div className="absolute inset-0 bg-slate-200">
        <div className="absolute inset-0 bg-[var(--glass-turquoise-bg)] opacity-25"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,var(--glass-turquoise-accent),transparent_60%),radial-gradient(circle_at_70%_30%,var(--glass-turquoise-accent),transparent_60%)] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 md:mb-20 text-gray-900 tracking-tight">
          <span className="text-[var(--turquoise)] drop-shadow-sm">Cennik</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          <div className="backdrop-blur-sm bg-white/80 p-6 md:p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-[var(--glass-turquoise-border)] hover:border-[var(--turquoise)]/30 hover:-translate-y-1 hover:bg-white/90">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Osoby fizyczne</h3>
              <p className="text-3xl md:text-4xl font-bold text-[var(--turquoise)]">99 <span className="text-xl font-semibold text-gray-600">PLN</span></p>
              <p className="text-gray-500 text-sm mt-1">za sprawę</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start group">
                <div className="shrink-0 w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 group-hover:bg-green-200 transition-colors">
                  <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-gray-700 text-base leading-relaxed">1/3 treści w modelu freemium</span>
              </li>
              <li className="flex items-start group">
                <div className="shrink-0 w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 group-hover:bg-green-200 transition-colors">
                  <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-gray-700 text-base leading-relaxed">2/3 za paywallem</span>
              </li>
            </ul>
          </div>
          <div className="relative p-6 md:p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-[var(--turquoise)]/30 hover:border-[var(--turquoise)]/50 hover:-translate-y-1 transform md:scale-105 bg-[#051740]">
            <div className="text-center mb-6 relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Kancelarie prawne</h3>
              <p className="text-3xl md:text-4xl font-bold text-white">599 – 2 499 <span className="text-xl font-semibold text-white/80">PLN</span></p>
              <p className="text-white/70 text-sm mt-1">w zależności od zużycia tokenów</p>
            </div>
            <ul className="space-y-3 mb-6 relative z-10">
              <li className="flex items-start group">
                <div className="shrink-0 w-6 h-6 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3 mt-0.5 group-hover:bg-white/30 transition-colors border border-white/30">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-white text-base leading-relaxed">Abonament miesięczny</span>
              </li>
              <li className="flex items-start group">
                <div className="shrink-0 w-6 h-6 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3 mt-0.5 group-hover:bg-white/30 transition-colors border border-white/30">
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-white text-base leading-relaxed">Większa pula tokenów</span>
              </li>
            </ul>
          </div>
          <div className="backdrop-blur-sm bg-white/80 p-6 md:p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-[var(--glass-turquoise-border)] hover:border-[var(--turquoise)]/30 hover:-translate-y-1 hover:bg-white/90">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Średnie i duże przedsiębiorstwa</h3>
              <p className="text-3xl md:text-4xl font-bold text-[var(--turquoise)]">od 2 999 <span className="text-xl font-semibold text-gray-600">PLN</span></p>
              <p className="text-gray-500 text-sm mt-1">indywidualna wycena</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start group">
                <div className="shrink-0 w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 group-hover:bg-green-200 transition-colors">
                  <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-gray-700 text-base leading-relaxed">Indywidualnie dopasowane do potrzeb</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

