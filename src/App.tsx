//      ▄▄     ▄▄▄▄▄▄  ▄▄▄▄▄▄▄     ▄▄▄▄      ▄▄▄▄▄▄      ▄   ▄▄▄▄    ▄▄▄▄      ▄▄▄▄▄▄     ▄▄▄▄▄▄▄ 
//    ▄█▀▀█▄  █▀ ██   █▀▀██▀▀▀▀  ▄█▀▀████▄  █▀██▀▀▀█▄    ▀██████▀  ▄█▀▀████▄  █▀██▀▀██   █▀██▀▀▀  
//    ██  ██     ██      ██      ██    ██     ██▄▄▄█▀      ██      ██    ██     ██   ██    ██     
//    ██▀▀██     ██      ██      ██    ██     ██▀▀█▄       ██      ██    ██     ██   ██    ████   
//  ▄ ██  ██     ██      ██      ██    ██   ▄ ██  ██       ██      ██    ██   ▄ ██   ██    ██     
//  ▀██▀  ▀█▄█ ▄▄██▄▄    ▀██▄     ▀████▀    ▀██▀  ▀██▀     ▀█████   ▀████▀    ▀██▀███▀     ▀█████ 
                                                                                               
                                                                                               


import { useState } from 'react';
import { WelcomeScreen } from './shared/components/WelcomeScreen'; 
import { OnboardingFlow } from './shared/components/OnboardingFlow'; 
import { AnatomyTracker } from './human/components/AnatomyTracker'; 
import { FinalMessage } from './shared/components/FinalMessage'; 

export const App = () => {
  const [currentView, setCurrentView] = useState<'welcome' | 'onboarding' | 'anatomy' | 'final'>('welcome');

  return (
    <div style={{ width: '100%', minHeight: '100vh', margin: 0, padding: 0, position: 'relative' }}>
      
      {currentView === 'welcome' && (
        <WelcomeScreen onStart={() => setCurrentView('onboarding')} />
      )}

      {currentView === 'onboarding' && (
        <OnboardingFlow onComplete={() => setCurrentView('anatomy')} />
      )}

      {currentView === 'anatomy' && (
        <AnatomyTracker onComplete={() => setCurrentView('final')} />
      )}

      {currentView === 'final' && (
        <FinalMessage onRestart={() => setCurrentView('welcome')} />
      )}

    </div>
  );
};