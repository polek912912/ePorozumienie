'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isRulesPage = pathname === '/rules';
  const isPrivacyPolicyPage = pathname === '/privacy-policy';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-xl bg-white/90 border-b border-[var(--glass-turquoise-border)] shadow-sm">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center h-16 md:h-18">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-base md:text-lg font-semibold text-[#0A2463] tracking-tight transition-all duration-200 hover:scale-105"
              >
                e-Porozumienie
              </Link>
              {isHomePage && (
                <div className="hidden md:flex items-center gap-1 lg:gap-2">
                <a
                  href="#jak-to-dziala"
                  className="px-4 py-2 rounded-xl text-gray-700 hover:text-[var(--turquoise)] font-normal text-sm transition-all duration-200 hover:bg-[var(--glass-turquoise-accent)] active:scale-95"
                >
                  Jak to działa
                </a>
                <a
                  href="#korzysci"
                  className="px-4 py-2 rounded-xl text-gray-700 hover:text-[var(--turquoise)] font-normal text-sm transition-all duration-200 hover:bg-[var(--glass-turquoise-accent)] active:scale-95"
                >
                  Korzyści
                </a>
                <a
                  href="#kredyty-frankowe"
                  className="px-4 py-2 rounded-xl text-gray-700 hover:text-[var(--turquoise)] font-normal text-sm transition-all duration-200 hover:bg-[var(--glass-turquoise-accent)] active:scale-95"
                >
                  Kredyty frankowe
                </a>
                <a
                  href="#cennik"
                  className="px-4 py-2 rounded-xl text-gray-700 hover:text-[var(--turquoise)] font-normal text-sm transition-all duration-200 hover:bg-[var(--glass-turquoise-accent)] active:scale-95"
                >
                  Model biznesowy
                </a>
                <a
                  href="#zespol"
                  className="px-4 py-2 rounded-xl text-gray-700 hover:text-[var(--turquoise)] font-normal text-sm transition-all duration-200 hover:bg-[var(--glass-turquoise-accent)] active:scale-95"
                >
                  Zespół
                </a>
                </div>
              )}
            </div>
            {(isHomePage || isRulesPage || isPrivacyPolicyPage) && (
              <div>
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-normal bg-linear-to-br from-[#0A2463] to-[#051740] text-white rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-[var(--turquoise)]/20 active:scale-95 border border-[var(--turquoise)]/20"
                >
                  Logowanie
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

