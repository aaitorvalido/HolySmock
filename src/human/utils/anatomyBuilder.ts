export function drawAnatomy(
  svg: SVGSVGElement, 
  registerOrgan: (key: string, group: SVGGElement) => void
) {
  const NS = 'http://www.w3.org/2000/svg';
  
  // Helpers matemáticos
  const el = (tag: string) => document.createElementNS(NS, tag);
  const c = (cx: number, cy: number, r: number) => { 
    const n = el('circle'); 
    n.setAttribute('cx', String(cx)); 
    n.setAttribute('cy', String(cy)); 
    n.setAttribute('r', String(r)); 
    return n; 
  };

  function chain(group: Element, points: number[][], stepsPerSeg = 7){
    for(let i=0; i<points.length-1; i++){
      const [x1,y1,r1] = points[i], [x2,y2,r2] = points[i+1];
      for(let s=0; s<=stepsPerSeg; s++){
        const t = s/stepsPerSeg;
        group.appendChild(c(x1+(x2-x1)*t, y1+(y2-y1)*t, r1+(r2-r1)*t));
      }
    }
  }

  function spiral(group: Element, cx: number, cy: number, turns: number, startR: number, endR: number, rx: number, ry: number, tightness: number, thick: number){
    const steps = 90;
    for(let i=0; i<=steps; i++){
      const t = i/steps; const theta = t*Math.PI*2*turns; const rr = startR + (endR-startR)*t;
      group.appendChild(c(cx + Math.cos(theta)*rr*rx, cy + Math.sin(theta)*rr*ry + t*tightness, thick*(1-t*0.3)));
    }
  }

  // --- 1. PIEL ---
  const skin = document.createElementNS(NS, 'g') as SVGGElement;
  skin.style.fill = 'var(--skin-color)';
  skin.style.transition = 'opacity 0.4s ease';
  svg.appendChild(skin);
  skin.appendChild(c(150,66,34));
  chain(skin, [[150,96,15],[150,112,13]]);
  const torso = el('path');
  torso.setAttribute('d','M100,120 C100,104 125,95 150,95 C175,95 200,104 200,120 L207,206 C211,238 206,266 195,284 L203,320 C207,345 193,362 174,364 L126,364 C107,362 93,345 97,320 L105,284 C94,266 89,238 93,206 Z');
  skin.appendChild(torso);
  chain(skin, [[97,128,19],[80,175,16],[74,225,14],[78,275,12],[85,320,11]]);
  skin.appendChild(c(87,345,13));
  chain(skin, [[203,128,19],[220,175,16],[226,225,14],[222,275,12],[215,320,11]]);
  skin.appendChild(c(213,345,13));
  chain(skin, [[118,340,30],[113,430,27],[112,520,24],[118,600,21],[124,680,19],[128,735,17]]);
  chain(skin, [[182,340,30],[187,430,27],[188,520,24],[182,600,21],[176,680,19],[172,735,17]]);
  skin.appendChild(c(122,758,16)); skin.appendChild(c(178,758,16));

  // --- 2. HUESOS ---
  const huesos = document.createElementNS(NS, 'g') as SVGGElement;
  chain(huesos, [[118,345,7],[115,430,6],[113,510,5]]); chain(huesos, [[113,518,6],[117,600,5],[122,680,4]]);
  chain(huesos, [[182,345,7],[185,430,6],[187,510,5]]); chain(huesos, [[187,518,6],[183,600,5],[176,680,4]]);
  huesos.appendChild(c(114,514,9)); huesos.appendChild(c(186,514,9));
  registerOrgan("huesos", huesos);

  // --- 3. ESTÓMAGO ---
  const estomago = document.createElementNS(NS, 'g') as SVGGElement;
  [[178,240,20],[192,236,15],[168,252,15],[182,256,13]].forEach(p=>estomago.appendChild(c(p[0],p[1],p[2])));
  chain(estomago, [[122,238,13],[108,250,14],[102,268,13],[108,286,11],[124,296,9]]);
  chain(estomago, [[178,310,10],[180,280,10]]); chain(estomago, [[178,278,10],[150,268,10],[122,278,10]]);
  chain(estomago, [[122,280,10],[118,330,10],[122,368,10]]); chain(estomago, [[122,370,9],[140,384,8],[152,388,7]]);
  chain(estomago, [[178,310,9],[182,350,9],[172,378,8]]);
  spiral(estomago, 148, 330, 3.4, 26, 4, 1.25, 0.62, 3, 6);
  registerOrgan("estomago", estomago);

  // --- 4. CIRCULACIÓN ---
  const circulacion = document.createElementNS(NS, 'g') as SVGGElement;
  chain(circulacion, [[97,128,4],[80,175,3.4],[74,225,3],[78,275,2.6],[86,318,2.2]]);
  chain(circulacion, [[118,342,5],[113,430,4.3],[112,520,3.6],[118,600,3],[124,680,2.4],[128,730,2]]);
  registerOrgan("circulacion", circulacion);

  // --- 5. PULMONES ---
  const pulmones = document.createElementNS(NS, 'g') as SVGGElement;
  chain(pulmones, [[150,150,5],[135,164,4],[128,178,4]]); chain(pulmones, [[150,150,5],[165,164,4],[172,178,4]]);
  [[128,178,17],[120,198,21],[124,220,18],[132,236,13],[140,244,9]].forEach(p=>pulmones.appendChild(c(p[0],p[1],p[2])));
  [[172,178,17],[180,198,21],[176,220,18],[168,236,13],[160,244,9]].forEach(p=>pulmones.appendChild(c(p[0],p[1],p[2])));
  chain(pulmones, [[122,195,3],[110,205,2]]); chain(pulmones, [[122,215,3],[108,224,2]]);
  chain(pulmones, [[178,195,3],[190,205,2]]); chain(pulmones, [[178,215,3],[192,224,2]]);
  registerOrgan("pulmones", pulmones);

  // --- 6. CORAZÓN ---
  const corazon = document.createElementNS(NS, 'g') as SVGGElement;
  [[142,205,14],[158,203,13],[150,220,12],[147,232,7]].forEach(p=>corazon.appendChild(c(p[0],p[1],p[2])));
  registerOrgan("corazon", corazon);

  // --- 7. BOCA ---
  const boca = document.createElementNS(NS, 'g') as SVGGElement;
  boca.appendChild(c(150,96,6)); chain(boca, [[150,104,5],[150,150,6]]);
  registerOrgan("boca", boca);

  // --- 8. CEREBRO ---
  const brain = document.createElementNS(NS, 'g') as SVGGElement;
  [[150,52,15],[138,60,10],[162,60,10],[150,72,12],[140,76,8],[160,76,8],[150,42,9]].forEach(p=>brain.appendChild(c(p[0],p[1],p[2])));
  registerOrgan("brain", brain);

  return skin; 
}