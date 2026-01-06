import { useNavigate } from "react-router-dom";

function Button({ children, to }) {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  return <button onClick={() => handleNavigate(to)}>{children}</button>;
}

export default Button;
