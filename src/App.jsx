import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRouter from "./private/PrivateRouter";
import Admin from "./components/admin/Admin";
import AdminLogin from "./components/admin/auth/AdminLogin";

export default function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/admin" element={<PrivateRouter component={Admin} />} />
          <Route path="/admin-login" element={<AdminLogin />} />
        </Routes>
      </main>
    </Router>
  );
}
