import { motion } from "motion/react";

function Colaboradores() {
  return (
    <section className="internal-page">

      <div className="container">

        <motion.div
          className="internal-hero"
          initial={{
            opacity: 0,
            y: 25
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6
          }}
        >

          <span className="eyebrow">
            COLABORADORES
          </span>

          <h1>
            Pessoas por trás
            <br />
            de cada projeto.
          </h1>

          <p>
            Uma abordagem colaborativa para
            transformar diferentes ideias em
            soluções com propósito.
          </p>

        </motion.div>

        <motion.div
          className="collaborators-feature"
          initial={{
            opacity: 0,
            scale: 0.98
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
        >

          <img
            src="/images/equipe-01.png"
            alt="Colaboradores Adonai Vangadio"
            loading="lazy"
          />

        </motion.div>

      </div>

    </section>
  );
}

export default Colaboradores;