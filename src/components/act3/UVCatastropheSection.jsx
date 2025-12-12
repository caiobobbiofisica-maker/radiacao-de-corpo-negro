// src/components/act3/UVCatastropheSection.jsx
import { ArrowRight, AlertTriangle } from 'lucide-react';
import { Equation } from '../Equation';

export function UVCatastropheSection({ onNavigate }) {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">A Catástrofe do Ultravioleta</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          O problema que revelou os limites da física clássica
        </p>
      </div>

      {/* Seção: O Problema */}
      <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 border border-red-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-red-400" />
          O Problema Clássico
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Quando os físicos aplicaram o Teorema da Equipartição de Energia à radiação térmica, encontraram um resultado perturbador:
        </p>
        <div className="bg-black/40 border border-red-500/20 rounded-lg p-6 mt-4">
          <p className="text-gray-300 text-lg leading-relaxed mb-3">
            Havia um número <strong className="text-red-300">infinito de modos de vibração</strong> em comprimentos de onda muito curtos (ultravioleta). Se cada modo recebesse uma quantidade igual de energia <Equation displayMode={false}>{String.raw`kT`}</Equation>, então a energia total seria <strong className="text-red-300">infinita</strong>!
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Isso levaria a uma previsão absurda: qualquer objeto aquecido deveria emitir uma quantidade infinita de radiação ultravioleta. Mas experimentalmente, isso não acontecia.
          </p>
        </div>
      </div>

      {/* Seção: As Consequências Absurdas */}
      <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Consequências Absurdas da Física Clássica</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          A física clássica previa que todo objeto com temperatura acima do zero absoluto deveria emitir energia em todas as frequências. Como existe um número infinito de frequências altas, a energia total seria infinita. Se essa regra fosse verdadeira, o mundo seria impossível:
        </p>
        <div className="space-y-4 mt-4">
          <div className="bg-black/40 border border-orange-500/20 rounded-lg p-4">
            <p className="text-orange-300 font-semibold mb-2">🔥 Uma Vela:</p>
            <p className="text-gray-300">
              Ao ser acesa, sua chama quente emitiria energia infinita, incinerando instantaneamente tudo ao seu redor.
            </p>
          </div>
          <div className="bg-black/40 border border-yellow-500/20 rounded-lg p-4">
            <p className="text-yellow-300 font-semibold mb-2">☀️ Seu Corpo (37°C):</p>
            <p className="text-gray-300">
              Mesmo estando "frio", seu corpo estaria liberando radiação infinita, brilhando mais que o Sol e derretendo tudo o que tocasse.
            </p>
          </div>
          <div className="bg-black/40 border border-blue-500/20 rounded-lg p-4">
            <p className="text-blue-300 font-semibold mb-2">🌍 O Universo:</p>
            <p className="text-gray-300">
              Estaria completamente saturado por uma radiação infinita e letal, tornando a formação de estrelas, planetas e a própria vida impossíveis.
            </p>
          </div>
        </div>
      </div>

      {/* Seção: O Sinal de Alerta */}
      <div className="bg-gradient-to-r from-indigo-900/40 to-blue-900/40 border border-indigo-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Um Sinal de Alerta</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Esse problema ficou conhecido como a <strong className="text-indigo-300">"Catástrofe do Ultravioleta"</strong> (ou "Catástrofe de Rayleigh-Jeans", em homenagem aos físicos que a descreveram). Era um sinal claro de que algo fundamental estava errado com nossa compreensão da física.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          A física clássica, que havia funcionado tão bem em tantas situações, tinha um limite. Quando aplicada ao problema da radiação térmica, ela produzia resultados que contradiziam completamente a experiência.
        </p>
      </div>

      {/* Seção: A Solução de Planck */}
      <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">A Solução de Planck</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Max Planck resolveu esse problema de uma forma revolucionária. Ele propôs que a energia não era contínua, mas sim <strong className="text-green-300">quantizada</strong> - emitida em "pacotes" discretos chamados <strong className="text-green-300">quanta</strong>, cuja energia dependia da frequência:
        </p>
        <div className="bg-black/40 border border-green-500/20 rounded-lg p-6 text-center">
          <Equation>{String.raw`E = h\nu`}</Equation>
          <p className="text-gray-400 mt-4 text-sm">
            onde h é a constante de Planck e ν é a frequência
          </p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Com essa ideia simples mas revolucionária, Planck conseguiu derivar uma fórmula que correspondia perfeitamente aos dados experimentais, resolvendo a catástrofe do ultravioleta e abrindo as portas para a mecânica quântica.
        </p>
      </div>

      <div className="text-center pt-8">
        <button 
          onClick={onNavigate} 
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-purple-500/30"
        >
          Explorar a Crise da Física <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
