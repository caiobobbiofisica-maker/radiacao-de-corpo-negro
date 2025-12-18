// src/components/act4/QuantaHypothesisSection.jsx

import { useState } from 'react';
import { ArrowRight, Zap, Lightbulb, BarChart2, Users, AlertCircle } from 'lucide-react';
import { Equation } from '../Equation';
import { QuantaEnergyChart } from './QuantaEnergyChart';

export function QuantaHypothesisSection({ onNavigate }) {
  const [showAnalogy, setShowAnalogy] = useState(true);
  const [showQuantaDemo, setShowQuantaDemo] = useState(false);

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Quebrando a Continuidade</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Para que a fórmula funcionasse, Planck percebeu que a energia das ondas de alta frequência deveria tender a zero. Para conseguir isso, ele fez algo que ia contra toda a intuição da física clássica.
        </p>
      </div>

      {/* Seção: A Ideia Revolucionária */}
      <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-yellow-400" />
          A Ideia Revolucionária
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Planck propôs que a energia não é emitida de forma contínua, mas em <strong className="text-purple-300">"pacotes" discretos</strong>, ou <strong className="text-purple-300">quanta</strong>. O "preço" de cada pacote depende da frequência:
        </p>
        <div className="bg-black/50 border border-purple-500/20 rounded-lg p-6 text-center mb-4">
          <Equation displayMode={true}>{String.raw`E = h\nu`}</Equation>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          Onde <Equation displayMode={false}>{String.raw`h`}</Equation> é a constante de Planck e <Equation displayMode={false}>{String.raw`\nu`}</Equation> é a frequência. Isso significa que ondas de alta frequência (ultravioleta) têm pacotes de energia muito grandes!
        </p>
      </div>

      {/* Analogia da Festa com Regras Quânticas */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <div className="text-center mb-6">
          <button 
            onClick={() => setShowAnalogy(!showAnalogy)}
            className="w-full inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 transition-all text-white px-6 py-3 text-base font-semibold rounded-lg shadow-lg shadow-purple-500/40"
          >
            {showAnalogy ? 'Ocultar' : 'Mostrar'} Analogia: A Festa com Regras Quânticas <Users className="w-5 h-5" />
          </button>
        </div>

        {showAnalogy && (
          <div className="mt-8 bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 space-y-6 animate-in fade-in duration-500">
            <h3 className="text-xl font-bold text-center text-white mb-6">🎉 A Festa com Máquina de Fichas de Petiscos</h3>
            
            <p className="text-gray-300 text-lg text-center leading-relaxed mb-6">
              Planck mudou as regras da festa. Agora, em vez de um buffet livre, o garçom usa uma <strong className="text-purple-300">máquina de fichas de petiscos</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4 space-y-3">
                <h4 className="text-purple-300 font-bold">💰 Preço do Petisco</h4>
                <p className="text-gray-300 text-sm">Cada tipo de convidado (frequência) exige fichas de valor exato:</p>
                <div className="text-center text-xs">
                  <Equation displayMode={false}>{String.raw`\Delta E = h\nu`}</Equation>
                </div>
              </div>
              <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4 space-y-3">
                <h4 className="text-purple-300 font-bold">💵 Orçamento Térmico</h4>
                <p className="text-gray-300 text-sm">O garçom dispõe, em média, de:</p>
                <div className="text-center text-xs">
                  <Equation displayMode={false}>{String.raw`k_B T`}</Equation>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-green-900/40 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-green-300 font-bold mb-2">✅ Baixas Frequências</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <Equation displayMode={false}>{String.raw`h\nu \ll k_B T`}</Equation> → O pacote é barato! O garçom tem fichas suficientes e serve quase todos os convidados. Comportamento clássico.
                </p>
              </div>
              <div className="bg-red-900/40 border border-red-500/30 rounded-lg p-4">
                <h4 className="text-red-300 font-bold mb-2">❌ Altas Frequências</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <Equation displayMode={false}>{String.raw`h\nu \gg k_B T`}</Equation> → O pacote é muito caro! O garçom quase não consegue servir. Os convidados "caros" (ultravioleta) recebem poucos ou nenhum petisco.
                </p>
              </div>
            </div>

            <div className="bg-purple-900/40 border border-purple-500/30 rounded-lg p-4 text-center">
              <p className="text-purple-300 font-semibold flex items-center justify-center gap-2">
                <AlertCircle className="w-5 h-5" />
                <span><strong>Resultado:</strong> Os convidados "caros" (ultravioleta) recebem poucos ou nenhum petisco. A quantidade total servida continua <strong>finita</strong>, e o problema da festa infinita desaparece!</span>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Simulação Interativa */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <BarChart2 className="text-purple-400" /> Visualizando os Quanta de Energia
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          A diferença entre a energia contínua (uma rampa suave) e a energia quantizada (degraus discretos) é a chave da descoberta de Planck. Veja como a energia só pode existir em múltiplos de <Equation displayMode={false}>{String.raw`h\nu`}</Equation>:
        </p>
        <button 
          onClick={() => setShowQuantaDemo(!showQuantaDemo)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all text-white"
        >
          {showQuantaDemo ? "Ocultar" : "Mostrar"} Simulação
        </button>
        {showQuantaDemo && <QuantaEnergyChart />}
      </div>

      {/* Seção: Por Que Funciona */}
      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Por Que a Solução Funciona</h3>
        <p className="text-xl text-green-200 leading-relaxed text-center">
          Ondas de alta frequência (ultravioleta) são "caras" e exigem pacotes de energia muito grandes (<Equation displayMode={false}>{String.raw`h\nu`}</Equation> grande). Como não há energia suficiente no sistema para criar muitos pacotes "caros", as vibrações ultravioletas são <strong>"congeladas"</strong> ou suprimidas. Isso resolve a catástrofe!
        </p>
      </div>

      {/* Seção: A Constante de Planck */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">A Constante de Planck</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          A constante <Equation displayMode={false}>{String.raw`h`}</Equation> (constante de Planck) é uma das constantes fundamentais da natureza:
        </p>
        <div className="bg-black/50 border border-white/10 rounded-lg p-6 text-center mb-4">
          <Equation displayMode={false}>{String.raw`h \approx 6.626 \times 10^{-34} \text{ J} \cdot \text{s}`}</Equation>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          Esse número minúsculo é a "moeda" do universo quântico. Ele determina a escala em que os efeitos quânticos se tornam importantes. Para objetos macroscópicos, <Equation displayMode={false}>{String.raw`h\nu`}</Equation> é tão pequeno que a quantização é imperceptível. Mas para átomos e luz, é fundamental!
        </p>
      </div>

      <div className="text-center pt-8">
        <button 
          onClick={() => onNavigate('ACT_4_FORMULA')}
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-purple-500/30"
        >
          Ver a Fórmula da Solução <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}