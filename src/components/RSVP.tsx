import { useEffect, useRef, useState } from "react";
import { collection, addDoc /* Timestamp */ } from "firebase/firestore";
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

  /* Lägga till radioknappar för transport:
  Ja: till och från vigsel och hotell
  Ja: till vigsel enbart
  Ja: till hotell enbart
  Nej */

  return (
    <dialog ref={dialogRef} className="rounded-xl">
      <button onClick={closeModal} className="text-4xl md:text-6xl">
        X
      </button>
      <form onSubmit={handleSubmit} className="px-6">
        <fieldset className="flex flex-col">
          <legend className="font-display text-4xl md:text-6xl text-center">
            RSVP
          </legend>
          <label htmlFor="attendance-yes">
            <input
              id="attendance-yes"
              type="radio"
              name="attendance"
              value="Ja"
              onChange={() => setAttendance("Ja")}
              required
            />{" "}
            Räkna med mig, jag kommer!
          </label>
          <label htmlFor="attendance-no">
            <input
              id="attendance-no"
              type="radio"
              name="attendance"
              value="Nej"
              onChange={() => setAttendance("Nej")}
            />{" "}
            Tyvärr har jag inte möjlighet att komma
          </label>
        </fieldset>

        <label htmlFor="allergies">
          Allergier:
          <input
            id="allergies"
            type="text"
            value={allergies}
            onChange={(event) => setAllergies(event.target.value)}
          />
        </label>

        <label htmlFor="comments">
          Övriga kommentarer:
          <textarea
            id="comments"
            value={comments}
            onChange={(event) => setComments(event.target.value)}
          />
        </label>
        <Button type="submit">Skicka svar</Button>
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
