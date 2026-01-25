/**
 * GeometricShapes Component
 * 
 * Decorative background shapes for the hero section.
 * Includes parallax effect based on mouse position.
 * 
 * @param {Object} props - Component props
 * @param {Object} props.mousePosition - Mouse position { normalizedX, normalizedY }
 */
function GeometricShapes({ mousePosition = { normalizedX: 0, normalizedY: 0 } }) {
  const { normalizedX, normalizedY } = mousePosition;

  // Calculate parallax offsets
  const getOffset = (multiplier = 1) => ({
    transform: `translate(${normalizedX * 20 * multiplier}px, ${normalizedY * 20 * multiplier}px)`,
  });

  return (
    <>
      {/* Large blur orb - top left */}
      <div
        className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float animate-pulse-slow"
        style={getOffset(0.5)}
      />

      {/* Large blur orb - top right */}
      <div
        className="absolute top-40 right-20 w-48 h-48 bg-brand-400/20 rounded-full blur-2xl animate-float-delayed"
        style={getOffset(-0.3)}
      />

      {/* Rounded square - bottom left */}
      <div
        className="absolute bottom-32 left-1/4 w-24 h-24 bg-white/10 rounded-3xl rotate-45 animate-float"
        style={getOffset(0.4)}
      />

      {/* Circle - bottom right */}
      <div
        className="absolute bottom-40 right-1/4 w-40 h-40 bg-brand-300/10 rounded-full blur-xl animate-float-delayed animate-pulse-slow"
        style={getOffset(-0.2)}
      />

      {/* Border square - center left */}
      <div
        className="absolute top-1/3 left-1/3 w-16 h-16 border-2 border-white/20 rounded-2xl animate-float-delayed"
        style={getOffset(0.6)}
      />

      {/* Border circle - center right */}
      <div
        className="absolute top-1/4 right-1/3 w-20 h-20 border border-white/10 rounded-full animate-float"
        style={getOffset(-0.4)}
      />
    </>
  );
}

export default GeometricShapes;
