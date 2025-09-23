// src/components/act3/UVCatastropheSection.jsx
import { useState } from 'react';
import { ArrowRight, Users, AlertTriangle, HelpCircle, Sigma } from 'lucide-react';
import { Equation } from '../Equation';

export function UVCatastropheSection({ onNavigate }) {
  const [showAnalogy, setShowAnalogy] = useState(true);
  const [showMath, setShowMath] = useState(false); // Novo estado para a matemática

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Passo 3: Distribuindo a Energia</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Aqui veio o passo crucial. Eles usaram um dos pilares da termodinâmica clássica: o <strong>Teorema da Equipartição de Energia</strong>.
        </p>
      </div>

      {/* Analogia da Festa */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <p className="text-lg text-gray-300 leading-relaxed text-center mb-6">
          Esse teorema afirmava que, em um sistema em equilíbrio térmico, a energia total se distribui <strong>igualmente</strong> entre todos os graus de liberdade. A cada onda, independentemente de sua frequência, caberia uma energia média de <Equation displayMode={false}>kT</Equation>.
        </p>
        <div className="text-center">
          <button 
            onClick={() => setShowAnalogy(!showAnalogy)}
            className="w-full inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 transition-all text-white px-6 py-3 text-base font-semibold rounded-lg shadow-lg shadow-purple-500/40"
          >
            {showAnalogy ? 'Ocultar' : 'Mostrar'} Analogia da Festa da Energia <Users className="w-5 h-5" />
          </button>
        </div>

        {showAnalogy && (
           <div className="mt-8 bg-purple-900/20 border border-purple-500/30 rounded-lg p-6 space-y-6 animate-in fade-in duration-500">
            <h3 className="text-xl font-bold text-center text-white mb-4">🎉 A Festa da Energia</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p>🏠 <strong>A Cavidade = Salão de Festas</strong><br/><span className="text-gray-400 text-sm">A cavidade é um salão de festas onde acontece a distribuição de energia.</span></p>
                <p>🎶 <strong>Modos = Convidados</strong><br/><span className="text-gray-400 text-sm">Cada modo de vibração é um convidado na festa.</span></p>
              </div>
              <div className="space-y-4">
                <p>🍤 <strong>Energia Térmica = Bandeja de Petiscos</strong><br/><span className="text-gray-400 text-sm">A energia térmica (kT) é como uma bandeja de petiscos para distribuir.</span></p>
                <p>🤵 <strong>Equipartição = Garçom</strong><br/><span className="text-gray-400 text-sm">O teorema é a regra do garçom: "um petisco para cada um".</span></p>
              </div>
            </div>
            <div className="bg-red-900/40 border border-red-500/50 rounded-lg p-4 mt-4">
              <p className="text-center text-red-300 font-semibold">
                <AlertTriangle className="inline w-5 h-5 mr-2" />
                <strong>O Problema:</strong> Havia um número <span className="text-yellow-300">quase infinito</span> de convidados na área das "altas frequências" (a turma do ultravioleta). Ao seguir a regra, o garçom teria que distribuir uma quantidade <span className="text-yellow-300">infinita de petiscos!</span>
              </p>
            </div>
          </div>
        )}
      </div>
      
      {/* Por que "Catástrofe do Ultravioleta"? */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <HelpCircle className="text-indigo-400" /> Por que "Catástrofe do Ultravioleta"?
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed text-center">
          O termo foi cunhado porque o problema se manifestava principalmente nas <strong className="text-indigo-300">altas frequências</strong> - a região ultravioleta do espectro.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed text-center mt-4">
          Como o termo <Equation displayMode={false}>\nu^2</Equation> na fórmula sugere, à medida que a frequência aumentava, a densidade de energia prevista pela teoria <strong className="text-red-400">disparava para o infinito</strong>.
        </p>
        <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-lg p-4 mt-6">
          <p className="text-center text-indigo-200 font-semibold">Era uma verdadeira "catástrofe" para a física clássica: seus princípios mais fundamentais levavam a conclusões completamente absurdas.</p>
        </div>
      </div>

      {/* Seção da Matemática da Catástrofe (Nova) */}
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
            <div className="bg-gray-800/50 p-6 rounded-lg text-center">
              <h4 className="text-lg font-bold text-white">Lei de Rayleigh-Jeans</h4>
              <div className="my-3"><Equation>{String.raw`\rho_T(\nu) = \left(\frac{8\pi k T}{c^3}\right) \times \nu^2`}</Equation></div>
              <p className="text-sm text-gray-400">A intensidade cresce com o <strong className="text-red-400">quadrado da frequência</strong> - isso é o problema!</p>
            </div>
            {/* Card 2: Integração */}
            <div className="bg-gray-800/50 p-6 rounded-lg text-center">
              <h4 className="text-lg font-bold text-white">Energia Total (Integração)</h4>
              <div className="my-3"><Equation>{String.raw`E = \int_0^\infty \rho_T(\nu) \,d\nu = \int_0^\infty \left(\frac{8\pi k T}{c^3}\right) \nu^2 \,d\nu`}</Equation></div>
              <p className="text-sm text-gray-400">Integrando `ν²` de zero até <strong className="text-yellow-400">infinito...</strong></p>
            </div>
            {/* Card 3: Resultado */}
            <div className="bg-gray-800/50 p-6 rounded-lg text-center">
              <h4 className="text-lg font-bold text-white">O Resultado</h4>
              <div className="my-3 text-4xl"><Equation>{String.raw`E = \infty`}</Equation></div>
              <p className="text-sm text-gray-400"><strong className="text-yellow-300">Energia infinita!</strong> Qualquer objeto aquecido deveria brilhar com intensidade infinita no ultravioleta!</p>
            </div>
          </div>
        )}
      </div>

      <div className="text-center pt-8">
        <button 
          onClick={onNavigate} 
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-purple-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-red-500/30"
        >
          Ver a Crise da Física <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}