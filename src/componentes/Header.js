import { useNavigate } from "react-router-dom";
import { goToProfile, goToHome } from "../routes/coordinator";

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <button onClick={() => goToHome(navigate)}>
        Ir para página inicial
      </button>

      <button onClick={() => goToProfile(navigate, "easley")}>
        Ir para página de perfil
      </button>
    </header>
  );
}

export default Header;
