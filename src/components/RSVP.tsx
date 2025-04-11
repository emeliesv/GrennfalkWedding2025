import { useEffect, useRef, useState } from "react";
import { collection, addDoc /* Timestamp */ } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useModal } from "../context/DialogContext";
import Button from "./Button";

const RSVP = (): JSX.Element => {
  const { isOpen, closeModal } = useModal();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [attendance, setAttendance] = useState<string | null>(null);
  const [transport, setTransport] = useState<string | null>(null);
  const [allergies, setAllergies] = useState("Ja, nämligen ");
  const [comments, setComments] = useState("");
  const [guest, setGuest] = useState("");

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
      setAttendance(null);
      setAllergies("");
      setTransport(null);
      setComments("");
      setGuest("");
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
        name: guest,
        timestamp: new Date(),
        attendance: attendance,
        transport: transport,
        allergies: allergies,
        comments: comments,
      });
      console.log("Denna data ska nu finnas i Firestore!");
    } catch (error) {
      console.log("Fel vid sparande:", error);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className={`rounded-xl p-8 relative ${
        isOpen ? "flex flex-col" : "hidden"
      } items-center bg-jossanKalleSecondary shadow-md`}
    >
      <button
        onClick={closeModal}
        className="text-4xl md:text-6xl absolute right-5 top-1"
      >
        X
      </button>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col px-6 gap-3 mt-9 items-center"
      >
        <fieldset className="flex flex-col gap-2">
          <legend className="font-display text-4xl md:text-6xl text-center">
            RSVP
          </legend>

          <label
            htmlFor="guestName"
            className="flex flex-col md:flex-row gap-1 mt-4"
          >
            Namn:
            <input
              type="text"
              id="guestName"
              name="guestName"
              onChange={(event) => setGuest(event?.target.value)}
              value={guest}
              className="border-solid border-jossanKalleBrand border-[1px] w-52 px-2"
            />
          </label>

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

          <div className="flex flex-col">
            <label htmlFor="allergies">
              Allergier:{" "}
              <input
                id="allergies"
                type="text"
                value={allergies}
                onChange={(event) => setAllergies(event.target.value)}
                className="border-solid border-jossanKalleBrand border-[1px] w-52 px-2"
              />
            </label>
          </div>

          <legend>Vill du åka med buss?</legend>
          <label htmlFor="yes-all">
            <input
              id="yes-all"
              type="radio"
              name="transport"
              value="Ja, till och från vigsel"
              onChange={() => setTransport("Ja, till och från vigsel")}
              required
            />{" "}
            Ja, både till och från vigseln
          </label>
          <label htmlFor="yes-to">
            <input
              id="yes-to"
              type="radio"
              name="transport"
              value="Ja, från hotell till vigsel"
              onChange={() => setTransport("Ja, från hotell till vigsel")}
            />{" "}
            Ja, från hotell till vigseln
          </label>
          <label htmlFor="yes-from">
            <input
              id="yes-from"
              type="radio"
              name="transport"
              value="Ja, från vigsel till hotell"
              onChange={() => setTransport("Ja, från vigsel till hotell")}
            />{" "}
            Ja, från vigseln till hotell
          </label>
          <label htmlFor="no-all">
            <input
              id="no-all"
              type="radio"
              name="transport"
              value="Nej"
              onChange={() => setTransport("Nej")}
            />{" "}
            Nej, vi ordnar egen transport
          </label>
        </fieldset>

        <label htmlFor="comments">
          Övriga kommentarer:{" "}
          <textarea
            id="comments"
            value={comments}
            onChange={(event) => setComments(event.target.value)}
            className="border-solid border-jossanKalleBrand border-[1px] w-52 px-2 h-10"
          />
        </label>
        <Button type="submit" onClickFunction={closeModal}>
          Skicka svar
        </Button>
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
