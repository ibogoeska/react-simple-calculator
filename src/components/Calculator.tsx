import { useState } from "react";
import { Display } from "./Display";
import { ButtonGrid } from "./ButtonGrid";
import "../styles/Calculator.scss";

export const Calculator = () => {
  const [expression, setExpression] = useState<string>("");
  const [result, setResult] = useState<string>("");

  return (
    <div className="calculator">
      <Display expression={expression} result={result} />
      <ButtonGrid setExpression={setExpression} setResult={setResult} />
    </div>
  );
};
