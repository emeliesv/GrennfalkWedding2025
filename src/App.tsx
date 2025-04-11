import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ModalProvider } from "./context/DialogContext";
import { AuthProvider } from "./context/AuthContext";

import AdminPage from "./pages/AdminPage";
import AdminLogin from "./pages/AdminLogin";

import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";

const App = () => {
  return (
    <AuthProvider>
      <ModalProvider>
        <Router>
          {/* Jag tror jag behöver lägga in Header här, men undersök då hur det blir med useRef och scrollbeteendet */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AdminLogin />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminPage />
                </ProtectedRoute>
              }
            />
          </Routes>
          {/* Jag tror jag behöver lägga in Footer här, men undersök då hur det blir med useRef och scrollbeteendet */}
        </Router>
      </ModalProvider>
    </AuthProvider>
  );
};

export default App;
