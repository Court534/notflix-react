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
    <div className="flex sm:flex justify-between sm:p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-5xl font-bold cursor-pointer">
          NOTFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="pr-4 cursor-pointer text-white">Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="pr-4 cursor-pointer text-white">Sign In</button>
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
