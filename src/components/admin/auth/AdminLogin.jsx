import { Link, useNavigate } from "react-router-dom";
import Admin from "../../../assets/img/School-Admin.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { PropagateLoader } from "react-spinners";
import { clear, loginAdmin } from "../../../feature/admin/auth/authSlice";

export default function AdminLogin() {
  const { user, isError, isLoading, message } = useSelector(
    (state) => state.adminAuth
  );
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(loginAdmin(userData));
  };

  useEffect(() => {
    if (user && !isError) {
      toast.success(`Welcome ${user.username} 🤗`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/admin-dashboard");
    } else {
      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    dispatch(clear());
  }, [user, isError, message, navigate, dispatch]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen justify-center items-center">
        <PropagateLoader size={25} loading={isLoading} color="#6C3129" />
      </div>
    );
  }

  document.title = "Admin | Login";

  return (
    <div className="bg-zinc-200 min-h-screen flex justify-center items-center">
      <div className="bg-gray-100 flex flex-row p-4 gap-7 shadow-lg items-center rounded-2xl ">
        {/* inputs */}
        <div className="md:w-1/2 px-4">
          <h1 className="font-bold text-2xl text-[#6C3129] text-center">
            Login
          </h1>
          <form className="flex flex-col gap-6" onSubmit={handleLogin}>
            <input
              type="username"
              placeholder="Username"
              className="p-2 mt-8 rounded-lg border focus:scale-105 duration-500"
              onChange={(e) => {
                setUserData((prevData) => ({
                  ...prevData,
                  username: e.target.value,
                }));
              }}
            />

            <input
              type="password"
              placeholder="Password"
              className="p-2 rounded-lg border focus:scale-105 duration-500"
              onChange={(e) => {
                setUserData((prevData) => ({
                  ...prevData,
                  password: e.target.value,
                }));
              }}
            />

            <button
              type="submit"
              className="bg-[#6C3129] rounded-xl text-white py-2 hover:scale-105 duration-500"
            >
              Login
            </button>

            <div className="text-sm flex flex-row gap-2">
              <p>Do not have an account? </p>
              <Link
                to="/admin-register"
                className="text-blue-600 hover:scale-110 duration-500 "
              >
                Register here
              </Link>
            </div>
          </form>
        </div>

        {/* for image */}
        <div className="md:block hidden w-1/2">
          <img
            src={Admin}
            alt="admin"
            width={300}
            height={300}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
