import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/authContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  console.log(user);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-wrap justify-between items-center z-[100] p-4 w-full absolute">
      <Link to="/" className="mb-4 sm:mb-0">
        <h1 className="text-red-600 text-5xl font-bold cursor-pointer">
          NOTFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <Link to="/account">
            <button className="cursor-pointer text-white ml-4 sm:mt-2">Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <Link to="/login">
            <button className="cursor-pointer text-white ml-6 sm:mt-2">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
