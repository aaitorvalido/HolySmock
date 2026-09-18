import React from 'react';

interface StepNameProps {
  name: string;
  setName: (name: string) => void;
  setIsOpen: (isOpen: boolean) => void;
}

export const StepName: React.FC<StepNameProps> = ({ name, setName, setIsOpen }) => {
  return (
    <>
      <div className="pack-warning">
        <label className="step-label">
          DIME,<br />¿CÓMO TE GUSTARÍA QUE TE LLAME?
        </label>
      </div>
      
      <div className="pack-controls">
        <img className='pack-svg-icon' src='notSmoke.svg' alt='SVG de prohibido fumar'/>
        
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tu nombre..."
          className="pack-input"
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
        />
        
        <button
          type="submit"
          disabled={!name.trim()} 
          className="pack-button"
        >
          Siguiente
        </button>
      </div>
    </>
  );
};