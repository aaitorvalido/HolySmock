import React from "react";

interface Props {
  cost: string;
  setCost: (v: string) => void;
  packSize: string;
  setPackSize: (v: string) => void;
}

export const StepCost: React.FC<Props> = ({
  cost,
  setCost,
  packSize,
  setPackSize,
}) => (
  <>
    <div className="pack-warning">
      <label className="step-label" style={{ fontSize: "0.85rem" }}>
        TU CAJETILLA HABITUAL...
        <br />
        ¿CUÁNTO CUESTA Y CUÁNTOS TRAE?
      </label>
    </div>
    <div className="pack-controls">
      <input
        autoFocus
        type="number"
        step="0.1"
        min="0"
        placeholder="Precio (Ej: 3.70)"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        className="pack-input"
        style={{ marginBottom: "8px" }}
      />
      <input
        
        type="number"
        min="1"
        placeholder="Cigarros que trae (Ej: 24)"
        value={packSize}
        onChange={(e) => setPackSize(e.target.value)}
        className="pack-input"
      />
      <button
        type="submit"
        disabled={!cost || !packSize}
        className="pack-button"
      >
        Siguiente
      </button>
    </div>
  </>
);
