export default function FeaturesSection() {
  return (
    <section className="py-8 md:py-12 relative">
      {/* Background with glass effect and turquoise accents */}
      <div className="absolute inset-0 bg-slate-200">
        <div className="absolute inset-0 bg-[var(--glass-turquoise-bg)] opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,var(--glass-turquoise-accent),transparent_50%),radial-gradient(circle_at_80%_20%,var(--glass-turquoise-accent),transparent_50%)] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 md:mb-20 text-gray-900 tracking-tight">
          Kluczowe <span className="text-[var(--turquoise)] drop-shadow-sm">funkcje</span> platformy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Feature 1 */}
          <div className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-300 border border-gray-100 hover:border-[#0A2463]/20 hover:-translate-y-1">
            <div className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full shadow-lg shadow-red-500/30">Polskie rozwiązanie</div>
            <div className="w-16 h-16 bg-linear-to-br from-[#0A2463] to-[#051740] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#0A2463]/30 group-hover:scale-110 group-hover:shadow-[var(--turquoise)]/20 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-[var(--turquoise)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Dedykowany<br/>AI-mediator</h3>
            <p className="text-gray-600 leading-relaxed text-base">
              Wykorzystanie dedykowanego modelu językowego przeszkolonego na polskim orzecznictwie i
              dokumentacji mediacyjnej. System identyfikuje pola porozumienia w oparciu o interesy stron,
              wykraczając poza sztywne stanowiska procesowe.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-300 border border-gray-100 hover:border-[#0A2463]/20 hover:-translate-y-1">
            <div className="w-16 h-16 bg-linear-to-br from-[#0A2463] to-[#051740] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#0A2463]/30 group-hover:scale-110 group-hover:shadow-[var(--turquoise)]/20 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-[var(--turquoise)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V8.414a2 2 0 00-.586-1.414l-4.828-4.828A2 2 0 0011.586 2H4zm3 8a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm0 4a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Generator dokumentów</h3>
            <p className="text-gray-600 leading-relaxed text-base">
              Automatyczne tworzenie dokumentacji ugodowej i wniosków do sądu o nadanie klauzuli
              wykonalności. Każdy dokument jest strukturyzowany zgodnie z aktualnymi wymogami formalno-
              prawnymi, co gwarantuje jego skuteczność egzekucyjną.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-300 border border-gray-100 hover:border-[#0A2463]/20 hover:-translate-y-1">
            <div className="w-16 h-16 bg-linear-to-br from-[#0A2463] to-[#051740] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#0A2463]/30 group-hover:scale-110 group-hover:shadow-[var(--turquoise)]/20 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-[var(--turquoise)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zM13 9V5.5a3 3 0 10-6 0V9h6z"
                  clipRule="evenodd"
                ></path>
              </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Szyfrowanie i ISO 27001</h3>
            <p className="text-gray-600 leading-relaxed text-base">
              Bezpieczeństwo danych oparte na standardzie AES-256 (end-to-end). Platforma stosuje strukturę
              uznanego standardu zarządzania systemami bezpieczeństwa informacji.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-300 border border-gray-100 hover:border-[#0A2463]/20 hover:-translate-y-1">
            <div className="w-16 h-16 bg-linear-to-br from-[#0A2463] to-[#051740] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#0A2463]/30 group-hover:scale-110 group-hover:shadow-[var(--turquoise)]/20 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-[var(--turquoise)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Uwierzytelnienie eIDAS 2.0
            </h3>
            <p className="text-gray-600 leading-relaxed text-base">
              Platforma internalizuje kwalifikowany podpis elektroniczne w rozumieniu Rozporządzenia eIDAS
              2.0, co zapewnia najwyższą moc dowodową zawartej ugody i jej niezaprzeczalność.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-300 border border-gray-100 hover:border-[#0A2463]/20 hover:-translate-y-1">
            <div className="w-16 h-16 bg-linear-to-br from-[#0A2463] to-[#051740] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#0A2463]/30 group-hover:scale-110 group-hover:shadow-[var(--turquoise)]/20 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-[var(--turquoise)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"></path>
                <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3s-7-1.343-7-3z"></path>
                <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"></path>
              </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Weryfikacja Podmiotowa</h3>
            <p className="text-gray-600 leading-relaxed text-base">
              Automatyczna integracja z rejestrami publicznymi. System weryfikuje tożsamość stron oraz
              aktualne umocowanie osób reprezentujących, eliminując ryzyko wad prawnych oświadczeń woli.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-300 border border-gray-100 hover:border-[#0A2463]/20 hover:-translate-y-1">
            <div className="w-16 h-16 bg-linear-to-br from-[#0A2463] to-[#051740] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#0A2463]/30 group-hover:scale-110 group-hover:shadow-[var(--turquoise)]/20 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-[var(--turquoise)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <svg
                className="h-8 w-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Rozliczenia<br/>Smart Escrow</h3>
            <p className="text-gray-600 leading-relaxed text-base">
              Zintegrowany mechanizm rozliczeń warunkowych. System zwalnia środki finansowe lub kody
              dostępu do dokumentów dopiero po potwierdzeniu przez obie strony realizacji wzajemnych świadczeń wynikających z
              ugody.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

