// src/components/act1/BlackBodySimulation.jsx
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Play, Pause, RotateCcw, Zap, Thermometer } from 'lucide-react';

export function BlackBodySimulation() {
  const [temperature, setTemperature] = useState(500);
  const [isPlaying, setIsPlaying] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const [internalRays, setInternalRays] = useState([]);
  const requestRef = useRef();
  const previousTimeRef = useRef();

  const cavityProperties = useMemo(() => {
    if (temperature < 800) return { rayColor: '#ff6666', numRays: 15 };
    if (temperature < 1500) return { rayColor: '#ff8844', numRays: 30 };
    if (temperature < 3500) return { rayColor: '#ffcc88', numRays: 50 };
    if (temperature < 5500) return { rayColor: '#ffffff', numRays: 70 };
    return { rayColor: '#ddeeff', numRays: 90 };
  }, [temperature]);

  useEffect(() => {
    const rays = Array.from({ length: cavityProperties.numRays }, (_, i) => ({
      id: i,
      x: 200 + (Math.random() - 0.5) * 150,
      y: 150 + (Math.random() - 0.5) * 150,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));
    setInternalRays(rays);
  }, [cavityProperties.numRays]);

  const animateInternalRays = (time) => {
    if (previousTimeRef.current !== undefined) {
      setInternalRays(rays => rays.map(ray => {
        let { x, y, vx, vy } = ray;
        x += vx; y += vy;
        const dist = Math.sqrt(Math.pow(x - 200, 2) + Math.pow(y - 150, 2));
        if (dist > 78) {
          const normX = (x - 200) / dist; const normY = (y - 150) / dist;
          const dot = vx * normX + vy * normY;
          vx -= 2 * dot * normX; vy -= 2 * dot * normY;
        }
        return { ...ray, x, y, vx, vy };
      }));
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateInternalRays);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateInternalRays);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => setAnimationStep(prev => (prev + 1) % 16), 400);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const reset = () => { setIsPlaying(false); setAnimationStep(0); };
  
  const getExternalRayPaths = (step) => {
    const paths = [];
    if (step >= 1) { const p = Math.min((step - 1) / 3, 1); paths.push({ id: 'main', path: `M 120 150 L ${120 + p * 120} 150`, opacity: 1 - p * 0.2 }); }
    if (step >= 4) { const p = Math.min((step - 4) / 3, 1); paths.push({ id: 'reflect1', path: `M 240 150 L ${240 + p * -60} ${150 + p * 60}`, opacity: 0.8 - p * 0.2 }); }
    if (step >= 7) { const p = Math.min((step - 7) / 3, 1); paths.push({ id: 'reflect2', path: `M 180 210 L ${180 + p * 40} ${210 + p * -100}`, opacity: 0.6 - p * 0.2 }); }
    if (step >= 10) { const p = Math.min((step - 10) / 3, 1); paths.push({ id: 'reflect3', path: `M 220 110 L ${220 + p * -60} ${110 + p * 70}`, opacity: 0.4 - p * 0.2 }); }
    return paths;
  };
  const externalRayPaths = getExternalRayPaths(animationStep);

  return (
    <div className="bg-black/40 border border-white/10 rounded-lg p-6 space-y-4">
      <h3 className="text-white text-center text-xl font-bold flex items-center justify-center space-x-2">
        <Zap className="w-6 h-6 text-yellow-400" />
        <span>Simulador de Equilíbrio Térmico</span>
      </h3>
      <div className="flex justify-center">
        <svg viewBox="0 0 400 300" className="w-full max-w-lg bg-gray-900 rounded-lg border border-gray-600">
          <circle cx="200" cy="150" r="80" fill="rgba(0,0,0,0.9)" stroke="#444" strokeWidth="2" />
          <rect x="118" y="145" width="4" height="10" fill="black" />
          <line x1={80} y1={150} x2={120} y2={150} stroke="#ffff88" strokeWidth="2" />
          {internalRays.map(ray => (<circle key={ray.id} cx={ray.x} cy={ray.y} r="0.7" fill={cavityProperties.rayColor} />))}
          <line x1={120} y1={150} x2={80} y2={150} stroke={cavityProperties.rayColor} strokeWidth="1.5" />
          {isPlaying && externalRayPaths.map((ray) => (<path key={ray.id} d={ray.path} stroke="#ffff00" strokeWidth="2" opacity={ray.opacity} fill="none" />))}
        </svg>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        <div className="space-y-3">
          <label htmlFor="temp-slider-adv" className="flex items-center justify-between text-white font-medium">
            <span className="flex items-center gap-2"><Thermometer className="w-5 h-5 text-red-400"/>Temperatura da Cavidade</span>
            <span className="text-orange-400 font-bold text-lg">{temperature} K</span>
          </label>
          <input id="temp-slider-adv" type="range" min="300" max="6000" step="100" value={temperature} onChange={(e) => setTemperature(parseInt(e.target.value))} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"/>
        </div>
        <div className="space-y-3">
           <p className="text-white font-medium text-center">Animação da Absorção</p>
           <div className="flex justify-center space-x-4">
              <button onClick={togglePlay} className={`w-28 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white font-semibold ${isPlaying ? 'bg-red-600' : 'bg-green-600'}`}>
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isPlaying ? 'Pausar' : 'Iniciar'}</span>
              </button>
              <button onClick={reset} className="w-28 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-gray-300 border border-gray-600">
                <RotateCcw className="w-4 h-4" />
                <span>Reiniciar</span>
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}