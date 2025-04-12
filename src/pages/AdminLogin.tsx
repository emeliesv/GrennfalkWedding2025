import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

type User = {
  email: string;
  password: string;
};

/* HÄR ÄR DET NÅGOT KNAS MED INLOGG: Klagar på api-nyckel. Kolla med chat */

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
    <main className="flex justify-center py-40">
      <fieldset className="border-jossanKalleBrand border-[1px] w-80">
        <legend>Admin login</legend>
        <form onSubmit={handleLogin} className="flex flex-col p-10 gap-8">
          <label htmlFor="email">E-post: </label>
          <input
            id="email"
            type="email"
            value={user.email}
            onChange={(event) =>
              setUser({ ...user, email: event.target.value })
            }
            className="border-jossanKalleBrand border-[1px] p-2"
          />
          <label htmlFor="password">Lösenord: </label>
          <input
            id="password"
            type="password"
            value={user.password}
            onChange={(event) =>
              setUser({ ...user, password: event.target.value })
            }
            className="border-jossanKalleBrand border-[1px] p-2"
          />
          <button
            type="submit"
            className=" min-w-60 bg-jossanKalleBrand rounded-full font-display text-jossanKalleSecondary text-2xl py-6"
          >
            Logga in
          </button>
        </form>
      </fieldset>
    </main>
  );
};

export default AdminLogin;
