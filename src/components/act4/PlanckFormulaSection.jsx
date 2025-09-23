// src/components/act4/PlanckFormulaSection.jsx
import { ArrowRight, Award } from 'lucide-react';
import { Equation } from '../Equation';
import { TheoryVsRealityGraph } from '../act3/TheoryVsRealityGraph'; // Reutilizando o gráfico melhorado

export function PlanckFormulaSection({ onNavigate }) {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">A Fórmula da Solução</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Com sua nova hipótese, Planck recalculou a energia média e chegou a uma fórmula que correspondia perfeitamente aos dados.
        </p>
      </div>

      {/* A Fórmula de Planck */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">A Lei de Radiação de Planck</h3>
        <div className="bg-indigo-900/20 p-4 rounded-lg text-center mb-6">
          <Equation>{String.raw`\rho_T(\nu)d\nu = \frac{8\pi\nu^2}{c^3} \frac{h\nu}{e^{h\nu/kT}-1} d\nu`}</Equation>
        </div>
        <p className="text-lg text-gray-300">Esta fórmula se ajustou perfeitamente aos dados experimentais em todas as frequências.</p>
      </div>
      
      {/* Gráfico de Comparação */}
      <TheoryVsRealityGraph />
      
      {/* A Incerteza de Planck */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Award className="text-yellow-400" /> A Conclusão Relutante
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Planck havia resolvido o quebra-cabeça. Mas, para isso, ele teve que "trapacear", introduzindo uma regra que ele mesmo não compreendia completamente.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Inicialmente, ele acreditava que essa estranha regra de quantização era apenas um <strong>artifício matemático</strong> ou algo que se aplicava somente aos osciladores nas paredes da cavidade. Ele não percebeu imediatamente que havia descoberto uma propriedade fundamental da própria energia.
        </p>
        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 mt-6">
          <p className="text-center text-yellow-200 font-semibold">
            Ele havia encontrado a solução, mas ainda não tinha ideia da revolução que sua "solução desesperada" estava prestes a iniciar.
          </p>
        </div>
      </div>

      <div className="text-center pt-8">
        <button 
          onClick={onNavigate} 
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-pink-500/30"
        >
          Ver o Legado Inesperado <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}