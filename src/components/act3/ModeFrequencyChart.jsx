// src/components/act3/ModeFrequencyChart.jsx
import { useMemo, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export function ModeFrequencyChart() {
  const [maxFreq, setMaxFreq] = useState(30);
  const [hoveredBar, setHoveredBar] = useState(null);

  const data = useMemo(() => {
    return Array.from({ length: maxFreq }, (_, i) => {
      const freq = i + 1;
      return {
        frequency: freq,
        modes: Math.pow(freq, 2), // N(v) é proporcional a v^2
      };
    });
  }, [maxFreq]);

  return (
    <div className="bg-black/30 border border-white/10 rounded-lg p-6 mt-6 space-y-4">
      <div>
        <label htmlFor="max-freq-slider" className="font-semibold text-white">
          Frequência Máxima: <span className="text-orange-400">{maxFreq} THz</span>
        </label>
        <input
          id="max-freq-slider"
          type="range"
          min="10" max="50" step="1"
          value={maxFreq}
          onChange={(e) => setMaxFreq(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer mt-2"
        />
      </div>
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 20 }}>
            <XAxis dataKey="frequency" unit=" THz" stroke="#9CA3AF" label={{ value: 'Frequência', position: 'insideBottom', offset: -10, fill: '#9CA3AF' }} />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              cursor={{ fill: 'rgba(255,255,255,0.1)' }}
              contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
            />
            <Bar dataKey="modes" name="Nº de Modos" onMouseOver={(d) => setHoveredBar(d.frequency)} onMouseOut={() => setHoveredBar(null)}>
              {data.map((entry) => (
                <Cell key={`cell-${entry.frequency}`} fill={hoveredBar === entry.frequency ? '#fb923c' : '#f97316'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-center text-sm text-gray-400">Passe o mouse sobre as barras para ver o número de modos crescer drasticamente.</p>
    </div>
  );
}