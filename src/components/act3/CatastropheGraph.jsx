// src/components/act3/CatastropheGraph.jsx
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const generateComparisonData = (temp) => {
    const data = [];
    const h = 6.626e-34; const c = 3e8; const k = 1.381e-23;
    for (let wl = 100; wl <= 3000; wl += 50) {
        const lambda = wl * 1e-9;
        const realIntensity = (2 * h * c * c) / (Math.pow(lambda, 5) * (Math.exp((h * c) / (lambda * k * temp)) - 1));
        const classicalIntensity = (8 * Math.PI * k * temp) / Math.pow(lambda, 4);
        data.push({
            wavelength: wl,
            Realidade: realIntensity / 1e13,
            "Teoria Clássica": classicalIntensity / 1e13,
        });
    }
    return data;
};

export function CatastropheGraph() {
    const [temperature, setTemperature] = useState(5000);
    const [showClassical, setShowClassical] = useState(false);
    const chartData = generateComparisonData(temperature);

    return (
        <div className="bg-black/40 border border-white/10 rounded-lg p-6 space-y-4">
            <h3 className="font-bold text-white text-center text-xl">Gráfico: Teoria vs. Realidade</h3>
            <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="wavelength" unit="nm" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" domain={[0, 15]} />
                        <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }} />
                        <Legend wrapperStyle={{ color: '#cbd5e1' }} />
                        <Line type="monotone" dataKey="Realidade" stroke="#10b981" strokeWidth={3} dot={false} />
                        {showClassical && (
                            <Line type="monotone" dataKey="Teoria Clássica" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" dot={false}
                                style={{ transition: 'all 1s ease-in' }} // Animação
                            />
                        )}
                    </LineChart>
                </ResponsiveContainer>
            </div>
            {!showClassical && (
                <div className="text-center">
                    <button onClick={() => setShowClassical(true)}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-all shadow-lg shadow-red-500/30">
                        Revelar a Previsão Clássica
                    </button>
                </div>
            )}
            <p className="text-center text-gray-400 text-sm">A linha verde (dados reais) se comporta, mas a previsão clássica (vermelha) dispara para o infinito na região Ultravioleta, o que é fisicamente impossível.</p>
        </div>
    );
}