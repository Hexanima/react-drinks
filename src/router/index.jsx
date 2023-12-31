import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/User/SignIn";
import SignUp from "../pages/User/SignUp";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default AppRoutes;
