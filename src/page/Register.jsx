import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { errorMessages } from "../helpers/Messages";
import { succesAlert, errorAlert } from "../alerts/Alerts";
export const Register = () => {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [isRegister, setisRegister] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setuser((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    setisRegister(true);
    signUp(user.email, user.password)
      .then((x) => {
        setisRegister(false);
        succesAlert("Registrado correctamente");
        navigate("/login");
      })
      .catch((err) => {
        errorAlert(
          errorMessages[err.code] ||
            "Ocurrió un error, vuelva a intentar en unos minutos"
        );
        setisRegister(false);
      });
  };

  return (
    <>
      <form className="form" onSubmit={submitForm}>
        <h2>Registro de sesión </h2>
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

        <button type="submit" className="btn-form" disabled={isRegister}>
          {isRegister ? "Registrando" : "Registrar"}
        </button>
        <Link to={"/login"} className="redirect">
          ¿Ya tienes cuenta?
        </Link>
      </form>
    </>
  );
};
