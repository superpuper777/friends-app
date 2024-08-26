import InfoBlock from "./InfoBlock";

type InfoTabPanelProps = {
  info: { label: string; value: string }[];
};

const InfoTabPanel = ({ info }: InfoTabPanelProps) => {
  return (
    <div className="p-[28px] bg-white rounded-lg shadow">
      {info.map((item, index) => (
        <InfoBlock
          key={index}
          label={item.label}
          value={item.value}
          type={index === 0 ? "bio" : index === 1 ? "phone" : "default"}
        />
      ))}
    </div>
  );
};

export default InfoTabPanel;
