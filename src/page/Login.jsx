import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import { AlertMessageHelp } from "../alerts/Alerts";
import { errorMessages } from "../helpers/Messages";
export const Login = () => {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setuser((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const submitForm = (e) => {
    e.preventDefault();
    login(user.email, user.password)
      .then((x) => {
        AlertMessageHelp("Ingreso exitoso", "success");

        localStorage.setItem("galerytok", x.user.accessToken);
        navigate("/home");
      })
      .catch((err) => {
        AlertMessageHelp(
          errorMessages[err.code] ||
            "Ocurrió un error, vuelva a intentar en unos minutos",
          "error"
        );
      });
  };
  return (
    <>
      <form className="form" onSubmit={submitForm}>
        <h2>Iniciar Sesión</h2>
        <input
          type="text"
          placeholder="Ingresar correo"
          className="input-form"
          value={user.email}
          name="email"
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Ingresar contraseña"
          className="input-form"
          value={user.password}
          name="password"
          onChange={handleInputChange}
        />

        <button type="submit" className="btn-form">
          Ingresar
        </button>
        <Link to={"/register"} className="redirect">
          ¿Todavía no tienes cuenta?
        </Link>
      </form>
    </>
  );
};
