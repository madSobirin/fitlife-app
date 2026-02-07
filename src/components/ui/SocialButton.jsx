export default function SocialButton({ label, icon }) {
  return (
    <button className="cursor-pointer flex items-center justify-center gap-3 w-full h-12 rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 group">
      <div className="w-5 h-5 flex items-center justify-center">{icon}</div>

      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
        {label}
      </span>
    </button>
  );
}
