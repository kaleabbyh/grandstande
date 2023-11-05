import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NoPage from "./pages/NoPage";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";
import ServicesPage from "./pages/ServicesPage";
import ContanctsPage from "./pages/ContanctsPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContanctsPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
