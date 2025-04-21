import { useEffect, useRef, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
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
  const [formSubmit, setFormSubmit] = useState(false);

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

  const handleClose = () => {
    setFormSubmit(false);
    closeModal();
  };

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
      setFormSubmit(true);
    } catch (error) {
      console.log("Fel vid sparande:", error);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className={`rounded-xl p-8 relative flex flex-col items-center bg-jossanKalleSecondary shadow-md ${
        !isOpen && "hidden"
      }`}
    >
      <button
        onClick={closeModal}
        className="text-2xl md:text-4xl absolute right-5 top-1"
      >
        X
      </button>
      {formSubmit ? (
        <div className="flex flex-col gap-2 max-w-80">
          <h3 className="font-display text-3xl">Tack för ditt svar!</h3>
          <p className="text-l">
            Här kommer en bekräftelse på vad ni svarat. Om något blivit fel,
            vänligen maila josefinkalle2025@gmail.com så kikar vi på det så fort
            vi kan!
          </p>
          <h4 className="font-bold text-xl">Ni har svarat:</h4>
          <ul>
            <li>
              <b>Namn: </b>
              {guest}
            </li>
            <li>
              <b>Kommer: </b>
              {attendance}
            </li>
            <li>
              <b>Allergier: </b>
              {allergies}
            </li>
            <li>
              <b>Behöver ni transport? </b>
              {transport}
            </li>
            <li>
              <b>Övriga kommentarer: </b>
              {comments}
            </li>
          </ul>
          <Button type="button" onClickFunction={handleClose}>
            Stäng
          </Button>
        </div>
      ) : (
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
                required
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
              Ja! Jag/vi kommer!
            </label>
            <label htmlFor="attendance-no">
              <input
                id="attendance-no"
                type="radio"
                name="attendance"
                value="Nej"
                onChange={() => setAttendance("Nej")}
              />{" "}
              Tyvärr har jag/vi inte möjlighet att komma
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

            <legend>Vill ni åka med buss?</legend>
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
          <Button type="submit">Skicka svar</Button>
        </form>
      )}
    </dialog>
  );
};

export default RSVP;
