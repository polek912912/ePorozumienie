import Image from 'next/image';

export default function TeamSection() {
  return (
    <section id="zespol" className="py-8 md:py-12 bg-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 md:mb-20 text-gray-900 tracking-tight">
          Twórcy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          <div className="group bg-white p-6 md:p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-center border border-gray-100 hover:-translate-y-1">
            <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-3xl bg-gray-200 shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/1.jpg"
                alt="Simone Barszczak"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Simone <br />Barszczak</h3>
            <p className="text-blue-700 font-semibold mb-4 text-lg">Prawnik nowych technologii</p>
            <p className="text-gray-600 leading-relaxed text-base">
              Aplikant radcowski zrzeszony przy OIRP Warszawa. Audytor ISMS.
              Specjalizuje się w obsłudze rynku kryptoaktywów, rynku płatniczego, AML/CFT, ochronie danych osobowych i prawie gospodarczym
            </p>
          </div>
          <div className="group bg-white p-6 md:p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-center border border-gray-100 hover:-translate-y-1">
            <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-3xl bg-gray-200 shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/2.jpg"
                alt="Paweł Urzenitzok"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Paweł <br />Urzenitzok</h3>
            <p className="text-blue-700 font-semibold mb-4 text-lg">Doktorant</p>
            <p className="text-gray-600 leading-relaxed text-base">
              Wicemistrz świata w negocjacjach z doświadczeniem w obsłudze globalnych korporacji
              technologicznych. Doktorant prawa nowoczesnych technologii na ALK. Projektuje algorytmy
              konsensusu w oparciu o światowe standardy mediacji.
            </p>
          </div>
          <div className="group bg-white p-6 md:p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-center border border-gray-100 hover:-translate-y-1">
            <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-3xl bg-gray-200 shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/3.jpg"
                alt="Mikołaj Uroda"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Mikołaj <br />Uroda</h3>
            <p className="text-blue-700 font-semibold mb-4 text-lg">Prawnik, informatyk</p>
            <p className="text-gray-600 leading-relaxed text-base">
              Prawnik i informatyk. Łączy Specjalista wiedzę prawniczą z umiejętnościami programistycznymi.
              Na co dzień zajmuje się automatyzacją przedsiębiorstw.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

