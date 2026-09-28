import { useState } from "react";

import Header from "./components/Header";
import Hero from "./sections/Hero";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">

      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main>
        <Hero />
      </main>

    </div>
  );
}

export default App;
import { useState } from "react";

import Header from "./components/Header";

import Hero from "./sections/Hero";
import Services from "./sections/Services";
import WhyAdonai from "./sections/WhyAdonai";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">

      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main>

        <Hero />

        <Services />

        <WhyAdonai />

      </main>

    </div>
  );
}

export default App;

import { useState } from "react";

import Header from "./components/Header";

import Hero from "./sections/Hero";
import Services from "./sections/Services";
import WhyAdonai from "./sections/WhyAdonai";
import Portfolio from "./sections/Portfolio";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">

      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main>

        <Hero />

        <Services />

        <WhyAdonai />

        <Portfolio />

      </main>

    </div>
  );
}

export default App;

import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Colaboradores from "./pages/Colaboradores";

import Curriculos from "./pages/Curriculos";
import Websites from "./pages/Websites";
import Branding from "./pages/Branding";
import MarketingDigital from "./pages/MarketingDigital";
import MidiasSociais from "./pages/MidiasSociais";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>

      <div className="app">

        <Header
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />

        <main>

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/sobre"
              element={<Sobre />}
            />

            <Route
              path="/colaboradores"
              element={<Colaboradores />}
            />

            <Route
              path="/portfolio/curriculos"
              element={<Curriculos />}
            />

            <Route
              path="/portfolio/websites"
              element={<Websites />}
            />

            <Route
              path="/portfolio/branding"
              element={<Branding />}
            />

            <Route
              path="/portfolio/marketing-digital"
              element={<MarketingDigital />}
            />

            <Route
              path="/portfolio/gestao-redes-sociais"
              element={<MidiasSociais />}
            />

          </Routes>

        </main>

      </div>

    </BrowserRouter>
  );
}

export default App;
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import WhyAdonai from "../sections/WhyAdonai";
import Portfolio from "../sections/Portfolio";
import Contact from "../sections/Contact";

function Home() {
  return (
    <>
      <Hero />

      <Services />

      <WhyAdonai />

      <Portfolio />

      <Contact />
    </>
  );
}

export default Home;
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Colaboradores from "./pages/Colaboradores";

import Curriculos from "./pages/Curriculos";
import Websites from "./pages/Websites";
import Branding from "./pages/Branding";
import MarketingDigital from "./pages/MarketingDigital";
import MidiasSociais from "./pages/MidiasSociais";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>

      <div className="app">

        <Header
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />

        <main>

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/sobre"
              element={<Sobre />}
            />

            <Route
              path="/colaboradores"
              element={<Colaboradores />}
            />

            <Route
              path="/portfolio/curriculos"
              element={<Curriculos />}
            />

            <Route
              path="/portfolio/websites"
              element={<Websites />}
            />

            <Route
              path="/portfolio/branding"
              element={<Branding />}
            />

            <Route
              path="/portfolio/marketing-digital"
              element={<MarketingDigital />}
            />

            <Route
              path="/portfolio/gestao-redes-sociais"
              element={<MidiasSociais />}
            />

          </Routes>

        </main>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;