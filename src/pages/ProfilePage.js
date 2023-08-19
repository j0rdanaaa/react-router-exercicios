import { useParams } from "react-router-dom";
import Header from "../componentes/Header";

function ProfilePage() {
  const params = useParams();

  return (
    <section>
      <Header/>
      <h1>Página de perfil {`${params.name}`}</h1>
    </section>
  );
}

export default ProfilePage;
