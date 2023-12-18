import { Navigate } from "react-router-dom";

export function ProtectecRouter({ children }) {
  const hasToken = !!localStorage.getItem("galerytok");
  if (!hasToken) {
    return <Navigate to={"/login"} />;
  }

  return <>{children}</>;
}
