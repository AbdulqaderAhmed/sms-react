import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRouter({ component: Component }) {
  const { user } = useSelector((state) => state.auth);

  if (user) return <Component />;

  return <Navigate to="/login" />;
}
