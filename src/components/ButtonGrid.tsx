import React, { useState } from "react";
import { Button } from "./Button";
import { evaluate } from "mathjs";

interface ButtonsGridProps {
  setExpression: React.Dispatch<React.SetStateAction<string>>;
  setResult: React.Dispatch<React.SetStateAction<string>>;
}
interface ButtonData {
  label: string;
  className?: string;
}
const buttons: ButtonData[] = [
  { label: "C", className: "clear" },
  { label: "AC", className: "clear-all" },
  { label: "%", className: "operator" },
  { label: "÷", className: "operator" },
  { label: "7" },
  { label: "8" },
  { label: "9" },
  { label: "×", className: "operator" },
  { label: "4" },
  { label: "5" },
  { label: "6" },
  { label: "−", className: "operator" },
  { label: "1" },
  { label: "2" },
  { label: "3" },
  { label: "+", className: "operator" },
  { label: "0" },
  { label: "." },
  { label: "=", className: "equals" },
];

export const ButtonGrid = ({ setExpression, setResult }: ButtonsGridProps) => {
  const [expression, updateExpression] = useState<string>("");

  const parseExpression = (input: string): string => {
    return input
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/−/g, "-")
      .replace(/%/g, "/100");
  };

  const handleClick = (label: string) => {
    if (label === "AC") {
      updateExpression("");
      setExpression("");
      setResult("");
    } else if (label === "C") {
      const clearOne = Array.from(expression);
      console.log("array from expression", clearOne);
      clearOne.pop();
      setExpression(clearOne.join("").toString());
      updateExpression(clearOne.join("").toString());
      setResult("");
    } else if (label === "=") {
      try {
        const parsed = parseExpression(expression);
        const evalResult = evaluate(parsed);
        setResult(evalResult.toString());
      } catch {
        setResult("Error");
      }
    } else {
      console.log("Expression", expression);
      const newExpr = expression + label;
      updateExpression(newExpr);
      setExpression(newExpr);
    }
  };

  return (
    <div className="buttons">
      {buttons.map((btn) => (
        <Button
          key={btn.label}
          label={btn.label}
          className={btn.className}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};
