import { SubmitButtonProps } from '@/lib/types';

export default function SubmitButton({
    loading,
    loadingText,
    text,
}: SubmitButtonProps) {
    return (
        <div className="form-actions">
        <button
          type="submit"
          className="login-btn btn btn-primary w-full bg-[#0A2463] hover:bg-[#051740] text-white font-bold rounded-xl shadow-md shadow-[#0A2463]/30 hover:shadow-lg hover:shadow-[#0A2463]/40 transition-all duration-200 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          disabled={loading}
        >
          {loading && <span className="spinner"></span>}
          <span>{loading ? loadingText : text}</span>
        </button>
      </div>
    );
}