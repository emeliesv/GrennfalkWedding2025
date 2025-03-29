import { FC } from "react";

interface ButtonProps {
  onClickFunction?: () => void;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  onClickFunction,
  type = "button",
  children,
  disabled,
}) => {
  return (
    <button
      className="px-5 py-2 w-80 text-btnText rounded-full font-display bg-jossanKalleBrand hover:bg-jossanKalleNeutralDark text-jossanKalleSecondary"
      type={type}
      onClick={onClickFunction}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
