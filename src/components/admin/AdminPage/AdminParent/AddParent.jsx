import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addParent,
  clear,
} from "../../../../feature/admin/AdminActions/AdminParentSlice";
import { toast } from "react-toastify";
import { PropagateLoader } from "react-spinners";

export default function AddParent() {
  const {
    data: parent,
    isLoading,
    isError,
    message,
  } = useSelector((state) => state.adminParent);
  const [parentData, setParentData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    username: "",
    password: "",
    phone: "",
    DOB: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(addParent(parentData));
  };

  useEffect(() => {
    if (parent && !isError) {
      toast.success(`Parent registerd`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch(clear());
      navigate("/admin-dashboard/admin-parent-all");
    } else {
      toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    dispatch(clear());
  }, [parent, isError, message, navigate, dispatch, parentData]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen justify-center items-center">
        <PropagateLoader size={25} loading={isLoading} color="#6C3129" />
      </div>
    );
  }

  return (
    <div className="bg-slate-200 w-4/6 h-5/6 py-10 shadow-xl rounded-2xl">
      <h1 className="text-center text-2xl font-semibold">Add Parent</h1>

      <form
        onSubmit={handleRegister}
        className="flex flex-col items-center gap-3 my-10"
      >
        <div className="grid grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="First name"
            onChange={(e) =>
              setParentData({
                ...parentData,
                firstName: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Middle name"
            onChange={(e) =>
              setParentData({
                ...parentData,
                middleName: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Last name"
            onChange={(e) =>
              setParentData({
                ...parentData,
                lastName: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Username"
            onChange={(e) =>
              setParentData({
                ...parentData,
                username: e.target.value,
              })
            }
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setParentData({
                ...parentData,
                password: e.target.value,
              })
            }
          />
          <input
            type="number"
            placeholder="Phone number"
            onChange={(e) =>
              setParentData({
                ...parentData,
                phone: e.target.value,
              })
            }
          />
          <input
            type="date"
            placeholder="Date of birth"
            onChange={(e) =>
              setParentData({
                ...parentData,
                DOB: e.target.value,
              })
            }
          />
        </div>

        <button
          type="submit"
          className="bg-[#6C3129] rounded-xl text-white p-2 w-1/2 hover:scale-105 duration-500 text-xl font-bold"
        >
          Register
        </button>
      </form>
    </div>
  );
}
