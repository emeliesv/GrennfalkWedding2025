import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const { currentUser, loading, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogOut = async () => {
    await logout();
    navigate("/");
  };

  return (
    <section>
      {loading && <p>laddar...</p>}
      <h3>Det här är en adminsida</h3>
      <p>{currentUser?.email} är inloggad</p>
      <Button onClickFunction={handleLogOut}>Logga ut</Button>
    </section>
  );
};

export default AdminPage;
