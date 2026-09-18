import React, { useEffect, useRef, useState } from "react";
import '../../styles/Anatomy.css';

import { ORGAN_SECTIONS, TIMELINE, ZOOMS, DAMAGE, HEALTH } from '../data/anatomyData';
import { drawAnatomy } from '../utils/anatomyBuilder'; 

export const AnatomyTracker = ({ onComplete }: { onComplete?: () => void }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeKey, setActiveKeyState] = useState("intro");

  useEffect(() => {
    const container = rootRef.current;
    const mountEl = mountRef.current;
    if (!container || !mountEl) return;

    mountEl.innerHTML = ''; 

    const NS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', '0 0 300 820');
    svg.style.width = '100%';
    svg.style.height = 'auto';
    svg.style.display = 'block';
    svg.style.overflow = 'visible';
    mountEl.appendChild(svg);

    const organs: Record<string, SVGGElement> = {};
    function registerOrgan(key: string, group: SVGGElement) {
      group.style.fill = 'var(--organ-color)';
      group.style.transition = 'opacity 0.4s ease, filter 0.4s ease, fill 0.4s ease';
      svg.appendChild(group);
      organs[key] = group;
    }

    const skin = drawAnatomy(svg, registerOrgan);

    const currentKeyRef = { current: "intro" };

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("in-view", entry.isIntersecting);
        if (entry.isIntersecting && (entry.target as HTMLElement).dataset.organ) {
          const key = (entry.target as HTMLElement).dataset.organ!;
          currentKeyRef.current = key;
          setActiveKeyState(key);
        }
      });
    }, { threshold: 0.5 });
    
    container.querySelectorAll("[data-organ]").forEach((s) => io.observe(s));

    const io2 = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.target.classList.toggle("in-view", e.isIntersecting));
    }, { threshold: 0.4 });
    container.querySelectorAll("[data-tl]").forEach((el) => io2.observe(el));

   
    const FULL_W = 300; 
    const ASPECT = 820/300;
    const cameraState = { x: 0, y: 0, w: FULL_W, h: 820 };
    let rafId: number;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function animate() {
      rafId = requestAnimationFrame(animate);
      const key = currentKeyRef.current;
      const target = ZOOMS[key] || ZOOMS.intro;

      const w = FULL_W / target.scale, h = w * ASPECT;
      const goal = { x: target.cx - w / 2, y: target.cy - h / 2, w, h };
      const f = reduceMotion ? 1 : 0.06;
      cameraState.x += (goal.x - cameraState.x) * f;
      cameraState.y += (goal.y - cameraState.y) * f;
      cameraState.w += (goal.w - cameraState.w) * f;
      cameraState.h += (goal.h - cameraState.h) * f;
      
      svg.setAttribute('viewBox', `${cameraState.x.toFixed(1)} ${cameraState.y.toFixed(1)} ${cameraState.w.toFixed(1)} ${cameraState.h.toFixed(1)}`);

      Object.keys(organs).forEach(k => {
        const active = k === key;
        organs[k].style.opacity = active ? '1' : '0.15';
        organs[k].style.fill = active ? 'var(--accent)' : 'var(--organ-color)';
        organs[k].style.filter = active ? 'drop-shadow(0 0 8px var(--accent))' : 'none';
      });
      skin.style.opacity = (key === 'piel') ? '1' : (['intro','cta','timeline'].includes(key) ? '0.95' : '0.55');
    }
    animate();

    const timelineEl = container.querySelector('[data-organ="timeline"]') as HTMLElement;
    const hex = (a: number[], b: number[], t: number) => '#' + [0,1,2].map(i => Math.round(a[i] + (b[i] - a[i]) * t).toString(16).padStart(2, '0')).join('');
    
    function onScroll() {
      if (!timelineEl) return;
      const flipY = timelineEl.offsetTop - window.innerHeight * 0.6;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const t = Math.max(0, Math.min(1, (window.scrollY - flipY) / Math.max(1, docH - flipY)));
      container!.style.setProperty('--accent', hex(DAMAGE, HEALTH, t));
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
   
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      io.disconnect();
      io2.disconnect();
      if (mountEl.contains(svg)) mountEl.removeChild(svg);
    };
  }, []);

  return (
    <div className="anatomy-wrapper" ref={rootRef}>
      
      <section className="intro" data-organ="intro">
        <p className="kicker">Un recorrido por el cuerpo, órgano a órgano</p>
        <h1>Esto es lo que pasa por dentro cada vez que enciendes un cigarro</h1>
        <p className="lede">Desplázate hacia abajo. La ilustración te va llevando por el cuerpo, desde el cerebro hasta los huesos, deteniéndose en cada órgano que el humo del tabaco toca primero.</p>
        <div className="scroll-hint"><span className="stem"></span>Desliza para empezar</div>
      </section>

      <div className="stage">
        
        <div className="figure-col">
          <div className="figure-wrap" ref={mountRef}></div>
        </div>

        <div className="content-col">
          {ORGAN_SECTIONS.map((s) => (
            <article key={s.key} className="organ-section" data-organ={s.key}>
              <p className="eyebrow">{s.eyebrow}</p>
              <div className="rule" />
              <h2>{s.title}</h2>
              {s.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </article>
          ))}

          <section className="timeline-section" id="timeline" data-organ="timeline">
            <p className="eyebrow">Ahora, lo que pasa al revés</p>
            <h2>Esto empieza a cambiar en cuanto lo dejas</h2>
            {TIMELINE.map((item) => (
              <div key={item.time} className="tl-item" data-tl>
                <span className="tl-time">{item.time}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </section>

          <section className="cta-section" data-organ="cta">
            <h2>Hoy puede ser el primer día</h2>
            <p>No hace falta dejarlo de un día para otro ni conseguirlo a la primera. La mayoría de las personas que lo dejan lo intentan varias veces antes de lograrlo, y cada intento cuenta.</p>
            <p>Si estás pensando en dar el paso, no tienes que hacerlo solo.</p>
            <ul className="cta-list">
              <li>Tu centro de salud puede ofrecerte seguimiento y, si hace falta, tratamiento para los síntomas de abstinencia.</li>
              <li>Muchas farmacias también orientan sobre parches, chicles u otras ayudas para dejarlo.</li>
              <li>La mayoría de comunidades autónomas tienen una línea telefónica gratuita de ayuda al fumador: pregunta por ella en tu centro de salud.</li>
            </ul>
            <div style={{ marginTop: '2rem' }}>
              <button onClick={onComplete} style={{ padding: '1rem 2rem', background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1.1rem' }}>
                Un último mensaje para ti
              </button>
            </div>
          </section>

          <footer>Esta página tiene fines informativos y no sustituye el consejo de un profesional sanitario. Si fumas y quieres dejarlo, tu médico o tu farmacéutico pueden ayudarte a encontrar el camino que mejor te encaje.</footer>
        </div>
      </div>

      <div className="rail" id="rail">
        {Object.keys(ZOOMS).map((organKey) => (
          <span key={organKey} className={activeKey === organKey ? 'active' : ''} />
        ))}
      </div>

    </div>
  );
};