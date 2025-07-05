interface ButtonProps {
  label: string;
  className?: string;
  onClick: (label: string) => void;
}

export const Button = ({ label, className = "", onClick }: ButtonProps) => {
  return (
    <button className={className} onClick={() => onClick(label)}>
      {label}
    </button>
  );
};
