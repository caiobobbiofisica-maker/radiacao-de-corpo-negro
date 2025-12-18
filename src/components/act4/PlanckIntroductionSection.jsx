// src/components/act4/PlanckIntroductionSection.jsx

import { Equation } from '../Equation';
import { ArrowRight, Brain, AlertTriangle, Lightbulb } from 'lucide-react';

export function PlanckIntroductionSection({ onNavigate }) {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Um Beco Sem Saída</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A física estava em crise. A "catástrofe do ultravioleta" era mais do que uma anomalia; era um colapso teórico completo.
        </p>
      </div>

      {/* Seção: O Contexto Histórico */}
      <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 border border-red-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">O Contexto Histórico (1900)</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          No final do século XIX, a física clássica estava consolidada e aparentemente completa. As leis de Newton, Maxwell e Boltzmann explicavam praticamente tudo. Mas havia um pequeno problema: os dados experimentais sobre radiação térmica não concordavam com as previsões teóricas.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Os físicos sabiam que algo estava errado, mas ninguém sabia o quê. A teoria clássica era tão bem estabelecida que a maioria acreditava que o problema era apenas uma questão de refinar os detalhes, não de revolucionar os fundamentos.
        </p>
      </div>

      {/* Seção: O Ato de Desespero */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Brain className="text-indigo-400 w-6 h-6" /> O Ato de Desespero de Max Planck
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Foi nesse cenário que, em <strong>14 de dezembro de 1900</strong>, Max Planck apresentou uma solução. Ele não chegou a ela por uma dedução lógica a partir dos primeiros princípios. Pelo contrário, ele a descreveu como um <strong>"ato de desespero"</strong> — uma hipótese radical criada com o único objetivo de fazer a teoria concordar com os dados experimentais.
        </p>

        <div className="bg-indigo-900/40 border border-indigo-500/30 rounded-lg p-6 mb-6">
          <h4 className="text-indigo-300 font-bold mb-3">O Problema Fundamental</h4>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Planck identificou o ponto fraco da teoria clássica: a suposição de que a energia era distribuída igualmente entre todos os graus de liberdade, o <strong>Teorema da Equipartição de Energia</strong>. Isso levava ao resultado absurdo de que cada modo de vibração deveria ter uma energia média de:
          </p>
          <div className="text-center mb-4">
            <Equation displayMode={true}>{String.raw`\bar{\epsilon} = k_B T`}</Equation>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Isso era verdade para <strong>todas as frequências</strong>, independentemente de quão altas fossem. Isso levava à catástrofe do ultravioleta.
          </p>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed">
          Planck percebeu que para resolver o problema, ele precisava <strong>quebrar a suposição de equipartição</strong> em altas frequências. Mas como? Qual seria a alternativa?
        </p>
      </div>

      {/* Seção: A Ideia Revolucionária */}
      <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-yellow-400" />
          A Ideia Revolucionária
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Planck propôs algo que ninguém havia imaginado: e se a energia não fosse contínua, mas sim <strong>quantizada</strong> — isto é, dividida em "pacotes" indivisíveis?
        </p>

        <div className="space-y-4">
          <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
            <h4 className="text-purple-300 font-bold mb-2">A Hipótese de Planck</h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              A energia de um oscilador com frequência <Equation displayMode={false}>{String.raw`\nu`}</Equation> não pode ter qualquer valor arbitrário. Ela só pode ser um múltiplo inteiro de uma quantidade fundamental:
            </p>
            <div className="text-center">
              <Equation displayMode={true}>{String.raw`E_n = n h \nu, \quad n = 0, 1, 2, 3, \ldots`}</Equation>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mt-3">
              Onde <Equation displayMode={false}>{String.raw`h`}</Equation> é uma constante universal (que seria chamada de constante de Planck) e <Equation displayMode={false}>{String.raw`n`}</Equation> é um número inteiro.
            </p>
          </div>

          <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
            <h4 className="text-purple-300 font-bold mb-2">O "Pacote" de Energia</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Cada "pacote" indivisível tem uma energia de <Equation displayMode={false}>{String.raw`h\nu`}</Equation>. Isso significa que para criar uma vibração em uma frequência alta (ultravioleta), você precisa de uma quantidade de energia muito grande. Se o sistema não tem essa energia disponível, a vibração não pode ser criada.
            </p>
          </div>

          <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
            <h4 className="text-purple-300 font-bold mb-2">A Solução para a Catástrofe</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Em altas frequências, onde <Equation displayMode={false}>{String.raw`h\nu \gg k_B T`}</Equation>, o "preço" do pacote é tão alto que o sistema quase não consegue criar nenhuma vibração. Assim, a energia em altas frequências é suprimida, e a catástrofe desaparece!
            </p>
          </div>
        </div>
      </div>

      {/* Seção: Por Que "Ato de Desespero"? */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Por Que "Ato de Desespero"?</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Planck chamou sua solução de "ato de desespero" porque:
        </p>
        <div className="space-y-3">
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong>Não tinha justificação teórica:</strong> Ele não podia explicar <strong>por quê</strong> a energia deveria ser quantizada. Era apenas uma hipótese ad hoc para fazer os números funcionarem.
            </p>
          </div>
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong>Violava a intuição clássica:</strong> A ideia de que a energia vem em "pacotes" indivisíveis era completamente contrária à física clássica, onde a energia era contínua.
            </p>
          </div>
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong>Ele próprio era cético:</strong> Planck não acreditava que a quantização fosse uma propriedade real da natureza. Ele pensava que era apenas um artifício matemático necessário para resolver o problema.
            </p>
          </div>
        </div>
      </div>

      {/* Seção: O Significado Histórico */}
      <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border border-yellow-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">O Significado Histórico</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Embora Planck não soubesse na época, seu "ato de desespero" marcou o nascimento de uma nova era da física. A quantização não era apenas um artifício matemático — era a porta de entrada para uma compreensão completamente nova da realidade.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Nos anos seguintes, a ideia de quantização seria expandida e aprofundada por físicos como Einstein, Bohr, Heisenberg e Schrödinger, levando ao desenvolvimento da <strong>Mecânica Quântica</strong> — uma das maiores revoluções intelectuais da história da ciência.
        </p>
        <div className="bg-purple-900/40 border border-purple-500/30 rounded-lg p-4 mt-6">
          <p className="text-center text-purple-200 font-semibold">
            O que começou como um "ato de desespero" se tornou a base de toda a física moderna.
          </p>
        </div>
      </div>

      <div className="text-center pt-8">
        <button 
          onClick={() => onNavigate('ACT_4_QUANTA')}
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-indigo-500/30"
        >
          Ver a Quebra da Continuidade <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}