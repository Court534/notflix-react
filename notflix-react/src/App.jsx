import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/authContext";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import Protectedroute from "./components/Protectedroute";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <Protectedroute>
                <Account />
              </Protectedroute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
