"use client";

import React, { useEffect, useState } from "react";
import Toggle from "./Toggle"; // Ensure this file exists and is compatible with Next.js

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    setDarkMode(isDark);
    document.body.classList.toggle("dark-theme", isDark);
  }, []);

  const handleToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.body.classList.toggle("dark-theme", newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  return <Toggle checked={darkMode} onChange={handleToggle} />;
};

export default DarkModeToggle;
