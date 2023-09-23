import { Link, useNavigate } from "react-router-dom";
import Admin from "../../../assets/img/School-Admin.jpg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear, registerAdmin } from "../../../feature/admin/auth/authSlice";
import PropagateLoader from "react-spinners/PropagateLoader";
import { toast } from "react-toastify";

export default function AdminRegister() {
  const { user, isError, message, isLoading } = useSelector(
    (state) => state.adminAuth
  );
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerAdmin(userData));
  };

  useEffect(() => {
    if (user && !isError) {
      toast.success("User registerd 🤗", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/admin-login");
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

  document.title = "Admin | Register";

  return (
    <div className="bg-zinc-300 min-h-screen flex justify-center items-center">
      <div className="bg-gray-200 flex flex-row p-4 gap-7 shadow-lg items-center rounded-2xl ">
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

        {/* inputs */}
        <div className="md:w-1/2 px-4">
          <h1 className="font-bold text-2xl text-[#6C3129] text-center">
            Register
          </h1>
          <form className="flex flex-col gap-6" onSubmit={handleRegister}>
            <input
              type="username"
              placeholder="Username"
              className="p-2 mt-8 rounded-lg border focus:scale-105 duration-500"
              onChange={(e) => {
                setUserData((prevState) => ({
                  ...prevState,
                  username: e.target.value,
                }));
              }}
            />

            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded-lg border focus:scale-105 duration-500"
              onChange={(e) => {
                setUserData((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }));
              }}
            />

            <input
              type="password"
              placeholder="Password"
              className="p-2 rounded-lg border focus:scale-105 duration-500"
              onChange={(e) => {
                setUserData((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }));
              }}
            />

            <button
              type="submit"
              className="bg-[#6C3129] rounded-xl text-white py-2 hover:scale-105 duration-500"
            >
              Register
            </button>

            <div className="text-sm flex flex-row gap-2">
              <p>have an account? </p>
              <Link
                to="/admin-login"
                className="text-blue-600 hover:scale-110 duration-500"
              >
                Login here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
