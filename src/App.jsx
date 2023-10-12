import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRouter from "./private/PrivateRouter";
import Admin from "./components/admin/Admin";
import AdminLogin from "./components/admin/auth/AdminLogin";
import AdminRegister from "./components/admin/auth/AdminRegister";

export default function App() {
  return (
    <>
      <main>
        <Routes>
          <Route
            path="/admin-dashboard/*"
            element={<PrivateRouter component={Admin} />}
          />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-register" element={<AdminRegister />} />
        </Routes>
      </main>
      <ToastContainer limit={3} />
    </>
  );
}
