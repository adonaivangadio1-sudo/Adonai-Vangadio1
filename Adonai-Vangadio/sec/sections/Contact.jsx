import {
  motion
} from "motion/react";

import {
  ArrowUpRight,
  Mail,
  Instagram,
  Linkedin
} from "lucide-react";

function Contact() {
  return (
    <section
      id="contacto"
      className="contact-section"
    >
      <div className="container">
        <div className="contact-wrapper">

          <motion.div
            className="contact-main"
            initial={{
              opacity: 0,
              y: 25
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              amount: 0.25
            }}
            transition={{
              duration: 0.6
            }}
          >
            <span className="section-eyebrow">
              Vamos conversar
            </span>

            <h2>
              Tem uma ideia?
              <br />
              <em>Vamos criá-la.</em>
            </h2>

            <p>
              Conte-nos o que pretende criar,
              melhorar ou transformar. A partir
              daí, encontramos juntos a melhor
              direção para o projeto.
            </p>

            <a
              href="mailto:adonaivangadio1@gmail.com"
              className="contact-email"
            >
              <span>
                adonaivangadio1@gmail.com
              </span>

              <ArrowUpRight
                size={17}
                strokeWidth={1.4}
              />
            </a>
          </motion.div>

          <motion.div
            className="contact-side"
            initial={{
              opacity: 0,
              y: 25
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              amount: 0.25
            }}
            transition={{
              duration: 0.6,
              delay: 0.1
            }}
          >
            <div className="contact-side-label">
              Contacto direto
            </div>

            <a
              href="mailto:adonaivangadio1@gmail.com"
              className="contact-option"
            >
              <Mail
                size={17}
                strokeWidth={1.4}
              />

              <span>Email</span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.4}
              />
            </a>

            <a
              href="https://instagram.com/adonai_vangadio1"
              target="_blank"
              rel="noreferrer"
              className="contact-option"
            >
              <Instagram
                size={17}
                strokeWidth={1.4}
              />

              <span>Instagram</span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.4}
              />
            </a>

            <a
              href="https://linkedin.com/adonaivangadio"
              target="_blank"
              rel="noreferrer"
              className="contact-option"
            >
              <Linkedin
                size={17}
                strokeWidth={1.4}
              />

              <span>LinkedIn</span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.4}
              />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;