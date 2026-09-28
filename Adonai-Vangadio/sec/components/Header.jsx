import {
  Menu as MenuIcon
} from "lucide-react";

import ThemeSwitcher from "./ThemeSwitcher";
import Menu from "./Menu";

function Header({
  menuOpen,
  setMenuOpen
}) {
  return (
    <>
      <header className="site-header">

        <a
          href="#inicio"
          className="site-logo"
          aria-label="Adonai Vangadio"
        >
          <img
            src="/images/logobranco.png"
            alt="Adonai Vangadio"
          />
        </a>

        <div className="header-actions">

          <button
            type="button"
            className="menu-trigger"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <span>Menu</span>

            <MenuIcon
              size={17}
              strokeWidth={1.7}
            />
          </button>

          <ThemeSwitcher />

        </div>

      </header>

      <Menu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}

export default Header;