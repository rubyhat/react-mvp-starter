import React from "react";
import { Route, Routes } from "react-router-dom";

import { useAuth } from "../store";

const ProtectedRoute = React.lazy(() => import("./ProtectedRoute"));
const Page404 = React.lazy(() => import("../pages/Common/Page404"));
const Page401 = React.lazy(() => import("../pages/Common/Page401"));
const Home = React.lazy(() => import("../pages/Home"));
const UserProfile = React.lazy(() => import("../pages/UserProfile"));
const Register = React.lazy(() => import("../pages/Register"));
const Login = React.lazy(() => import("../pages/Login"));

export const RouteList = () => {
  const isAuth = useAuth((state) => state.isAuth);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/no-auth" element={<Page401 />} />
      <Route
        path="/u/userName"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <UserProfile />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
