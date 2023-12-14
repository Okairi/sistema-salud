import { Card } from "../components/Card";

const registerUser = () => {
  console.log("registrado");
};
export const Register = () => {
  return (
    <div>
      <Card
        title="Registro de usuario"
        messageRedirect="¿Ya tienes cuenta ?"
        redirect="/login"
        buttonName="Registrar"
        functionAction={registerUser}
      ></Card>
    </div>
  );
};
