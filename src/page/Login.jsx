import { Card } from "../components/Card";

const loginUser = () => {
  console.log("login");
};

export const Login = () => {
  return (
    <div>
      <Card functionAction={loginUser}></Card>
    </div>
  );
};
