import { StaticImageData } from "next/image";
import Image from "next/image";

type ButtonProps = {
  iconSrc: StaticImageData;
  iconAlt: string;
  onClick?: () => void;
  className?: string;
};

const IconButton = ({ iconSrc, iconAlt, onClick, className }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${className}`}>
      <Image src={iconSrc} alt={iconAlt} width={25} height={25} />
    </button>
  );
};

export default IconButton;
