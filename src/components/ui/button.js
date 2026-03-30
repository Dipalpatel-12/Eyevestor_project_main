export default function Button({ children, size = "md", className = "" }) {
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${sizeStyles[size]} rounded-full font-semibold ${className || "bg-black text-white cursor-pointer"}`}
    >
      {children}
    </button>
  );
}