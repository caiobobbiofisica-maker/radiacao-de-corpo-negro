// src/components/act4/QuantaEnergyChart.jsx

import { useMemo, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function QuantaEnergyChart() {
  const [quantaSize, setQuantaSize] = useState(2);

  // Gera os dados para o gráfico com base no tamanho do "pacote" de energia
  const data = useMemo(() => {
    const points = [];
    for (let freq = 0; freq <= 20; freq += 0.5) {
      // Energia clássica (contínua) é uma rampa suave
      const classicalEnergy = freq * 0.5;
      
      // Energia quântica (discreta) só pode existir em múltiplos do "quantaSize"
      const quantumEnergy = Math.floor(classicalEnergy / quantaSize) * quantaSize;
      
      points.push({
        frequency: freq,
        "Clássica (Contínua)": classicalEnergy,
        "Quântica (Discreta)": quantumEnergy,
      });
    }
    return points;
  }, [quantaSize]);

  return (
    <div className="bg-black/30 border border-white/10 rounded-lg p-6 mt-6 space-y-4 animate-in fade-in duration-500">
      <div>
        <label htmlFor="quanta-slider" className="font-semibold text-white">
          Tamanho do "Pacote" de Energia (hν): <span className="text-purple-400">{quantaSize.toFixed(1)}</span>
        </label>
        <input
          id="quanta-slider"
          type="range"
          min="0.5" max="5" step="0.5"
          value={quantaSize}
          onChange={(e) => setQuantaSize(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer mt-2"
        />
      </div>
      <div className="h-80 w-full bg-black/20 p-4 rounded-lg">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="frequency" name="Frequência" unit=" (ν)" stroke="#9CA3AF" />
            <YAxis name="Energia" stroke="#9CA3AF" />
            <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }} />
            <Legend wrapperStyle={{ color: '#cbd5e1' }} verticalAlign="top" height={36} />
            <Line type="monotone" dataKey="Clássica (Contínua)" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" dot={false} />
            <Line type="stepAfter" dataKey="Quântica (Discreta)" stroke="#8b5cf6" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="text-center text-sm text-gray-400">Arraste o slider para ver como a energia quântica só pode existir em "degraus".</p>
    </div>
  );
}