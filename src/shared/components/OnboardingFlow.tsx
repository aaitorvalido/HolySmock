import React, { useState, useEffect } from 'react';
import { StepName } from './StepName';
import { StepMotivation } from './StepMotivation'; 
import { StepQuestion } from './StepQuestion'; 
import { StepCost } from './StepCost';            
import '../../styles/CigarettePack.css';
import { SmokeBackground } from '../../effects/SmokeBackground';
import { StepResult } from './StepResult';

interface OnboardingProps {
  onComplete: () => void;
}

export const OnboardingFlow: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  
  const [name, setName] = useState('');
  const [years, setYears] = useState('');
  const [cigs, setCigs] = useState('');
  const [cost, setCost] = useState('');
  const [packSize, setPackSize] = useState('');

  useEffect(() => {
    if (isOpen) {
      const audio = new Audio('/open-box.mp3');
      audio.volume = 0.5;
      audio.play().catch((error) => console.log("Audio bloqueado:", error));
    }
  }, [isOpen]);

  const nextStep = () => setStep((prev) => prev + 1);

  const handleGlobalSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (step === 1 && name.trim() === '') return;
    if (step === 3 && years.trim() === '') return;
    if (step === 4 && cigs.trim() === '') return;
    if (step === 5 && (cost.trim() === '' || packSize.trim() === '')) return;
    if (step === 6) {
      onComplete();
      return; 
    }
    
    nextStep();
  };

  return (
    <div className="onboarding-wrapper">
      <SmokeBackground />
      <div className="onboarding-card">
        <div className={`cigarette-pack fade-in ${isOpen ? 'is-open' : ''}`}>
          
          <div className="pack-inside">
            <div className="cig"></div><div className="cig"></div>
            <div className="cig"></div><div className="cig"></div>
            <div className="cig"></div><div className="cig"></div>
            <div className="cig"></div><div className="cig"></div>
          </div>

          <div className="pack-lid">
            <h2 className="pack-brand">HOLYSMOKE</h2>
          </div>
          
          <div className="pack-body">
            <form onSubmit={handleGlobalSubmit} style={{ width: '100%', height: '100%' }}>
              
              {step === 1 && (
                <StepName 
                  name={name} 
                  setName={setName} 
                  setIsOpen={setIsOpen} 
                />
              )}
              
              {step === 2 && (
                <StepMotivation name={name} />
              )}
              
              {step === 3 && (
                <StepQuestion 
                  question="¿CUÁNTOS AÑOS LLEVAS FUMANDO?" 
                  placeholder="Ej: 5" 
                  value={years} 
                  setValue={setYears} 
                  inputType="number" 
                />
              )}
              
              {step === 4 && (
                <StepQuestion 
                  question="¿CUÁNTOS CIGARROS FUMAS AL DÍA?" 
                  placeholder="Ej: 10" 
                  value={cigs} 
                  setValue={setCigs} 
                  inputType="number" 
                />
              )}
              
              {step === 5 && (
                <StepCost 
                  cost={cost} 
                  setCost={setCost} 
                  packSize={packSize} 
                  setPackSize={setPackSize} 
                />
              )}
              
              {step === 6 && (
                <StepResult 
                  years={years} 
                  cigs={cigs} 
                  cost={cost} 
                  packSize={packSize} 
                />
              )}
              
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};