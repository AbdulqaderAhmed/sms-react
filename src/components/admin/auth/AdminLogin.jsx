import Admin from "../../../assets/img/School-Admin.jpg";

export default function AdminLogin() {
  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center">
      <div className="bg-gray-100 flex flex-row p-4 gap-4 shadow-lg rounded-2xl ">
        {/* inputs */}
        <div className="sm:w-1/2 px-16">
          <h1 className="font-bold text-2xl text-[#6C3129]">Login</h1>
          <form className="flex flex-col gap-4">
            <input
              type="username"
              placeholder="Username..."
              className="p-2 mt-8 rounded-lg border"
            />

            <input
              type="password"
              placeholder="Password..."
              className="p-2 rounded-lg border"
            />

            <button
              type="submit"
              className="bg-[#6C3129] rounded-xl text-white py-2"
            >
              Login
            </button>
          </form>
        </div>

        {/* for image */}
        <div className="sm:block hidden w-1/2">
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
