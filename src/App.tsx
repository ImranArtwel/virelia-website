import { Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { DataGuarantee } from './components/DataGuarantee';
import { Trial } from './components/Trial';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { PricingPage } from './pages/PricingPage';
import { HospitalManagementSystemPage } from './pages/HospitalManagementSystemPage';
import { ClinicManagementSoftwarePage } from './pages/guides/ClinicManagementSoftwarePage';
import { EmrVsPaperPage } from './pages/guides/EmrVsPaperPage';
import { OfflineEmrPage } from './pages/guides/OfflineEmrPage';

function HomePage() {
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/hospital-management-system-zimbabwe" element={<HospitalManagementSystemPage />} />
      <Route path="/clinic-management-software-zimbabwe" element={<ClinicManagementSoftwarePage />} />
      <Route path="/emr-vs-paper-records-zimbabwe" element={<EmrVsPaperPage />} />
      <Route path="/offline-emr-zimbabwe" element={<OfflineEmrPage />} />
    </Routes>
  );
}
