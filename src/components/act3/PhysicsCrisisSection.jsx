// src/components/act3/PhysicsCrisisSection.jsx
import { ArrowLeft, ArrowRight, Flame, Thermometer, Globe, AlertTriangle, CheckCircle } from 'lucide-react';
import { Equation } from '../Equation';
import { TheoryVsRealityGraph } from './TheoryVsRealityGraph';

export function PhysicsCrisisSection({ onNavigateBack, onNavigate }) {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">O Confronto Final: Teoria vs. Realidade</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A bela e lógica teoria clássica colidiu de frente com os dados experimentais irrefutáveis.
        </p>
      </div>

      {/* Seção: O Problema Físico e a Solução Quântica */}
      <div className="bg-gradient-to-r from-red-900/40 to-purple-900/40 border border-red-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Texto 1: O Problema Físico e a Solução Quântica</h3>
        
        <div className="space-y-6">
          {/* O Cenário Clássico */}
          <div className="bg-black/40 border border-blue-500/20 rounded-lg p-4">
            <h4 className="text-blue-300 font-bold mb-2">O Cenário Clássico</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              No modelo clássico, o sistema é uma <strong>cavidade</strong> (um "forno") em equilíbrio térmico. Dentro dela, a energia existe na forma de <strong>ondas estacionárias</strong>, chamadas de <strong>modos de vibração</strong>. Cada modo é uma forma possível da energia existir ali.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mt-2">
              A regra clássica é o <strong>Teorema da Equipartição de Energia</strong>: em equilíbrio térmico, a energia total se distribui igualmente entre todos os graus de liberdade. A cada modo, independentemente de sua frequência, cabe uma energia média de <Equation displayMode={false}>{String.raw`k_B T`}</Equation>.
            </p>
          </div>

          {/* O Problema */}
          <div className="bg-red-900/40 border border-red-500/30 rounded-lg p-4">
            <h4 className="text-red-300 font-bold mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> O Problema (Catástrofe do Ultravioleta)
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Há um número <strong>infinito</strong> de modos de vibração na cavidade, e a quantidade de modos <strong>cresce rapidamente nas altas frequências</strong> (ultravioleta).
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mt-2">
              Se cada modo recebe uma energia média de <Equation displayMode={false}>{String.raw`k_B T`}</Equation>, então a energia total seria:
            </p>
            <div className="text-center my-3">
              <Equation displayMode={true}>{String.raw`E_{total} = \infty \times k_B T = \infty`}</Equation>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Isso significa que qualquer objeto em temperatura finita deveria irradiar uma quantidade <strong>infinita</strong> de energia, especialmente na região ultravioleta. Isso é completamente <strong>absurdo</strong> e contradiz a observação experimental.
            </p>
          </div>

          {/* A Solução de Planck */}
          <div className="bg-green-900/40 border border-green-500/30 rounded-lg p-4">
            <h4 className="text-green-300 font-bold mb-2 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" /> A Solução de Planck (Quantização)
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Planck propôs que a energia não é emitida de forma contínua, mas em <strong>"pacotes" discretos</strong> (quanta), cujo "preço" depende da frequência:
            </p>
            <div className="text-center my-3">
              <Equation displayMode={true}>{String.raw`E = h\nu`}</Equation>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Em <strong>baixas frequências</strong>, <Equation displayMode={false}>{String.raw`h\nu \ll k_B T`}</Equation> → o pacote é barato; os modos são facilmente excitados.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mt-2">
              Em <strong>altas frequências</strong>, <Equation displayMode={false}>{String.raw`h\nu \gg k_B T`}</Equation> → o pacote é muito caro; <Equation displayMode={false}>{String.raw`k_B T`}</Equation> não é suficiente para excitá-los com facilidade.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mt-2">
              <strong>Resultado:</strong> Os modos de alta frequência ficam <strong>fortemente suprimidos</strong> — participam muito pouco da troca de energia. Assim, a energia total permanece <strong>finita</strong> e a curva de radiação tende a <strong>zero</strong> em frequências muito altas, resolvendo a catástrofe.
            </p>
          </div>
        </div>
      </div>

      {/* Gráfico Interativo */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Comparação: Teoria Clássica vs. Realidade</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          O gráfico abaixo mostra a dramática diferença entre a previsão clássica (Lei de Rayleigh-Jeans) e a realidade (Lei de Planck). Use o controle de temperatura para explorar como o espectro muda:
        </p>
        <TheoryVsRealityGraph />
      </div>

      {/* Seção: Analogia da Festa */}
      <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Texto 2: Analogia — A Festa com Regras Quânticas</h3>
        
        <div className="space-y-4">
          <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
            <h4 className="text-purple-300 font-bold mb-2">O Cenário</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Na física clássica, a festa era um <strong>buffet livre</strong>: o garçom passava servindo um petisco para cada convidado, igualmente, sem distinção.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mt-2">
              <strong>Planck mudou as regras da festa</strong> — o garçom agora usa uma <strong>máquina de fichas de petiscos</strong>.
            </p>
          </div>

          <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
            <h4 className="text-purple-300 font-bold mb-2">A Nova Regra de Planck</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• <strong>Preço do petisco:</strong> cada tipo de convidado (frequência) exige fichas de valor exato: <Equation displayMode={false}>{String.raw`\Delta E = h\nu`}</Equation></li>
              <li>• <strong>Orçamento térmico:</strong> o garçom dispõe, em média, de <Equation displayMode={false}>{String.raw`k_B T`}</Equation> por convidado</li>
              <li>• <strong>Baixas frequências:</strong> <Equation displayMode={false}>{String.raw`h\nu \ll k_B T`}</Equation> → o garçom tem fichas suficientes e serve quase todos</li>
              <li>• <strong>Altas frequências:</strong> <Equation displayMode={false}>{String.raw`h\nu \gg k_B T`}</Equation> → o valor é alto demais, e o garçom quase não consegue servir</li>
            </ul>
          </div>

          <div className="bg-purple-900/40 border border-purple-500/30 rounded-lg p-4 text-center">
            <p className="text-purple-300 font-semibold">
              <strong>Resultado:</strong> Os convidados "caros" (ultravioleta) recebem poucos ou nenhum petisco. A quantidade total servida continua <strong>finita</strong>, e o problema da festa infinita desaparece — exatamente como na teoria de Planck!
            </p>
          </div>
        </div>
      </div>

      {/* Consequências Absurdas da Teoria Clássica */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Consequências Absurdas da Teoria Clássica</h3>
        <p className="text-gray-300 text-lg text-center leading-relaxed mb-6">
          Se a teoria clássica estivesse correta, teríamos cenários completamente absurdos:
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-red-900/40 border border-red-500/30 rounded-lg p-6">
            <Flame className="w-10 h-10 mx-auto text-red-400 mb-3" />
            <h4 className="font-bold text-white mb-2">Uma Vela</h4>
            <p className="text-sm text-gray-300">Deveria emitir energia infinita e nos incinerar instantaneamente.</p>
          </div>
          <div className="bg-orange-900/40 border border-orange-500/30 rounded-lg p-6">
            <Thermometer className="w-10 h-10 mx-auto text-orange-400 mb-3" />
            <h4 className="font-bold text-white mb-2">Seu Corpo (37°C)</h4>
            <p className="text-sm text-gray-300">Deveria brilhar como o Sol e derreter tudo ao redor.</p>
          </div>
          <div className="bg-sky-900/40 border border-sky-500/30 rounded-lg p-6">
            <Globe className="w-10 h-10 mx-auto text-sky-400 mb-3" />
            <h4 className="font-bold text-white mb-2">O Universo</h4>
            <p className="text-sm text-gray-300">Deveria estar completamente em chamas com radiação infinita.</p>
          </div>
        </div>
      </div>

      {/* Conclusão da Crise */}
      <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border border-yellow-500/30 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-yellow-300 mb-4">🌟 Nasce uma Nova Física</h3>
        <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto mb-4">
          A "catástrofe" era na verdade uma pista. Ela mostrava que as regras do jogo eram diferentes no mundo microscópico. A solução exigiria uma ideia revolucionária de Max Planck: a energia não é contínua, mas sim "quantizada" em pacotes discretos.
        </p>
        <p className="text-yellow-200 text-lg leading-relaxed max-w-3xl mx-auto font-semibold">
          A <strong>Física Quântica</strong> havia nascido, e com ela, uma compreensão completamente nova da natureza.
        </p>
      </div>

      <div className="flex justify-center pt-8">
  <button 
    onClick={() => onNavigate('ACT_4')}
    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-purple-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-red-500/30"
  >
    Ver o Ato 4: A Revolução Quântica <ArrowRight className="w-5 h-5" />
  </button>
</div>
    </div>
  );
}