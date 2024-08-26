import Image from "next/image";
import IconButton from "@/components/IconButton";
import closeIcon from "@/public/images/close.svg";

type ImageViewerProps = {
  imageSrc: string | null;
  onClose: () => void;
};
const ImageViewer = ({ imageSrc, onClose }: ImageViewerProps) => {
  if (!imageSrc) return null;
  return (
    <div className="relative">
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
        <div className="relative min-w-[460px] min-h-[680px] rounded shadow-lg">
          <Image
            src={imageSrc}
            alt="Selected image"
            fill={true}
            className="absolute rounded object-contain"
          />
        </div>
        <IconButton
          iconSrc={closeIcon}
          iconAlt="Close"
          onClick={onClose}
          className="p-[10px] bg-white bg-opacity-10 rounded-lg absolute xl:right-[60px] xl:top-[60px] xs:right-[20px] xs:top-[30px]"
        />
      </div>
    </div>
  );
};

export default ImageViewer;
