import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

type User = {
  email: string;
  password: string;
};

const AdminLogin = () => {
  const [user, setUser] = useState<User>({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, user.email, user.password);
      navigate("/admin");
    } catch (error) {
      console.log("Fel vid inlogg:", error);
      alert("Fel epost eller lösen");
    }
  };

  return (
    <fieldset>
      <legend>Admin login</legend>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">E-post: </label>
        <input
          id="email"
          type="email"
          value={user.email}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        />
        <label htmlFor="password">Lösenord: </label>
        <input
          id="password"
          type="password"
          value={user.password}
          onChange={(event) =>
            setUser({ ...user, password: event.target.value })
          }
        />
        <button type="submit">Logga in</button>
      </form>
    </fieldset>
  );
};

export default AdminLogin;
