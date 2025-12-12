// src/components/act3/ClassicalTheorySection.jsx
import { ArrowRight, BookOpen } from 'lucide-react';
import { Equation } from '../Equation';

export function ClassicalTheorySection({ onNavigate }) {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Passo 3: Distribuindo a Energia</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Aqui veio o passo crucial. Eles usaram um dos pilares da termodinâmica clássica: o Teorema da Equipartição de Energia.
        </p>
      </div>

      {/* Seção: O Teorema */}
      <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">O Teorema da Equipartição de Energia</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Esse teorema afirmava que, em um sistema em equilíbrio térmico, a energia total se distribui igualmente entre todos os graus de liberdade. A cada onda, independentemente da frequência, caberia uma energia média de <Equation displayMode={false}>{String.raw`kT`}</Equation>.
        </p>
        <div className="bg-black/40 border border-blue-500/20 rounded-lg p-6 mt-4">
          <p className="text-gray-300 text-lg leading-relaxed">
            Esse teorema era um pilar da física clássica e havia sido verificado em muitas situações. Parecia absolutamente correto. Mas quando aplicado à radiação térmica, levava a consequências absurdas.
          </p>
        </div>
      </div>

      {/* Seção: A Festa da Energia (Analogia) */}
      <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-pink-400" />
          Analogia: A Festa da Energia
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Na física clássica, a festa era um <strong className="text-pink-300">buffet livre</strong>: o garçom passava servindo <strong className="text-pink-300">um petisco para cada convidado</strong>, igualmente, sem distinção.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          <strong className="text-pink-300">Planck mudou as regras da festa</strong> — o garçom agora usa uma <strong className="text-pink-300">máquina de fichas de petiscos</strong>. Para servir cada convidado, ele precisa de <strong className="text-pink-300">fichas de valor exato</strong>, e o valor depende do tipo do convidado (sua frequência): <Equation displayMode={false}>{String.raw`\Delta\varepsilon = h\nu`}</Equation>.
        </p>
        <div className="space-y-3 mt-4">
          <div className="bg-black/40 border border-purple-500/20 rounded-lg p-3">
            <p className="text-purple-300 font-semibold">Preço do petisco:</p>
            <p className="text-gray-300">cada tipo de convidado exige fichas de valor <Equation displayMode={false}>{String.raw`h\nu`}</Equation>.</p>
          </div>
          <div className="bg-black/40 border border-purple-500/20 rounded-lg p-3">
            <p className="text-purple-300 font-semibold">Orçamento térmico:</p>
            <p className="text-gray-300">o garçom dispõe, em média, de <Equation displayMode={false}>{String.raw`kT`}</Equation> por convidado.</p>
          </div>
          <div className="bg-black/40 border border-purple-500/20 rounded-lg p-3">
            <p className="text-purple-300 font-semibold">Baixas frequências:</p>
            <p className="text-gray-300"><Equation displayMode={false}>{String.raw`h\nu \ll kT`}</Equation> → o garçom tem fichas suficientes e serve quase todos.</p>
          </div>
          <div className="bg-black/40 border border-purple-500/20 rounded-lg p-3">
            <p className="text-purple-300 font-semibold">Altas frequências:</p>
            <p className="text-gray-300"><Equation displayMode={false}>{String.raw`h\nu \gg kT`}</Equation> → o valor é alto demais, e o garçom <strong>quase não consegue servir</strong>.</p>
          </div>
        </div>
      </div>

      {/* Seção: O Resultado */}
      <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">O Resultado</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Os modos de alta frequência ficam <strong className="text-green-300">fortemente suprimidos</strong> — <strong className="text-green-300">participam muito pouco</strong> da troca de energia. Assim, a energia total permanece <strong className="text-green-300">finita</strong> e a curva de radiação tende a <strong className="text-green-300">zero em frequências muito altas</strong>, resolvendo a catástrofe.
        </p>
      </div>

      {/* Seção: O Problema com o Buffet */}
      <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 border border-red-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">O Problema com o Buffet Clássico</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Havia <strong className="text-red-300">infinitos convidados</strong>, especialmente os da "área VIP" das altas frequências. Servir "um para cada um" exigiria <strong className="text-red-300">petiscos infinitos</strong> — impossível.
        </p>
        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 mt-4">
          <p className="text-yellow-200 font-semibold">⚠️ O Paradoxo:</p>
          <p className="text-gray-300 mt-2">
            Os convidados "caros" (ultravioleta) recebem <strong>poucos ou nenhum petisco</strong>. A quantidade total servida continua <strong>finita</strong>, e o problema da festa infinita desaparece — exatamente como na teoria de Planck.
          </p>
        </div>
      </div>

      <div className="text-center pt-8">
        <button 
          onClick={onNavigate} 
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-indigo-500/30"
        >
          Ver a Catástrofe Ultravioleta <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}