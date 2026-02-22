import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-8 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#051740]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-white tracking-tight drop-shadow-lg">
          Zainwestuj w przyszłość <span className="text-[var(--turquoise)] drop-shadow-sm">mediacji online</span>
        </h2>
        <p className="text-xl md:text-2xl mb-12 md:mb-16 text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-sm">
          Skróć czas odzyskania kapitału z 730 dni do tygodnia
        </p>
        <div>
          <Link
            href="/login"
            className="inline-flex items-center justify-center px-4 py-2 md:px-5 md:py-2 bg-[#48cae4] text-white font-medium rounded-lg text-sm md:text-base transition-all duration-200 hover:shadow-lg hover:shadow-[#48cae4]/20 active:scale-95 border border-[#48cae4]/20"
          >
            Rozpocznij procedurę ugody
          </Link>
        </div>
      </div>
    </section>
  );
}

