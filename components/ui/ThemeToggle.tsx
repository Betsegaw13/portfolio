"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load saved theme on first render
  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setDark(false);
      document.documentElement.classList.remove("dark");
    }

    setMounted(true);
  }, []);

  // Update theme when toggled
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark, mounted]);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed bottom-5 right-5 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-black dark:text-white shadow"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}