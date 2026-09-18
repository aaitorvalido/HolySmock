import React from "react";

interface Props {
  years: string;
  cigs: string;
  cost: string;
  packSize: string;
}

export const StepResult: React.FC<Props> = ({ years, cigs, cost, packSize }) => {
  const totalCigs = Number(years) * 365 * Number(cigs);
  const totalPacks = totalCigs / Number(packSize);
  const totalSpent = totalPacks * Number(cost);

  const formattedMoney = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(totalSpent);

  return (
    <>
      <div className="pack-warning fade-in">
        <label
          className="step-label"
          style={{ fontSize: "0.9rem", lineHeight: "1.4" }}
        >
          ESTO TE VA A DOLER ECONÓMICAMENTE...
          <br />
          <br />
          Desde que empezaste a fumar, has quemado literalmente:
          <br />
          <span
            style={{
              fontSize: "1.5rem",
              color: "#dc2626",
              display: "block",
              margin: "10px 0",
            }}
          >
            {formattedMoney}
          </span>
          Piensa en todo lo que podrías haber comprado con eso.
        </label>
      </div>
      <div className="pack-controls">
        <button type="submit" className="pack-button">
          Recuperar mi dinero
        </button>
      </div>
    </>
  );
};
