import Link from 'next/link';

export default function HeroSection() {
  return (
    <header className="pt-24 md:pt-32 pb-8 md:pb-12 relative overflow-hidden bg-[#e2e8f0]">

      {/* Content container with glass backdrop */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-[#051740] border border-[var(--turquoise)]/20 rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 text-white leading-tight tracking-tight">
                e-Porozumienie
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-10 md:mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto">
                Wykorzystaj naszego <strong className="font-semibold text-[var(--turquoise)]">bezstronnego mediatora AI</strong>, aby zamienić niepewność, wysokie koszty i stracony czas w <strong className="font-semibold text-[var(--turquoise)]">wiążącą ugodę</strong> w czasie rzeczywistym.
              </p>
              <Link
                href="/login"
                className="inline-flex items-center justify-center px-4 py-1.5 text-base font-normal text-white bg-[var(--turquoise)] hover:bg-[var(--turquoise)]/90 rounded-md transition-all duration-300 hover:-translate-y-0.5"
              >
                Wdróż e-porozumienie
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

