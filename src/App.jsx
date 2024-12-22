import Contact from "./components/Contact";
import Footer from "./layout/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "/src/components/About";
import Header from "./layout/Header";

const App = () => {

  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
};
export default App;

