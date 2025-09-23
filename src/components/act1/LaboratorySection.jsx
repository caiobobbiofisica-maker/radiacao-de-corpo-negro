// src/components/act1/LaboratorySection.jsx
import { ArrowRight } from 'lucide-react';
import { BlackBodySimulation } from './BlackBodySimulation.jsx';

export function LaboratorySection({ onNavigate }) {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">O Laboratório da Natureza</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">Como "construir" um corpo negro? Os cientistas foram engenhosos e criaram um modelo quase perfeito.</p>
      </div>
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">A Armadilha de Luz Perfeita</h3>
        <p className="text-gray-300 text-lg leading-relaxed">Quando a luz entra por esse orifício, ela fica "presa" dentro da cavidade, ricocheteando nas paredes internas até ser completamente absorvida. É uma verdadeira <strong className="text-pink-400">armadilha de luz</strong>!</p>
      </div>
      <BlackBodySimulation />
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="bg-black/40 border border-white/10 rounded-lg p-6">
          <h3 className="text-white font-bold mb-2">1. Entrada</h3>
          <p className="text-gray-300">A luz entra pelo pequeno orifício.</p>
        </div>
        <div className="bg-black/40 border border-white/10 rounded-lg p-6">
          <h3 className="text-white font-bold mb-2">2. Reflexões</h3>
          <p className="text-gray-300">Múltiplas reflexões nas paredes internas.</p>
        </div>
        <div className="bg-black/40 border border-white/10 rounded-lg p-6">
          <h3 className="text-white font-bold mb-2">3. Absorção</h3>
          <p className="text-gray-300">A luz é gradualmente absorvida.</p>
        </div>
      </div>
      <div className="text-center">
        <button onClick={onNavigate} className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-red-500/30">
          Ver os Dados Misteriosos <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}