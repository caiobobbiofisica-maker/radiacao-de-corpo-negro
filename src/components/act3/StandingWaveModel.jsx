// src/components/act3/StandingWaveModel.jsx
import { useState, useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

const harmonics = [
  { id: 1, name: 'n=1 (Fundamental)', color: 'stroke-green-400', ring: 'ring-green-400' },
  { id: 2, name: 'n=2 (2º Harmônico)', color: 'stroke-blue-400', ring: 'ring-blue-400' },
  { id: 3, name: 'n=3 (3º Harmônico)', color: 'stroke-purple-400', ring: 'ring-purple-400' },
  { id: 4, name: 'n=4 (4º Harmônico)', color: 'stroke-pink-400', ring: 'ring-pink-400' },
];

export function StandingWaveModel() {
  const [n, setN] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [points, setPoints] = useState('');
  const requestRef = useRef();

  const animate = (time) => {
    const timeFactor = time * 0.005 * n; // Velocidade aumenta com o harmônico
    const newPoints = Array.from({ length: 201 }, (_, i) => {
      const x = i;
      const sine = Math.sin(n * Math.PI * (x / 200));
      const cosine = Math.cos(timeFactor);
      const y = 25 - sine * 20 * cosine; // Amplitude 20, centro 25
      return `${x},${y}`;
    }).join(' ');
    setPoints(newPoints);
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isPlaying) {
      requestRef.current = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestRef.current);
    }
    return () => cancelAnimationFrame(requestRef.current);
  }, [isPlaying, n]);

  return (
    <div className="bg-black/30 border border-white/10 rounded-lg p-6 mt-6">
      <div className="w-full h-24">
        <svg viewBox="0 0 200 50" className="w-full h-full">
          <polyline
            points={points}
            className={`${harmonics.find(h => h.id === n).color}`}
            strokeWidth="2.5"
            fill="none"
          />
        </svg>
      </div>
      <div className="flex justify-center flex-wrap items-center gap-3 mt-4">
        {harmonics.map(harmonic => (
          <button 
            key={harmonic.id} 
            onClick={() => setN(harmonic.id)}
            className={`px-4 py-2 text-sm rounded-full font-semibold transition-all duration-200 ${
              n === harmonic.id 
              ? `bg-white/20 text-white ring-2 ${harmonic.ring}` 
              : 'bg-black/20 text-gray-400 hover:bg-white/10'
            }`}
          >
            {harmonic.name}
          </button>
        ))}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
}