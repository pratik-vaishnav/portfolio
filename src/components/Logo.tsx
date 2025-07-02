interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const Logo = ({ className = "", size = "md", showText = true }: LogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} relative`}>
        {/* Background circle with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent rounded-xl shadow-lg"></div>

        {/* Inner pattern */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Abstract code/server pattern */}
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
            {/* Main server shape */}
            <rect
              x="3"
              y="4"
              width="18"
              height="16"
              rx="2"
              fill="currentColor"
              fillOpacity="0.3"
            />
            <rect
              x="3"
              y="4"
              width="18"
              height="4"
              rx="2"
              fill="currentColor"
            />

            {/* Code brackets */}
            <path
              d="M8 12L6 14L8 16M16 12L18 14L16 16M12 10L10 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Corner accent */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full shadow-sm"></div>
      </div>

      {/* Text */}
      {showText && (
        <span className={`font-bold text-primary-900 ${textSizeClasses[size]}`}>
          PV
        </span>
      )}
    </div>
  );
};

export default Logo;
