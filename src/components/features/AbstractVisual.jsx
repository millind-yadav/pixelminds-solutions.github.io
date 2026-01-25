/**
 * AbstractVisual Component
 * 
 * Decorative abstract visual for the About section.
 */
function AbstractVisual() {
  return (
    <div className="w-full h-80 bg-gradient-to-br from-brand-600 to-brand-400 rounded-3xl shadow-2xl relative overflow-hidden">
      {/* Concentric circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 border-4 border-white/30 rounded-full" />
        <div className="absolute w-48 h-48 border-2 border-white/20 rounded-full" />
        <div className="absolute w-64 h-64 border border-white/10 rounded-full" />
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-8 right-8 w-16 h-16 bg-white/20 rounded-2xl" />
      <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/20 rounded-full" />
      <div className="absolute top-1/2 left-8 w-8 h-24 bg-white/10 rounded-full" />
    </div>
  );
}

export default AbstractVisual;
