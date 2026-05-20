import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Certifications from "./sections/Certifications.jsx";
import OnlineBusiness from "./sections/OnlineBusiness.jsx";
import Projects from "./sections/Projects.jsx";
import WhyChooseMe from "./sections/WhyChooseMe.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";
import CursorGlow from "./components/CursorGlow.jsx";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  return (
    <div className="min-h-screen overflow-x-hidden bg-bg text-text selection:bg-primary selection:text-white">
      <motion.div className="fixed left-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-primary via-secondary to-accent" style={{ scaleX }} />
      <CursorGlow />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(180deg,#F8FAFC_0%,#F0FDFA_42%,#EFF6FF_72%,#F8FAFC_100%)]" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Certifications />
        <OnlineBusiness />
        <Projects />
        <WhyChooseMe />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
