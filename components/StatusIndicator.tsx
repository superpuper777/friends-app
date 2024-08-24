type StatusIndicatorProps = {
  available: boolean;
};

const StatusIndicator = ({ available }: StatusIndicatorProps) => {
  return (
    <span
      className={`absolute top-[-4px] left-[-4px] block w-3 h-3 ${
        available ? "bg-status-green" : "bg-status-bg-gray"
      } border-2 border-white rounded-full`}
    ></span>
  );
};

export default StatusIndicator;
