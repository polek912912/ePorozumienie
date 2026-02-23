import { TrustedProfileButtonProps } from '@/lib/types';

export default function TrustedProfileButton({ text }: TrustedProfileButtonProps) {
    return (
        <button 
          className="btn btn-trusted-profile w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl text-[0.9375rem] transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 border border-gray-200" 
          disabled
        >
          <span className="trusted-profile-icon flex items-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
          </span>
          <span>{text}</span>
        </button>
      );
}