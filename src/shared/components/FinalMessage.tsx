import React, { useEffect } from 'react'; // <-- 1. Añadimos useEffect
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import '../../styles/FinalMessage.css';

ChartJS.register(ArcElement, Tooltip, Legend);


const IconTimer = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const IconDrop = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>;
const IconWind = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"/><path d="M17.5 8a2.5 2.5 0 1 0 2-4H2"/><path d="M9.8 4.4A2 2 0 1 1 11 8H2"/></svg>;
const IconActivity = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>;
const IconSmile = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>;
const IconSparkle = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>;
const IconZap = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;

interface FinalMessageProps {
  onRestart: () => void;
}

export const FinalMessage: React.FC<FinalMessageProps> = ({ onRestart }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const chartData = {
    labels: ['No fuman (78%)', 'Fuman (22%)'],
    datasets: [
      {
        data: [78, 22],
        backgroundColor: ['#2f6a86', '#c1622b'],
        borderColor: ['#0b0f0d', '#0b0f0d'],
        borderWidth: 4,
      },
    ],
  };

  const chartOptions = {
    cutout: '72%',
    plugins: {
      legend: { 
        position: 'bottom' as const, 
        labels: { color: '#c6bfae', font: { family: 'Work Sans', size: 14 }, padding: 20 } 
      },
    },
  };

  return (
    <div className="final-wrapper">
      <div className="final-content fade-in">
        
        <header className="final-header">
          <h1>No estás solo en esto</h1>
          <div className="final-rule"></div>
          <p className="final-lede">
            HolySmoke ha sido creada para ayudarte a dar el primer paso. A veces parece que todo el mundo fuma, pero los datos cuentan otra historia: <strong>la inmensa mayoría elige no hacerlo.</strong> Tú también puedes estar en ese lado de la gráfica.
          </p>
        </header>

        <section className="stats-section">
          <div className="chart-container">
            <Doughnut data={chartData} options={chartOptions} />
          </div>
          <div className="stats-text">
            <h3>La realidad en datos</h3>
            <p>Casi 8 de cada 10 adultos viven libres de humo. El camino no es lineal y habrá tropiezos, pero miles de personas logran cruzar a la zona azul cada año.</p>
          </div>
        </section>

        <section className="benefits-section">
          <h2>Lo que recuperas casi de inmediato</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="icon-wrap"><IconSparkle /></div>
              <h3>Tu olor personal</h3>
              <p>Tu ropa, tu pelo y tu aliento dejarán de oler a cenicero en cuestión de días. Volverás a oler a ti.</p>
            </div>
            <div className="benefit-card">
              <div className="icon-wrap"><IconSmile /></div>
              <h3>Una sonrisa limpia</h3>
              <p>Tus dientes irán perdiendo ese tono amarillento, tus encías sanarán y el riesgo de perder piezas dentales caerá en picado.</p>
            </div>
            <div className="benefit-card">
              <div className="icon-wrap"><IconZap /></div>
              <h3>Resistencia física</h3>
              <p>Subir escaleras o correr dejará de ser un suplicio. Tu capacidad pulmonar mejora desde la segunda semana.</p>
            </div>
          </div>
        </section>

        <section className="tips-section">
          <h2>¿Qué hacer cuando ataca "el mono"?</h2>
          <p className="tips-intro">El deseo intenso suele durar solo entre 3 y 5 minutos. Tu objetivo es surfear esa ola. Aquí tienes 4 técnicas de emergencia:</p>
          
          <div className="tips-grid">
            <div className="tip-card">
              <div className="icon-wrap sm"><IconTimer /></div>
              <h3>La regla de los 5 minutos</h3>
              <p>Dite a ti mismo: "Voy a esperar 5 minutos antes de encenderlo". En la mayoría de los casos, el pico de ansiedad desaparecerá antes del tiempo.</p>
            </div>
            <div className="tip-card">
              <div className="icon-wrap sm"><IconDrop /></div>
              <h3>Bebe agua a sorbos</h3>
              <p>Beber un vaso de agua lentamente no solo calma, sino que engaña al cerebro dándole algo físico que hacer con la boca y las manos.</p>
            </div>
            <div className="tip-card">
              <div className="icon-wrap sm"><IconWind /></div>
              <h3>Respira en 4-7-8</h3>
              <p>Inhala por la nariz 4 segundos, mantén el aire 7 y exhala por la boca durante 8. Repítelo 3 veces para resetear tu sistema nervioso.</p>
            </div>
            <div className="tip-card">
              <div className="icon-wrap sm"><IconActivity /></div>
              <h3>Rompe el patrón</h3>
              <p>Levántate. Si estás en casa, lávate los dientes (el sabor a menta anula las ganas) o masca un chicle sin azúcar. Cambia de actividad.</p>
            </div>
          </div>
        </section>

        <footer className="final-footer">
          <button onClick={onRestart} className="restart-btn">
            Volver a empezar
          </button>
        </footer>

      </div>
    </div>
  );
};