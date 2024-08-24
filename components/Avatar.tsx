"use client";

import Image from "next/image";

type AvatarProps = {
  size?: number;
  className?: string;
  image?: string | null;
};

const Avatar: React.FC<AvatarProps> = ({
  size = 50,
  className = "",
  image,
}) => {
  return (
    <div className={`${className}`}>
      {
        <Image
          src={image || ""}
          alt="Profile Picture"
          width={size}
          height={size}
          className="object-cover"
        />
      }
    </div>
  );
};

export default Avatar;
