"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Input({
  label,
  type = "text",
  placeholder,
  isPassword = false,
  ...props // 1. PENTING: Tambahkan ini agar input bisa menerima value & onChange
}) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="group">
      {label && (
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 ml-1">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={inputType}
          className={`w-full h-14 bg-white dark:bg-surface-dark rounded-lg border-0 ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-surface-dark transition-all duration-200 pl-4 placeholder:text-gray-400 text-base font-medium text-gray-900 dark:text-white shadow-sm hover:ring-gray-300 dark:hover:ring-gray-600 ${isPassword ? "pr-12" : "pr-4"}`}
          placeholder={placeholder}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            // Tambahkan z-10 supaya tombol pasti di atas input
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors z-10 focus:outline-none"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
