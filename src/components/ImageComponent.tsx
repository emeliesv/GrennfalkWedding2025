import { useMediaQuery } from "react-responsive";

interface ImageProps {
  srcUrl: string;
  altText: string;
  hidden?: boolean;
  size?: "xsmall" | "small" | "medium" | "large";
  customClass?: string;
}

const Image: React.FC<ImageProps> = ({
  srcUrl,
  altText,
  hidden,
  size = "medium",
  customClass,
}) => {
  const isLargeScreen = useMediaQuery({ minWidth: 768 });
  const sizeClasses = {
    xsmall: isLargeScreen ? "w-24" : "w-12",
    small: isLargeScreen ? "w-40" : "h-24",
    medium: "w-52",
    large: "w-64",
  };

  return (
    <img
      className={`object-contain ${sizeClasses[size]} ${customClass || ""}`}
      src={srcUrl}
      alt={altText}
      aria-hidden={hidden}
    />
  );
};

export default Image;
