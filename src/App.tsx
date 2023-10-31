/* eslint-disable @typescript-eslint/no-unused-vars */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ManageSubject from "./pages/ManageSubject";
import MergedSubject from "./pages/MergedSubject";

import NoPage from "./pages/NoPage";
import StudentsList from "./pages/StudentsList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/managesubject" element={<ManageSubject />} />
        <Route path="/mergedsubject" element={<MergedSubject />} />
        <Route path="/studentlist" element={<StudentsList />} />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
