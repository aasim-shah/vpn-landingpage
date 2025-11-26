import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Installed from './pages/Installed';
import Uninstalled from './pages/Uninstalled';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import Contact from './pages/Contact';
import FaqPage from './pages/Faqs';
import TermsOfUse from './pages/TermsOfUse';
import NotFound from './pages/no-page-found';
import PrivacyPolicy from './pages/Privacy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/installed" replace />} />
        <Route path="/installed" element={<Installed />} />
        <Route path="/uninstalled" element={<Uninstalled />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/*" element={<NotFound />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
