import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Installed from './pages/Installed';
import Uninstalled from './pages/Uninstalled';
import Success from './pages/Success';
import Cancel from './pages/Cancel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/installed" replace />} />
        <Route path="/installed" element={<Installed />} />
        <Route path="/uninstalled" element={<Uninstalled />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
