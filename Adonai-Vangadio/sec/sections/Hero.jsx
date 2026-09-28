import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

function Hero() {
  return (
    <section
      id="inicio"
      className="hero"
    >
      <div className="container">

        <div className="hero-layout">

          <div className="hero-content">

            <motion.span
              className="eyebrow"
              initial={{
                opacity: 0,
                y: 12
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.5
              }}
            >
              ADONAI VANGADIO
            </motion.span>


            <motion.h1
              initial={{
                opacity: 0,
                y: 25
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.7,
                delay: 0.08
              }}
            >
              Sua visão,
              <br />
              <em>
                nossa criatividade.
              </em>
            </motion.h1>


            <motion.p
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6,
                delay: 0.16
              }}
            >
              Soluções digitais e visuais que unem
              criatividade, design e tecnologia para
              transformar ideias em experiências
              modernas e funcionais.
            </motion.p>


            <motion.div
              className="hero-actions"
              initial={{
                opacity: 0,
                y: 15
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.5,
                delay: 0.23
              }}
            >

              <a
                href="#portfolio"
                className="button"
              >
                Explorar trabalho

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                />
              </a>

              <a
                href="#contacto"
                className="button button-secondary"
              >
                Iniciar projeto
              </a>

            </motion.div>

          </div>


          <motion.div
            className="hero-visual"
            initial={{
              opacity: 0,
              scale: .97
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: .8,
              delay: .12
            }}
          >

            <div className="hero-image-wrap">

              <img
                src="/images/hero-premium.png"
                alt="Adonai Vangadio"
              />

            </div>


            <div className="hero-scroll">

              <span>
                Scroll
              </span>

              <ArrowDown
                size={13}
                strokeWidth={1.4}
              />

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
