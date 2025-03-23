import { useEffect, useRef, useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useModal } from "../context/DialogContext";
import Button from "./Button";

const RSVP = (): JSX.Element => {
  const { isOpen, closeModal } = useModal();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [attendance, setAttendance] = useState<string | null>(null);
  const [allergies, setAllergies] = useState("Ja, nämligen ");
  const [comments, setComments] = useState("");

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!attendance) {
      alert("Vänligen fyll i om du kommer eller inte.");
      return;
    }

    try {
      await addDoc(collection(db, "attendanceCollection"), {
        name: "Test Testsson",
        timestamp: new Date(),
        attendance: attendance,
        allergies: allergies,
        comments: comments,
      });
      console.log("Denna data ska nu finnas i Firestore!");
    } catch (error) {
      console.log("Fel vid sparande:", error);
    }
  };

  return (
    <dialog ref={dialogRef} className="rounded-xl">
      <Button type="button" onClickFunction={closeModal}>
        X
      </Button>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className="font-display text-6xl">RSVP</legend>
          <label>
            <input
              type="radio"
              name="attendance"
              value="Ja"
              onChange={() => setAttendance("Ja")}
              required
            />{" "}
            Räkna med mig, jag kommer!
          </label>
          <label>
            <input
              type="radio"
              name="attendance"
              value="Nej"
              onChange={() => setAttendance("Nej")}
            />{" "}
            Tyvärr har jag inte möjlighet att komma
          </label>
        </fieldset>

        <label>
          Allergier:
          <input
            type="text"
            value={allergies}
            onChange={(event) => setAllergies(event.target.value)}
          />
        </label>

        <label>
          ÖVriga kommentarer:
          <textarea
            value={comments}
            onChange={(event) => setComments(event.target.value)}
          />
        </label>
        <Button type="submit">RSVP</Button>
      </form>
    </dialog>
  );
};

export default RSVP;
/* const emailBody = `
    Närvaro: ${attendance}
    Allergier: ${allergies}
    Övriga kommentarer: ${comments}`;

    const mailToLink = `mailto:emeliesv@live.se?subject=RSVP Svar&body=${encodeURIComponent(
      emailBody
    )}`;

    window.location.href = mailToLink; */
