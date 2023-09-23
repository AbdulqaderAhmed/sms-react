import { useDispatch, useSelector } from "react-redux";
import { PropagateLoader } from "react-spinners";
import { logoutAdmin } from "../../feature/admin/auth/authSlice";
import { toast } from "react-toastify";

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
    <div>
      <h1 className="text-3xl underline text-center">
        Welcome {user.username}
      </h1>

      <button onClick={handleLogout}>logout</button>
    </div>
  );
}
