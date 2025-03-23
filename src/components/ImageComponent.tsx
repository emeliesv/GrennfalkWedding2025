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
  const sizeClasses = {
    xsmall: "w-24",
    small: "w-40",
    medium: "w-52",
    large: "w-64",
  };

  return (
    <img
      className={`object-contain ${sizeClasses[size]} ${customClass}`}
      src={srcUrl}
      alt={altText}
      aria-hidden={hidden}
    />
  );
};

export default Image;
