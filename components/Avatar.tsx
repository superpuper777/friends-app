"use client";

import Image from "next/image";

type AvatarProps = {
  size?: number;
  className?: string;
  image: string;
};

const Avatar: React.FC<AvatarProps> = ({
  size = 50,
  className = "",
  image,
}) => {
  return (
    <div className="rounded relative" style={{ width: size, height: size }}>
      <Image
        src={image}
        alt="Profile Picture"
        width={size}
        height={size}
        className={`object-cover rounded ${className}`}
      />
    </div>
  );
};

export default Avatar;
