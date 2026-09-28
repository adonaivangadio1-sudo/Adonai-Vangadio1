import { useEffect, useState } from "react";
import {
  Sun,
  Moon,
  Monitor
} from "lucide-react";

function ThemeSwitcher() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "auto"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "auto") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", theme);
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="theme-switcher">

      <button
        type="button"
        className={theme === "light" ? "active" : ""}
        onClick={() => setTheme("light")}
        aria-label="Modo claro"
      >
        <Sun size={15} strokeWidth={1.7} />
      </button>

      <button
        type="button"
        className={theme === "dark" ? "active" : ""}
        onClick={() => setTheme("dark")}
        aria-label="Modo escuro"
      >
        <Moon size={15} strokeWidth={1.7} />
      </button>

      <button
        type="button"
        className={theme === "auto" ? "active" : ""}
        onClick={() => setTheme("auto")}
        aria-label="Modo automático"
      >
        <Monitor size={15} strokeWidth={1.7} />
      </button>

    </div>
  );
}

export default ThemeSwitcher;