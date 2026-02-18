import { CTASectionProps } from '@/lib/types';

export default function CTASection({ onCTAClick }: CTASectionProps) {
  return (
    <section className="py-8 md:py-12 relative overflow-hidden">
      {/* Enhanced background with glass effect and turquoise accents */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0A2463] to-[#051740]">
        <div className="absolute inset-0 bg-[var(--glass-turquoise-bg)] opacity-60 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,var(--turquoise),transparent_60%),radial-gradient(circle_at_20%_80%,var(--turquoise-accent),transparent_50%),radial-gradient(circle_at_80%_80%,var(--turquoise-accent),transparent_50%)] opacity-15"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-white tracking-tight drop-shadow-lg">
          Zainwestuj w przyszłość <span className="text-[var(--turquoise)] drop-shadow-sm">mediacji online</span>
        </h2>
        <p className="text-xl md:text-2xl mb-12 md:mb-16 text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-sm">
          Skróć czas odzyskania kapitału z 730 dni do 48 godzin. Bez prawników, bez opłat sądowych.
        </p>
        <div>
          <button
            onClick={onCTAClick}
            className="inline-flex items-center justify-center px-4 py-2 md:px-5 md:py-2 bg-[#48cae4] text-white font-medium rounded-lg text-sm md:text-base transition-all duration-200 hover:shadow-lg hover:shadow-[#48cae4]/20 active:scale-95 border border-[#48cae4]/20"
          >
            Rozpocznij procedurę ugody
          </button>
        </div>
      </div>
    </section>
  );
}

