import React from "react";

interface Props {
  question: string;
  placeholder: string;
  value: string;
  setValue: (v: string) => void;
  inputType?: "text" | "number";
}

export const StepQuestion: React.FC<Props> = ({
  question,
  placeholder,
  value,
  setValue,
  inputType = "text",
}) => (
  <>
    <div className="pack-warning">
      <label className="step-label">{question}</label>
    </div>
    <div className="pack-controls">
      <input
        autoFocus
        type={inputType}
        min={inputType === "number" ? "0" : undefined}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="pack-input"
      />
      <button type="submit" disabled={!value.trim()} className="pack-button">
        Siguiente
      </button>
    </div>
  </>
);
