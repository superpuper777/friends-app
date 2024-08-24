type StatusProps = {
  status: string;
};

const Status = ({ status }: StatusProps) => {
  return (
    <span className="subtitle border border-main-gray rounded-[20px] px-2 py-0.5 text-center inline-block max-w-max whitespace-nowrap">
      {status}
    </span>
  );
};

export default Status;
