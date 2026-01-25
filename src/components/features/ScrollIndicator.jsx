/**
 * ScrollIndicator Component
 * 
 * Animated scroll indicator for hero section.
 */
function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
      <div className="w-8 h-14 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
        <div className="w-1.5 h-3 bg-white/80 rounded-full" />
      </div>
    </div>
  );
}

export default ScrollIndicator;
