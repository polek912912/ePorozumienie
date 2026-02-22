export default function HowItWorksSection() {
  return (
    <section id="jak-to-dziala" className="py-8 md:py-12 relative">
      {/* Background with glass effect and turquoise accents */}
      <div className="absolute inset-0 bg-slate-200">
        <div className="absolute inset-0 bg-[var(--glass-turquoise-bg)] opacity-15"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 md:mb-20 text-gray-900 tracking-tight">
          Jak to <span className="text-[var(--turquoise)] drop-shadow-sm">działa</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="group backdrop-blur-sm bg-white/70 p-8 md:p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-[var(--glass-turquoise-border)] hover:border-[var(--turquoise)]/30 hover:-translate-y-1 hover:bg-white/80 relative">
            <div className="w-16 h-16 bg-linear-to-br from-[#0A2463] to-[#051740] rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg shadow-[#0A2463]/30 group-hover:scale-110 group-hover:shadow-[var(--turquoise)]/20 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-[var(--turquoise)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">1</div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Przedstaw Twoją perspektywę
            </h3>
            <p className="text-gray-600 leading-relaxed text-base">
              Wprowadź opis sytuacji swoimi słowami. Prześlij dokumenty, skany lub nagrania. Nasz model językowy zsynchronizuje Twoją narrację z faktami z plików, natychmiast wyodrębniając z nich kluczowe dane, daty i kwoty, tworząc obiektywny fundament sprawy. Jeśli pojawią się niedostatki informacyjne, model zada Ci dodatkowe pytania, aby zyskać pełny i rzetelny obraz sprawy.
            </p>
          </div>
          <div className="group backdrop-blur-sm bg-white/70 p-8 md:p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-[var(--glass-turquoise-border)] hover:border-[var(--turquoise)]/30 hover:-translate-y-1 hover:bg-white/80 relative">
            <div className="w-16 h-16 bg-linear-to-br from-[#0A2463] to-[#051740] rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg shadow-[#0A2463]/30 group-hover:scale-110 group-hover:shadow-[var(--turquoise)]/20 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-[var(--turquoise)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">2</div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Wygenerowanie mapy porozumienia</h3>
            <p className="text-gray-600 leading-relaxed text-base">
              Nasz AI-mediator analizuje zgromadzony materiał, by wyznaczyć punkty wspólne oraz
              zidentyfikować realne interesy obu stron. Dbamy o to, by strony nie poznały wzajemnie swoich
              stanowisk na tym etapie – to pozwala na bezpieczne szukanie kompromisu bez przedwczesnego
              odkrywania kart.
            </p>
          </div>
          <div className="group backdrop-blur-sm bg-white/70 p-8 md:p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-[var(--glass-turquoise-border)] hover:border-[var(--turquoise)]/30 hover:-translate-y-1 hover:bg-white/80 relative">
            <div className="w-16 h-16 bg-linear-to-br from-[#0A2463] to-[#051740] rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg shadow-[#0A2463]/30 group-hover:scale-110 group-hover:shadow-[var(--turquoise)]/20 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-[var(--turquoise)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">3</div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Asysta profesjonalisty</h3>
            <p className="text-gray-600 leading-relaxed text-base">
              Zaproszenie certyfikowanego mediatora: ekspert omawia ze stronami przebieg mediacji i dba, by finalne porozumienie odzwierciedlało wolę obu stron oraz spełniało wymogi profesjonalnego obrotu. Udział profesjonalisty (Human-in-the-loop) łączy technologiczną wydajność z ludzkim doświadczeniem i empatią. Wypracowane rozwiązanie jest rzetelne, bezpieczne i korzystne finansowo dla obu stron.
            </p>
          </div>
          <div className="group backdrop-blur-sm bg-white/70 p-8 md:p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-[var(--glass-turquoise-border)] hover:border-[var(--turquoise)]/30 hover:-translate-y-1 hover:bg-white/80 relative">
            <div className="w-16 h-16 bg-linear-to-br from-[#0A2463] to-[#051740] rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg shadow-[#0A2463]/30 group-hover:scale-110 group-hover:shadow-[var(--turquoise)]/20 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-[var(--turquoise)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">4</div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Zawarcie Ugody</h3>
            <p className="text-gray-600 leading-relaxed text-base">
              Zawarcie ugody z wykorzystaniem kwalifikowanego podpisu elektronicznego, zgodnie ze
              standardami eIDAS 2.0 zapewnia uzyskanie statusu wiążącej umowy
              w oparciu o art. 78¹ KC.
            </p>
          </div>
          <div className="group backdrop-blur-sm bg-white/70 p-8 md:p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-[var(--glass-turquoise-border)] hover:border-[var(--turquoise)]/30 hover:-translate-y-1 hover:bg-white/80 relative">
            <div className="w-16 h-16 bg-linear-to-br from-[#0A2463] to-[#051740] rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg shadow-[#0A2463]/30 group-hover:scale-110 group-hover:shadow-[var(--turquoise)]/20 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-[var(--turquoise)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">5</div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Uzyskanie mocy ugody zawartej przed Sądem</h3>
            <p className="text-gray-600 leading-relaxed text-base">
              System automatycznie generuje i przygotowuje do wysyłki wniosek o zatwierdzenie ugody (Art.
              183¹⁵ KPC). Po zatwierdzeniu przez Sąd, ugoda zyskuje powagę rzeczy osądzonej i staje się
              niewzruszalna.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

