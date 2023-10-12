import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { logoutAdmin } from "../../feature/admin/auth/authSlice";
import { toast } from "react-toastify";
import AdminHeader from "./includes/AdminHeader";
import AdminSideBar from "./includes/AdminSideBar";
import AddStudent from "./AdminPage/AdminStudent/AddStudent";
import AddParent from "./AdminPage/AdminParent/AddParent";
import AdminParent from "./AdminPage/AdminParent/AdminParent";

export default function Admin() {
  const { user, isLoading } = useSelector((state) => state.adminAuth);

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logoutAdmin());

    toast.success(`User logged out 🤗`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen justify-center items-center">
        <PropagateLoader size={25} loading={isLoading} color="#6C3129" />
      </div>
    );
  }

  document.title = "Admin | Dashboard";

  return (
    <div className=" bg-gray-100 min-h-screen">
      <div className="flex flex-col w-full">
        {/* navbar */}
        <AdminHeader user={user} logout={handleLogout} />

        {/* body */}
        <div className="flex flex-row">
          {/* sidebar */}
          <AdminSideBar />

          {/* body */}
          <div className="container flex justify-center my-5">
            <Routes>
              <Route path="/admin-student-add" element={<AddStudent />} />
              <Route path="/admin-parent-add" element={<AddParent />} />
              <Route path="/admin-parent-all" element={<AdminParent />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
