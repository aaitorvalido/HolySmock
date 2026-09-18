import React from 'react';
import Spline from '@splinetool/react-spline';
import '../../styles/WelcomeScreen.css';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="welcome-wrapper" style={{ width: '100vw', height: '100vh', backgroundColor: '#111' }}>
      
      <div className="spline-container" style={{ width: '100%', height: '100%' }}>
        <Spline scene="https://prod.spline.design/bYsp9M7FVdEscfQt/scene.splinecode" />
      </div>

      <div className="start-button-container">
        <button className="start-btn" onClick={onStart}>
          Empezar
        </button>
      </div>
      
    </div>
  );
};