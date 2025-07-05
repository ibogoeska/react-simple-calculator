interface DisplayProps {
  expression: string;
  result: string;
}

export const Display = ({ expression, result }: DisplayProps) => {
  return (
    <>
      <div className="display">{expression}</div>
      <div className="result">{result}</div>
    </>
  );
};
