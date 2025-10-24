import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 transition hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {theme === "light" ? (
        <>
          <FaMoon className="text-gray-700 dark:text-gray-300" /> Dark
        </>
      ) : (
        <>
          <FaSun className="text-yellow-400" /> Light
        </>
      )}
    </button>
  );
}
