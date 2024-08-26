import Image from "next/image";
import ImageViewer from "./ImageViewer";

type PhotosTabPanelProps = {
  photos: string[];
  openImage: (photo: string) => void;
  selectedImage: string | null;
  closeImage: () => void;
};

const PhotosTabPanel = ({
  photos,
  openImage,
  selectedImage,
  closeImage,
}: PhotosTabPanelProps) => {
  return (
    <div className="p-[20px] bg-white rounded-lg shadow">
      <div className="flex">
        <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(136px,_1fr))] gap-5">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              className="relative cursor-pointer w-[136px] h-[136px]"
              onClick={() => openImage(photo)}
            >
              <Image
                width={136}
                height={136}
                src={photo}
                alt={`Friend photo ${idx + 1}`}
                className="object-cover h-[136px] w-[136px] rounded"
              />
            </div>
          ))}
          <ImageViewer imageSrc={selectedImage} onClose={closeImage} />
        </div>
      </div>
    </div>
  );
};

export default PhotosTabPanel;
