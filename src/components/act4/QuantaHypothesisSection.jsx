// src/components/act4/QuantaHypothesisSection.jsx

import { useState } from 'react';
import { ArrowRight, Zap, Lightbulb, BarChart2 } from 'lucide-react';
import { Equation } from '../Equation';
import { QuantaEnergyChart } from './QuantaEnergyChart'; // Importando o novo componente

export function QuantaHypothesisSection({ onNavigate }) {
  // Novo estado para controlar a visibilidade da simulação
  const [showQuantaDemo, setShowQuantaDemo] = useState(false);

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Quebrando a Regra da Continuidade</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Para que a fórmula funcionasse, Planck percebeu que a energia das ondas de alta frequência deveria tender a zero. Para conseguir isso, ele fez algo que ia contra toda a intuição da física clássica.
        </p>
      </div>

      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Zap className="text-yellow-400" /> Analogia: A Máquina de Refrigerantes de Energia
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed">
          A teoria clássica via a energia como um buffet livre. Planck trocou o buffet por uma <strong>máquina de vendas automática</strong>. Para "comprar" uma onda de frequência <Equation displayMode={false}>\nu</Equation>, você precisava da moeda exata, <Equation displayMode={false}>\Delta\epsilon = h\nu</Equation>.
        </p>
      </div>
      
      {/* Botão e Simulação Interativa (Nova Seção) */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <BarChart2 className="text-purple-400" /> Visualizando os Quanta de Energia
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          A diferença entre a energia contínua (uma rampa) e a energia quantizada (degraus) é a chave da descoberta de Planck.
        </p>
        <button 
          onClick={() => setShowQuantaDemo(!showQuantaDemo)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all"
        >
          {showQuantaDemo ? "Ocultar" : "Mostrar"} Simulação
        </button>
        {/* Renderização condicional do novo componente de gráfico */}
        {showQuantaDemo && <QuantaEnergyChart />}
      </div>

      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-8 text-center">
        <p className="text-xl text-green-200 leading-relaxed">
          Ondas de alta frequência são "caras" e exigem pacotes de energia muito grandes. Como não há energia suficiente no sistema para criar muitos pacotes "caros", as vibrações ultravioletas são <strong>"congeladas"</strong>, resolvendo a catástrofe.
        </p>
      </div>

      <div className="text-center pt-8">
        <button 
          onClick={onNavigate} 
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-purple-500/30"
        >
          Ver a Fórmula da Solução <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}