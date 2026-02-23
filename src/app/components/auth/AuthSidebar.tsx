export default function AuthSidebar() {
  return (
    <div className="login-image">
      <div className="login-image-content">
        <div className="logo">e-Porozumienie</div>
        <h2>Inteligentna platforma mediacyjna</h2>
        <p className="opacity-95">Rozwiązuj spory szybciej, taniej i skuteczniej dzięki wsparciu sztucznej inteligencji.</p>
        
        <div className="login-stats grid grid-cols-3 gap-2">
          <div className="stat-item bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20">
            <div className="stat-number">4×</div>
            <div className="stat-label">szybciej niż sąd</div>
          </div>
          <div className="stat-item bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20">
            <div className="stat-number">10×</div>
            <div className="stat-label">taniej niż sąd</div>
          </div>
          <div className="stat-item bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20">
            <div className="stat-number">24/7</div>
            <div className="stat-label">dostępność</div>
          </div>
        </div>
      </div>
    </div>
  );
}

