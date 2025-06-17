function AbstractBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute -right-1/4 -top-1/4 w-3/4 h-3/4 opacity-20"
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path
          d="M 400 400 m -300 0 a 300 300 0 1 0 600 0 a 300 300 0 1 0 -600 0"
          fill="url(#gradient)"
          transform="rotate(45 400 400)"
        />
        <path
          d="M 400 400 m -200 0 a 200 200 0 1 0 400 0 a 200 200 0 1 0 -400 0"
          fill="url(#gradient)"
          transform="rotate(-30 400 400)"
        />
      </svg>
    </div>
  );
}

export default AbstractBackground; 