function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-base-200 via-base-300 to-base-200 animate-gradient" />
      
      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
      
      {/* Animated blob */}
      <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
    </div>
  );
}

export default AnimatedBackground; 