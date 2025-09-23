// src/components/act3/TheoryVsRealityGraph.jsx

import { useMemo, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine } from 'recharts';

export function TheoryVsRealityGraph() {
  const [temperature, setTemperature] = useState(5500);
  // NOVO: Estado para controlar o filtro de visualização
  const [filter, setFilter] = useState('all'); // 'all', 'planck', 'classical'

  const data = useMemo(() => {
    const points = [];
    const h = 6.626e-34; const c = 3e8; const k = 1.381e-23;

    for (let wl = 100; wl <= 3000; wl += 25) {
      const lambda = wl * 1e-9;
      const real = (2 * h * c * c) / (Math.pow(lambda, 5) * (Math.exp((h * c) / (lambda * k * temperature)) - 1));
      const classical = (8 * Math.PI * k * temperature) / Math.pow(lambda, 4);
      const wien = (2 * h * c * c) / Math.pow(lambda, 5) * Math.exp(-(h * c) / (lambda * k * temperature));
      
      points.push({
        wavelength: wl,
        "Realidade (Planck)": real / 1e13,
        "Clássica (R-J)": Math.min(classical / 1e13, 20),
        "Lei de Wien": wien / 1e13,
      });
    }
    return points;
  }, [temperature]);

  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <div className="flex justify-center items-center gap-4 mt-4">
        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="flex items-center gap-2 px-3 py-1 bg-black/20 rounded-md">
            <div style={{ width: 10, height: 10, backgroundColor: entry.color, border: entry.value.includes('Clássica') ? `2px dashed ${entry.color}` : (entry.value.includes('Wien') ? `2px dotted ${entry.color}`: 'none') }}></div>
            <span className="text-xs text-gray-300">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-black/40 border border-white/10 rounded-lg p-6 space-y-4">
      <div className="md:flex justify-between items-center space-y-4 md:space-y-0">
        <div>
          <label htmlFor="temp-slider" className="font-semibold text-white">
            Temperatura: <span className="text-purple-400">{temperature} K</span>
          </label>
          <input
            id="temp-slider"
            type="range"
            min="3000" max="8000" step="100"
            value={temperature}
            onChange={(e) => setTemperature(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer mt-2"
          />
        </div>
        
        {/* NOVO: Botões de Filtro */}
        <div className="flex justify-center items-center space-x-2 bg-black/20 p-1 rounded-lg">
          <button onClick={() => setFilter('all')} className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${filter === 'all' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:bg-white/10'}`}>Todas</button>
          <button onClick={() => setFilter('planck')} className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${filter === 'planck' ? 'bg-green-600 text-white' : 'text-gray-400 hover:bg-white/10'}`}>Planck</button>
          <button onClick={() => setFilter('classical')} className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${filter === 'classical' ? 'bg-red-600 text-white' : 'text-gray-400 hover:bg-white/10'}`}>Clássicas</button>
        </div>
      </div>

      <div className="h-96 w-full bg-black/20 p-4 rounded-lg">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="wavelength" unit=" nm" stroke="#9CA3AF" label={{ value: 'Comprimento de Onda (nm)', position: 'insideBottom', offset: -10, fill: '#9CA3AF' }} />
            <YAxis stroke="#9CA3AF" domain={[0, 'dataMax + 2']} />
            <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }} />
            <Legend content={renderLegend} />
            <ReferenceLine x={400} stroke="#a78bfa" strokeDasharray="3 3" label={{ value: 'UV', fill: '#a78bfa', position: 'insideTopLeft' }} />
            
            {/* ALTERADO: Renderização condicional das curvas */}
            {(filter === 'all' || filter === 'planck') && (
              <Line type="monotone" dataKey="Realidade (Planck)" stroke="#10b981" strokeWidth={3} dot={false} />
            )}
            {(filter === 'all' || filter === 'classical') && (
              <Line type="monotone" dataKey="Clássica (R-J)" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" dot={false} />
            )}
            {(filter === 'all' || filter === 'classical') && (
                <Line type="monotone" dataKey="Lei de Wien" stroke="#3b82f6" strokeWidth={2} strokeDasharray="3 7" dot={false} />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}