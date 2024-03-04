import React, { ChangeEvent } from "react";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/auth/Login";
import { IAuth } from "./interface/auth";
import Home from "./pages/User/Home";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import Register from "./components/auth/Register";
import Details from "./pages/User/Details";
import Vote from "./pages/User/Vote";
import Partai from "./pages/Admin/ListPartai";
import AddPartai from "./pages/Admin/AddPartai";
import Paslon from "./pages/Admin/ListPaslon";
import AddPaslon from "./pages/Admin/AddPaslon";

const App: React.FC = () => {
  const navigate = useNavigate();
  const [isLoginAdmin, setIsLoginAdmin] = React.useState<boolean>(false);
  const [isLogin, setIsLogin] = React.useState<boolean>(false);
  const [form, setForm] = React.useState<IAuth>({
    username: "",
    password: "",
  });

  function handleSetForm(event: ChangeEvent<HTMLInputElement>): void {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (form.username === "admin" && form.password === "123") {
      setIsLoginAdmin(true);
    } else if (
      form.username !== "" &&
      form.password !== "" &&
      form.username !== "admin" &&
      form.password !== "123"
    ) {
      setIsLogin(true);
    }
  }

  React.useEffect(() => {
    navigate("/home");
  }, [isLogin]);

  React.useEffect(() => {
    navigate("/admin");
  }, [isLoginAdmin]);

  function PrivateRoute() {
    if (isLogin) {
      return <Outlet />;
    } else {
      return <Navigate to="/login" />;
    }
  }

  function PrivateRouteAdmin() {
    if (isLoginAdmin) {
      return <Outlet />;
    } else {
      return <Navigate to="/login" />;
    }
  }

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={<Login handle={handleSetForm} login={login} />}
        />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<PrivateRouteAdmin />}>
          <Route path="/admin" element={<HomeAdmin />} />
        </Route>
        <Route path="/partai" element={<Partai />} />
        <Route path="/add-partai" element={<AddPartai />} />
        <Route path="/paslon" element={<Paslon />} />
        <Route path="/add-paslon" element={<AddPaslon />} />

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/detail" element={<Details />} />
        <Route path="/vote" element={<Vote />} />
      </Routes>
    </>
  );
};

export default App;
