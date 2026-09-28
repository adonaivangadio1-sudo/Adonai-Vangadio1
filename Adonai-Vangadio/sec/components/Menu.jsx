import RouteLink from "./RouteLink";
import {
  AnimatePresence,
  motion
} from "motion/react";

import {
  ArrowUpRight,
  X
} from "lucide-react";

import {
  Link,
  useLocation
} from "react-router-dom";

import SocialLinks from "./SocialLinks";
import RouteLink from "./RouteLink";

const navigation = [
  { number: "01", label: "Início", href: "/" },
  { number: "02", label: "Sobre", href: "/sobre" },
  { number: "03", label: "Serviços", href: "/#servicos" },
  { number: "04", label: "Portfólio", href: "/#portfolio" },
  { number: "05", label: "Colaboradores", href: "/colaboradores" },
  { number: "06", label: "Contacto", href: "/#contacto" }
];

const portfolioNavigation = [
  {
    label: "Websites",
    href: "/portfolio/websites"
  },
  {
    label: "Branding",
    href: "/portfolio/branding"
  },
  {
    label: "Currículos",
    href: "/portfolio/curriculos"
  },
  {
    label: "Marketing Digital",
    href: "/portfolio/marketing-digital"
  },
  {
    label: "Mídias Sociais",
    href: "/portfolio/gestao-redes-sociais"
  }
];

function Menu({
  open,
  onClose
}) {
  const location = useLocation();

  const handleClose = () => {
    onClose();
  };

  const isActive = (href) => {
    if (href === "/") {
      return location.pathname === "/";
    }

    if (href.includes("#")) {
      return location.pathname === "/";
    }

    return location.pathname === href;
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="menu-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="menu-panel"
            initial={{
              opacity: 0,
              x: 40
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            exit={{
              opacity: 0,
              x: 40
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <div className="menu-panel-header">
              <span className="menu-label">
                Navegação
              </span>

              <button
                type="button"
                className="menu-close"
                onClick={handleClose}
                aria-label="Fechar menu"
              >
                <X
                  size={18}
                  strokeWidth={1.5}
                />
              </button>
            </div>

            <nav className="menu-navigation">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    x: 20
                  }}
                  animate={{
                    opacity: 1,
                    x: 0
                  }}
                  transition={{
                    delay: 0.08 + index * 0.045
                  }}
                >
                  {item.href.includes("#") ? (
                    <RouteLink
                      to={item.href}
                      onClick={handleClose}
                      className={
                        isActive(item.href)
                          ? "menu-link active"
                          : "menu-link"
                      }
                    >
                      <span className="menu-link-number">
                        {item.number}
                      </span>

                      <span className="menu-link-label">
                        {item.label}
                      </span>

                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.4}
                      />
                    </RouteLink>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={handleClose}
                      className={
                        isActive(item.href)
                          ? "menu-link active"
                          : "menu-link"
                      }
                    >
                      <span className="menu-link-number">
                        {item.number}
                      </span>

                      <span className="menu-link-label">
                        {item.label}
                      </span>

                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.4}
                      />
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            <div className="menu-subsection">
              <span className="menu-label">
                Portfólio
              </span>

              <div className="menu-portfolio-links">
                {portfolioNavigation.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={handleClose}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="menu-footer">
              <SocialLinks />

              <span className="menu-footer-copy">
                Sua visão, nossa criatividade.
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Menu;