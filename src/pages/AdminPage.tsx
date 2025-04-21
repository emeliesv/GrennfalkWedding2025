import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";

type Attendance = {
  name: string;
  allergies: string;
  comments: string;
  timestamp: number;
  transport: string;
  attendance: string;
};

const AdminPage = () => {
  const { currentUser, loading, logout } = useAuth();
  const [result, setResult] = useState<Attendance[]>([]);

  const navigate = useNavigate();

  const handleLogOut = async () => {
    await logout();
    navigate("/");
  };

  const getCollection = async () => {
    const q = query(collection(db, "attendanceCollection"));
    const querySnapshot = await getDocs(q);
    let attendanceRes: Attendance[] = [];
    querySnapshot.forEach((doc) => {
      const att = doc.data() as Attendance;
      attendanceRes.push(att);
    });
    setResult(attendanceRes);
  };

  useEffect(() => {
    getCollection();
  }, []);

  return (
    <section className=" bg-jossanKalleSecondary min-h-screen flex flex-col justify-evenly">
      {loading && <p>laddar...</p>}
      <div className="flex flex-col w-full items-end px-10">
        <h3>Det här är en adminsida</h3>
        <p>{currentUser?.email} är inloggad</p>
        <button onClick={handleLogOut} className="hover:font-bold">
          Logga ut
        </button>
      </div>

      <div>
        <h3 className="font-display text-3xl px-10">Närvarolista:</h3>
        <ul className="flex flex-col gap-4">
          {result.map((res) => {
            return (
              <li
                key={res.timestamp}
                className="flex flex-col border-t-[1px] border-black px-10 py-2"
              >
                <h3 className="text-lg font-bold text-jossanKalleBrand">
                  Namn: {res.name}
                </h3>
                <div className="flex">
                  <p className="font-semibold">Har svarat:</p>
                  <p>{res.attendance}</p>
                </div>
                <div className="flex">
                  <p className="font-semibold">Allergier:</p>
                  <p>{res.allergies}</p>
                </div>
                <div className="flex">
                  <p className="font-semibold">Transport:</p>
                  <p>{res.transport}</p>
                </div>
                <div className="flex">
                  <p className="font-semibold">Övriga kommentarer:</p>
                  <p> {res.comments}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="px-10">
        <Button onClickFunction={handleLogOut}>Logga ut</Button>
      </div>
    </section>
  );
};

export default AdminPage;
