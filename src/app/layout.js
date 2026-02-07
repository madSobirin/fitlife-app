import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  icons: { icon: "/img/wallpaper.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background-light dark:bg-background-dark text-black dark:text-white font-display antialiased">
        {children}
      </body>
    </html>
  );
}
