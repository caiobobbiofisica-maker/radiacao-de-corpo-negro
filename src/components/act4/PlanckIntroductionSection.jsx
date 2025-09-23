// src/components/act4/PlanckIntroductionSection.jsx

// CORREÇÃO 1: Garantir que o caminho de importação esteja correto.
// Este caminho assume que 'Equation.jsx' está na pasta 'src/components/'.
import { Equation } from '../Equation'; 
import { ArrowRight, Brain } from 'lucide-react';

export function PlanckIntroductionSection({ onNavigate }) {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Um Beco Sem Saída</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A física estava em crise. A "catástrofe do ultravioleta" era mais do que uma anomalia; era um colapso teórico completo.
        </p>
      </div>

      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Brain className="text-indigo-400" /> O Ato de Desespero de Max Planck
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Foi nesse cenário que, em 14 de dezembro de 1900, Max Planck apresentou uma solução. Ele não chegou a ela por uma dedução lógica a partir dos primeiros princípios. Pelo contrário, ele a descreveu como um <strong>"ato de desespero"</strong>, uma hipótese radical criada com o único objetivo de fazer a teoria concordar com os dados experimentais.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          Planck decidiu atacar o problema em seu ponto mais fraco: a suposição de que a energia era distribuída igualmente, o princípio da equipartição, que levava ao resultado absurdo de{` `}
          {/* CORREÇÃO 2: Usar chaves e String.raw para passar a fórmula como filho do componente. */}
          {/* Isso evita problemas de interpretação de caracteres especiais como '\' pelo JavaScript. */}
          <Equation displayMode={false}>{String.raw`\bar{\epsilon} = kT`}</Equation> para todas as frequências.
        </p>
      </div>
      
      <div className="text-center pt-8">
        <button 
          onClick={onNavigate} 
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-indigo-500/30"
        >
          Ver a Quebra da Continuidade <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}