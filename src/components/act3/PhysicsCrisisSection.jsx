// src/components/act3/PhysicsCrisisSection.jsx
import { ArrowLeft, Flame, Thermometer, Globe } from 'lucide-react';
import { TheoryVsRealityGraph } from './TheoryVsRealityGraph';

export function PhysicsCrisisSection({ onNavigateBack }) {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">O Confronto Final: Teoria vs. Realidade</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A bela e lógica teoria clássica colidiu de frente com os dados experimentais irrefutáveis.
        </p>
      </div>

      {/* Gráfico Interativo */}
      <TheoryVsRealityGraph />
      
      {/* Consequências Absurdas (Novo) */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Consequências Absurdas</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {/* Card 1: Vela */}
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
            <Flame className="w-10 h-10 mx-auto text-red-500 mb-3" />
            <h4 className="font-bold text-white mb-2">Uma Vela</h4>
            <p className="text-sm text-gray-400">Deveria emitir energia infinita e nos incinerar instantaneamente.</p>
          </div>
          {/* Card 2: Corpo */}
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
            <Thermometer className="w-10 h-10 mx-auto text-orange-500 mb-3" />
            <h4 className="font-bold text-white mb-2">Seu Corpo (37°C)</h4>
            <p className="text-sm text-gray-400">Deveria brilhar como o Sol e derreter tudo ao redor.</p>
          </div>
          {/* Card 3: Universo */}
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
            <Globe className="w-10 h-10 mx-auto text-sky-500 mb-3" />
            <h4 className="font-bold text-white mb-2">O Universo</h4>
            <p className="text-sm text-gray-400">Deveria estar completamente em chamas com radiação infinita.</p>
          </div>
        </div>
      </div>
      
      {/* Conclusão da Crise */}
      <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/40 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-yellow-300 mb-4">Nasce uma Nova Física</h3>
        <p className="text-white text-xl leading-relaxed max-w-3xl mx-auto">
          A "catástrofe" era na verdade uma pista. Ela mostrava que as regras do jogo eram diferentes no mundo microscópico. A solução exigiria uma ideia revolucionária de Max Planck: a energia não é contínua, mas sim "quantizada" em pacotes. A <strong>Física Quântica</strong> havia nascido.
        </p>
      </div>
      
      <div className="flex justify-center pt-8">
        <button 
          onClick={onNavigateBack} 
          className="inline-flex items-center justify-center gap-2 bg-gray-500/20 hover:bg-gray-500/40 transition-colors text-gray-300 px-6 py-2 font-semibold rounded-lg"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </button>
      </div>
    </div>
  );
}