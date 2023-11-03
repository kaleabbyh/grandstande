import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ManageSubject from "./pages/ManageSubject";
import MergedSubject from "./pages/MergedSubject";

import NoPage from "./pages/NoPage";
import StudentsList from "./pages/StudentsList";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/managesubject" element={<ManageSubject />} />
        <Route path="/mergedsubject" element={<MergedSubject />} />
        <Route path="/studentlist" element={<StudentsList />} />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
