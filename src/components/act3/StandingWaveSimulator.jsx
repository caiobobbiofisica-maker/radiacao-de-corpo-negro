// src/components/act3/StandingWaveSimulator.jsx
import { useState } from 'react';
import { Waves } from 'lucide-react';

const waveData = [
  { id: 1, name: 'Fundamental (n=1)', color: 'text-green-400', nodeCount: 2 },
  { id: 2, name: '2º Harmônico (n=2)', color: 'text-blue-400', nodeCount: 3 },
  { id: 3, name: '3º Harmônico (n=3)', color: 'text-purple-400', nodeCount: 4 },
];

export function StandingWaveSimulator() {
  const [selectedWave, setSelectedWave] = useState(waveData[0]);

  return (
    <div className="bg-black/30 border border-white/10 rounded-lg p-6">
      <h4 className="font-bold text-white mb-4 text-center">🎻 Ondas Estacionárias na Cavidade</h4>
      <div className="w-full h-24 flex items-center justify-center mb-4">
        <svg width="100%" height="100%" viewBox="0 0 200 50">
          <path d={`M 0 25 C 50 ${25 - 20/selectedWave.id}, 50 ${25 + 20/selectedWave.id}, 100 25 S 150 ${25 - 20/selectedWave.id}, 200 25`}
            stroke="url(#waveGradient)" strokeWidth="2" fill="none">
             <animate attributeName="d" 
                values={`
                  M 0 25 C 50 ${25 - 20/selectedWave.id}, 50 ${25 + 20/selectedWave.id}, 100 25 S 150 ${25 - 20/selectedWave.id}, 200 25;
                  M 0 25 C 50 ${25 + 20/selectedWave.id}, 50 ${25 - 20/selectedWave.id}, 100 25 S 150 ${25 + 20/selectedWave.id}, 200 25;
                  M 0 25 C 50 ${25 - 20/selectedWave.id}, 50 ${25 + 20/selectedWave.id}, 100 25 S 150 ${25 - 20/selectedWave.id}, 200 25;
                `}
                dur={`${3 / selectedWave.id}s`} repeatCount="indefinite" />
          </path>
           <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex justify-center space-x-2">
        {waveData.map(wave => (
          <button key={wave.id} onClick={() => setSelectedWave(wave)}
            className={`px-3 py-1 text-sm rounded-full font-semibold transition-all ${selectedWave.id === wave.id ? 'bg-white/20 text-white' : 'bg-black/20 text-gray-400 hover:bg-white/10'}`}>
            {wave.name}
          </button>
        ))}
      </div>
    </div>
  );
}