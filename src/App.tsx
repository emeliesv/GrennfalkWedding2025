import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ModalProvider } from "./context/DialogContext";
import { AuthProvider } from "./context/AuthContext";

import AdminPage from "./pages/AdminPage";
import AdminLogin from "./pages/AdminLogin";

import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  return (
    <AuthProvider>
      <ModalProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/start"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            {/* Undersök varför redirect från inkognito hamnar på AdminLogin */}
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
        </Router>
      </ModalProvider>
    </AuthProvider>
  );
};

export default App;
