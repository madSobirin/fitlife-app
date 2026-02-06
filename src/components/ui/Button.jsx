export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`h-12 bg-primary hover:bg-[#15d665] text-[#111814] font-bold text-base rounded-lg shadow-glow hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
