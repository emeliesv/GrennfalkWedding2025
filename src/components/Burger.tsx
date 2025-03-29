type BurgerProps = {
  isOpen: boolean;
};

export const Burger = ({ isOpen }: BurgerProps) => {
  return (
    <div className="w-auto h-6 flex flex-col justify-around items-center cursor-pointer relative mt-2">
      <div
        className={`w-6 h-[2px] rounded-lg bg-gray-950 ${
          isOpen && `transform rotate-45 absolute`
        }`}
      />
      <div
        className={`w-6 h-[2px] rounded-lg bg-gray-950  ${isOpen && `hidden`}`}
      />
      <div
        className={`w-6 h-[2px] rounded-lg bg-gray-950  ${
          isOpen && `transform -rotate-45 absolute`
        }`}
      />
    </div>
  );
};
