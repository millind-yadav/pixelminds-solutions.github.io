/**
 * GeometricShapes Component
 * 
 * Subtle decorative shapes for the hero section.
 * Reduced opacity to complement the animated background.
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
      {/* Subtle floating shapes - reduced opacity */}
      <div
        className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl animate-float"
        style={getOffset(0.5)}
      />

      <div
        className="absolute top-40 right-20 w-48 h-48 bg-violet-500/5 rounded-full blur-2xl animate-float-delayed"
        style={getOffset(-0.3)}
      />

      <div
        className="absolute bottom-40 right-1/4 w-40 h-40 bg-blue-400/5 rounded-full blur-xl animate-float-delayed"
        style={getOffset(-0.2)}
      />

      <div
        className="absolute top-1/3 left-1/4 w-16 h-16 border border-white/5 rounded-2xl animate-float-delayed"
        style={getOffset(0.6)}
      />
    </>
  );
}

export default GeometricShapes;
