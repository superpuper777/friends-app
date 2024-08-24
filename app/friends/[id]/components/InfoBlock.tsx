type InfoBlockProps = {
  label: string;
  value: string;
  type: "bio" | "phone" | "default";
};

const InfoBlock = ({ label, value, type = "default" }: InfoBlockProps) => {
  const getClasses = (type: InfoBlockProps["type"]) => {
    switch (type) {
      case "bio":
        return {
          container: "flex flex-col gap-[10px] mb-[28px]",
          label: "text-main-gray",
          value: "text-txt-black",
        };
      case "phone":
        return {
          container: "flex border-y border-main-gray-50 py-[28px] mb-[28px]",
          label: "text-main-gray flex-1",
          value: "text-txt-black flex-1",
        };
      default:
        return {
          container: "flex",
          label: "text-main-gray flex-1",
          value: "text-txt-black flex-1",
        };
    }
  };

  const { container, label: labelClass, value: valueClass } = getClasses(type);

  return (
    <div className={container}>
      <h3 className={labelClass}>{label + ":"}</h3>
      <p className={valueClass}>{value}</p>
    </div>
  );
};

export default InfoBlock;
