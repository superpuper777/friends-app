type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      className="px-5 py-2 text-white bg-blue-50 border border-blue-60 rounded"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

