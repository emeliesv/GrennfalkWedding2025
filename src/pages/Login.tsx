import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";

type User = {
  email: string;
  password: string;
};

const Login = (): JSX.Element => {
  const [user, setUser] = useState<User>({
    email: "emeliesv@live.se",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, user.email, user.password);
      navigate("/start");
    } catch (error) {
      console.log("Fel vid inlogg:", error);
      alert("Fel lösenord, prova igen");
    }
  };

  return (
    <main className="bg-jossanKalleSecondary flex flex-col justify-center items-center h-screen">
      <h1 className="font-display text-6xl text-jossanKalleBrand m-4">
        Välkommen
      </h1>
      <h2 className="font-display text-4xl text-jossanKalleBrand">
        Josefin + Kalle 2025
      </h2>

      <p className="text-center max-w-80 m-5">
        Vänligen logga in för att se all info. Ni hittar lösenord på er
        inbjudan.
      </p>
      <form onSubmit={handleLogin} className="flex flex-col m-5">
        <label htmlFor="guestPassword">Lösenord:</label>
        <input
          id="guestPassword"
          type="password"
          value={user.password}
          onChange={(event) =>
            setUser({ ...user, password: event.target.value })
          }
          className="mb-5 rounded-md border-black border-[1px]"
        />

        <Button type="submit">Logga in</Button>
      </form>
    </main>
  );
};

export default Login;
