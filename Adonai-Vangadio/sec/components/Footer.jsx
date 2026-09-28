import { Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">

          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <img
                src="/images/logobranco.png"
                alt="Adonai Vangadio"
              />
            </a>

            <p>
              Sua visão, nossa criatividade.
            </p>
          </div>

          <div className="footer-column">
            <span className="footer-label">
              Navegação
            </span>

            <a href="/">Início</a>
            <a href="/sobre">Sobre</a>
            <a href="/colaboradores">Colaboradores</a>
            <a href="/#servicos">Serviços</a>
            <a href="/#portfolio">Portfólio</a>
            <a href="/#contacto">Contacto</a>
          </div>

          <div className="footer-column">
            <span className="footer-label">
              Portfólio
            </span>

            <a href="/portfolio/websites">
              Websites
            </a>

            <a href="/portfolio/branding">
              Branding
            </a>

            <a href="/portfolio/curriculos">
              Currículos
            </a>

            <a href="/portfolio/marketing-digital">
              Marketing Digital
            </a>

            <a href="/portfolio/gestao-redes-sociais">
              Mídias Sociais
            </a>
          </div>

          <div className="footer-column footer-contact">
            <span className="footer-label">
              Contacto
            </span>

            <a href="mailto:adonaivangadio1@gmail.com">
              adonaivangadio1@gmail.com
              <ArrowUpRight size={13} />
            </a>

            <div className="footer-socials">

              <a
                href="https://instagram.com/adonai_vangadio1"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={16} strokeWidth={1.6} />
              </a>

              <a
                href="https://linkedin.com/adonaivangadio"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} strokeWidth={1.6} />
              </a>

              <a
                href="mailto:adonaivangadio1@gmail.com"
                aria-label="Email"
              >
                <Mail size={16} strokeWidth={1.6} />
              </a>

            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Adonai Vangadio
          </span>

          <span>
            Design · Digital · Web
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
