import { Link } from "react-router-dom";
import "./Card.scss";
import PropTypes from "prop-types";

export const Card = ({
  title = "Iniciar Sesión",
  buttonName = "Ingresar",
  messageRedirect = "¿Todavía no tienes cuenta ?",
  redirect = "/register",
  functionAction,
}) => {
  const actionButton = (e) => {
    e.preventDefault();
    functionAction();
  };

  return (
    <>
      <form className="form" onSubmit={actionButton}>
        <h2>{title}</h2>
        <input
          type="text"
          placeholder="Ingresar correo"
          className="input-form"
        />
        <input
          type="text"
          placeholder="Ingresar contraseña"
          className="input-form"
        />

        <button type="submit" className="btn-form">
          {buttonName}
        </button>
        <Link to={redirect} className="redirect">
          {messageRedirect}
        </Link>
      </form>
    </>
  );
};
Card.propTypes = {
  title: PropTypes.string,
  buttonName: PropTypes.string,
  messageRedirect: PropTypes.string,
  redirect: PropTypes.string,
  functionAction: PropTypes.func,
};
