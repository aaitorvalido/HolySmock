import React from 'react';

interface StepTwoProps {
  name: string;
}

export const StepMotivation: React.FC<StepTwoProps> = ({ name }) => {
  return (
    <>
      <div className="pack-warning">
        <label className="step-label" style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
          ¿SABÍAS QUE, <span style={{ color: '#dc2626' }}>{name.toUpperCase()}</span>?<br /><br />
          Ya diste el paso más difícil para dejar de fumar:<br />
          <strong>INTENTARLO.</strong>
        </label>
      </div>
      
      <div className="pack-controls" style={{ marginTop: '1rem' }}>
        
        <div style={{ width: '100%', marginBottom: '1.5rem', textAlign: 'left' }}>
          
          <div style={{ marginBottom: '12px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#111' }}>
              LO INTENTAN CADA AÑO (40%)
            </span>
            <div style={{ width: '100%', backgroundColor: '#d1d5db', height: '14px', borderRadius: '4px', overflow: 'hidden', marginTop: '4px' }}>
              <div 
                style={{ 
                  width: '40%', 
                  backgroundColor: '#dc2626', 
                  height: '100%',
                  transition: 'width 1s ease-out'
                }} 
              />
            </div>
          </div>
          
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#6b7280' }}>
              NO LO INTENTAN (60%)
            </span>
            <div style={{ width: '100%', backgroundColor: '#e5e7eb', height: '14px', borderRadius: '4px', overflow: 'hidden', marginTop: '4px' }}>
              <div style={{ width: '60%', backgroundColor: '#9ca3af', height: '100%' }} />
            </div>
          </div>

        </div>
        
        <button type="submit" className="pack-button" autoFocus>
          Continuar
        </button>
      </div>
    </>
  );
};