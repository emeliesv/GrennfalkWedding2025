import { ReactNode, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  open?: boolean;
  title: string;
  children: ReactNode;
}

const Expandable: React.FC<IProps> = ({ open, children, title }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col w-full">
      <button
        type="button"
        onClick={handleFilterOpening}
        className="flex justify-between text-bodys md:text-bodyregular font-semibold py-3"
      >
        {title}
        {!isOpen ? (
          <FontAwesomeIcon icon={faChevronDown} />
        ) : (
          <FontAwesomeIcon icon={faChevronUp} />
        )}
      </button>
      <div>{isOpen && children}</div>
    </div>
  );
};

export default Expandable;
