// src/components/act2/FingerprintSection.jsx
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const generateBlackBodyData = (temp) => {
  const data = []; const h = 6.626e-34; const c = 3e8; const k = 1.381e-23;
  for (let wl = 200; wl <= 4000; wl += 50) {
    const lambda = wl * 1e-9;
    const intensity = (2 * h * c * c) / (Math.pow(lambda, 5) * (Math.exp((h * c) / (lambda * k * temp)) - 1));
    data.push({ wavelength: wl, intensity: intensity / 1e13 });
  }
  return data;
};

export function FingerprintSection({ onNavigate }) {
  const [temperature, setTemperature] = useState(4000);
  const blackBodyData = generateBlackBodyData(temperature);
  const peakWavelength = 2.898e6 / temperature;

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="bg-black/40 border border-white/10 rounded-lg p-6 space-y-6">
        <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-white">🌡️ O Espectro do Corpo Negro</h3>
            <span className="text-orange-400 font-bold text-xl">{temperature}K</span>
        </div>
        <input type="range" min="2000" max="8000" step="100" value={temperature} onChange={(e) => setTemperature(parseInt(e.target.value))} className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer"/>
        <div className="h-80 w-full bg-black/20 p-4 rounded-lg">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={blackBodyData} margin={{ top: 5, right: 20, left: -10, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="wavelength" unit="nm" stroke="#9CA3AF" label={{ value: 'Comprimento de Onda (nm)', position: 'insideBottom', offset: -10, fill: '#9CA3AF' }} />
              <YAxis stroke="#9CA3AF" />
              <Tooltip cursor={{ stroke: '#f59e0b' }} contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', color: '#f3f4f6' }}/>
              <Area type="monotone" dataKey="intensity" stroke="#f97316" fill="#fb923c" />
              <ReferenceLine x={peakWavelength} stroke="#38bdf8" strokeWidth={2} strokeDasharray="4 4" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <p className="text-center text-sm text-gray-400">Pico de emissão (linha azul): <span className="text-sky-400 font-medium">{peakWavelength.toFixed(0)} nm</span></p>
      </div>

       <div className="text-center pt-4">
        <button onClick={onNavigate} className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-red-500/30">
          Entender as Regras do Jogo <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
}