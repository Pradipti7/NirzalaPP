import Frame from "./components/Frame.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Profile from "./components/Profile.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import Certifications from "./components/Certifications.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      <Frame />
      <Nav />
      <Hero />
      <main>
        <Profile />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}