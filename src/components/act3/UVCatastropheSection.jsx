// src/components/act3/UVCatastropheSection.jsx
import { useState } from 'react';
import { ArrowRight, Users, AlertTriangle, HelpCircle, Sigma, Zap } from 'lucide-react';
import { Equation } from '../Equation';

export function UVCatastropheSection({ onNavigate }) {
  const [showAnalogy, setShowAnalogy] = useState(true);
  const [showMath, setShowMath] = useState(false);

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">A Catástrofe do Ultravioleta</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Como a teoria clássica levou a conclusões absurdas
        </p>
      </div>

      {/* Seção: O Cenário Clássico */}
      <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">O Cenário Clássico</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          No modelo clássico, a cavidade é um "forno" em equilíbrio térmico. Dentro dela, a energia existe na forma de <strong className="text-blue-300">ondas estacionárias</strong>, chamadas de <strong className="text-blue-300">modos de vibração</strong>. Cada modo é uma forma possível da energia existir ali.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          A regra clássica é o <strong className="text-blue-300">Teorema da Equipartição de Energia</strong>: em equilíbrio térmico, a energia total se distribui <strong>igualmente entre todos os graus de liberdade</strong>. A cada modo, independentemente de sua frequência, cabe uma energia média de <Equation displayMode={false}>{String.raw`k_B T`}</Equation>.
        </p>
      </div>

      {/* Analogia da Festa */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <div className="text-center">
          <button 
            onClick={() => setShowAnalogy(!showAnalogy)}
            className="w-full inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 transition-all text-white px-6 py-3 text-base font-semibold rounded-lg shadow-lg shadow-purple-500/40"
          >
            {showAnalogy ? 'Ocultar' : 'Mostrar'} Analogia: A Festa da Energia <Users className="w-5 h-5" />
          </button>
        </div>

        {showAnalogy && (
          <div className="mt-8 bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 space-y-6 animate-in fade-in duration-500">
            <h3 className="text-xl font-bold text-center text-white mb-6">🎉 A Festa da Energia com Regras Quânticas</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4 space-y-3">
                <h4 className="text-purple-300 font-bold">🏠 A Cavidade = Salão de Festas</h4>
                <p className="text-gray-300 text-sm">Um salão onde acontece a distribuição de energia entre os convidados (modos).</p>
              </div>
              <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4 space-y-3">
                <h4 className="text-purple-300 font-bold">👥 Modos = Convidados</h4>
                <p className="text-gray-300 text-sm">Cada modo de vibração é um convidado que recebe uma porção de energia.</p>
              </div>
              <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4 space-y-3">
                <h4 className="text-purple-300 font-bold">🍽️ Energia Térmica = Bandeja de Petiscos</h4>
                <p className="text-gray-300 text-sm">A energia térmica (kT) é como uma bandeja de petiscos para distribuir.</p>
              </div>
              <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4 space-y-3">
                <h4 className="text-purple-300 font-bold">🤵 Equipartição = Garçom Justo</h4>
                <p className="text-gray-300 text-sm">O garçom segue a regra: "um petisco para cada convidado, igualmente".</p>
              </div>
            </div>

            <div className="bg-red-900/40 border border-red-500/50 rounded-lg p-4">
              <p className="text-center text-red-300 font-semibold flex items-center justify-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                <span><strong>O Problema Catastrófico:</strong> Havia um número <span className="text-yellow-300">infinito</span> de convidados na área das "altas frequências" (ultravioleta). Ao seguir a regra, o garçom teria que distribuir uma quantidade <span className="text-yellow-300">infinita de petiscos!</span></span>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Seção: O Problema Físico */}
      <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 border border-red-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-red-400" />
          O Problema (Catástrofe do Ultravioleta)
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Há um número <strong className="text-red-300">infinito</strong> de modos de vibração na cavidade, e a quantidade de modos <strong className="text-red-300">cresce rapidamente nas altas frequências</strong> (ultravioleta).
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Se cada modo recebe uma energia média de <Equation displayMode={false}>{String.raw`k_B T`}</Equation>, então a energia total seria:
        </p>
        <div className="bg-black/50 border border-red-500/20 rounded-lg p-4 text-center mb-4">
          <Equation displayMode={true}>{String.raw`E_{total} = \infty \times k_B T = \infty`}</Equation>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          Isso significa que qualquer objeto em temperatura finita deveria irradiar uma quantidade <strong className="text-red-300">infinita</strong> de energia! Especialmente na região ultravioleta. Isso é completamente <strong className="text-red-300">absurdo</strong> e contradiz a observação experimental.
        </p>
      </div>

      {/* Por que "Catástrofe do Ultravioleta"? */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <HelpCircle className="text-indigo-400" /> Por que "Catástrofe do Ultravioleta"?
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed text-center mb-4">
          O termo foi cunhado porque o problema se manifestava principalmente nas <strong className="text-indigo-300">altas frequências</strong> - a região ultravioleta do espectro.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed text-center mb-4">
          A densidade de energia prevista pela teoria clássica (Lei de Rayleigh-Jeans) contém um termo <Equation displayMode={false}>{String.raw`\nu^2`}</Equation>, que significa: à medida que a frequência aumenta, a densidade de energia prevista <strong className="text-red-400">disparava para o infinito</strong>.
        </p>
        <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-lg p-4">
          <p className="text-center text-indigo-200 font-semibold">
            Era uma verdadeira "catástrofe" para a física clássica: seus princípios mais fundamentais levavam a conclusões completamente absurdas e contraditórias com a realidade.
          </p>
        </div>
      </div>

      {/* Seção da Matemática da Catástrofe */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <button 
          onClick={() => setShowMath(!showMath)}
          className={`w-full inline-flex items-center justify-center gap-2 text-white px-6 py-3 text-base font-semibold rounded-lg shadow-lg transition-all ${
            showMath 
            ? 'bg-red-600 hover:bg-red-700 shadow-red-500/40' 
            : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/40'
          }`}
        >
          {showMath ? 'Ocultar' : 'Mostrar'} a Matemática da Catástrofe <Sigma className="w-5 h-5" />
        </button>

        {showMath && (
          <div className="mt-8 space-y-6 animate-in fade-in duration-500">
            {/* Card 1: Lei de Rayleigh-Jeans */}
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-white text-center mb-4">Lei de Rayleigh-Jeans (Clássica)</h4>
              <div className="text-center mb-4">
                <Equation displayMode={true}>{String.raw`\rho_T(\nu) = \frac{8\pi k_B T}{c^3} \nu^2`}</Equation>
              </div>
              <p className="text-sm text-gray-300 text-center">
                A intensidade de radiação cresce com o <strong className="text-red-400">quadrado da frequência</strong> (<Equation displayMode={false}>{String.raw`\nu^2`}</Equation>). Isso é o problema!
              </p>
            </div>

            {/* Card 2: Integração */}
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-white text-center mb-4">Energia Total (Integração)</h4>
              <div className="text-center mb-4">
                <Equation displayMode={true}>{String.raw`E = \int_0^\infty \rho_T(\nu) \,d\nu = \int_0^\infty \frac{8\pi k_B T}{c^3} \nu^2 \,d\nu`}</Equation>
              </div>
              <p className="text-sm text-gray-300 text-center">
                Integrando <Equation displayMode={false}>{String.raw`\nu^2`}</Equation> de zero até <strong className="text-yellow-400">infinito...</strong>
              </p>
            </div>

            {/* Card 3: Resultado */}
            <div className="bg-red-900/40 border border-red-500/30 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-white text-center mb-4">O Resultado Absurdo</h4>
              <div className="text-center mb-4 text-4xl">
                <Equation displayMode={true}>{String.raw`E = \infty`}</Equation>
              </div>
              <p className="text-sm text-gray-300 text-center">
                <strong className="text-yellow-300">Energia infinita!</strong> Qualquer objeto aquecido deveria brilhar com intensidade infinita no ultravioleta. Isso nunca foi observado na natureza!
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Consequências Absurdas */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Zap className="w-6 h-6 text-yellow-400" />
          Consequências Absurdas
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-red-900/40 border border-red-500/30 rounded-lg p-4 text-center">
            <p className="text-red-300 font-bold mb-2">🔥 Uma Vela</p>
            <p className="text-gray-300 text-sm">Deveria emitir energia infinita e nos incinerizaria instantaneamente.</p>
          </div>
          <div className="bg-red-900/40 border border-red-500/30 rounded-lg p-4 text-center">
            <p className="text-red-300 font-bold mb-2">☀️ Seu Corpo (37°C)</p>
            <p className="text-gray-300 text-sm">Deveria brilhar como o Sol derretendo tudo ao redor.</p>
          </div>
          <div className="bg-red-900/40 border border-red-500/30 rounded-lg p-4 text-center">
            <p className="text-red-300 font-bold mb-2">🌍 O Universo</p>
            <p className="text-gray-300 text-sm">Deveria estar completamente em chamas com radiação ultravioleta.</p>
          </div>
        </div>
      </div>

      <div className="text-center pt-8">
        <button 
          onClick={() => onNavigate('ACT_3_CRISIS')}
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-purple-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-red-500/30"
        >
          Ver a Crise da Física <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
