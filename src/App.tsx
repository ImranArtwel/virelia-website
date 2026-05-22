import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { DataGuarantee } from './components/DataGuarantee';
import { Trial } from './components/Trial';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <DataGuarantee />
        <Trial />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
