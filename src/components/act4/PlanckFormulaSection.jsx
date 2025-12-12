// src/components/act4/PlanckFormulaSection.jsx
import { ArrowRight, Calculator } from 'lucide-react';
import { Equation } from '../Equation';

export function PlanckFormulaSection({ onNavigate }) {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">A Fórmula de Planck</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A equação que descreve perfeitamente a radiação térmica
        </p>
      </div>

      {/* Seção: A Fórmula */}
      <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Calculator className="w-6 h-6 text-green-400" />
          A Fórmula Completa
        </h3>
        <div className="bg-black/40 border border-green-500/20 rounded-lg p-6 text-center">
          <Equation>{String.raw`u(\nu, T) = \frac{8\pi h\nu^3}{c^3} \frac{1}{e^{h\nu/kT} - 1}`}</Equation>
          <p className="text-gray-400 mt-4 text-sm">
            Densidade de energia espectral de Planck
          </p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Esta fórmula descreve como a energia se distribui entre diferentes frequências em um corpo negro em equilíbrio térmico.
        </p>
      </div>

      {/* Seção: Componentes da Fórmula */}
      <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Componentes da Fórmula</h3>
        <div className="space-y-4 mt-4">
          <div className="bg-black/40 border border-blue-500/20 rounded-lg p-4">
            <p className="text-blue-300 font-semibold mb-2">h (Constante de Planck)</p>
            <p className="text-gray-300">
              h = 6,626 × 10⁻³⁴ J·s. Uma das constantes fundamentais da natureza que relaciona energia e frequência.
            </p>
          </div>
          <div className="bg-black/40 border border-blue-500/20 rounded-lg p-4">
            <p className="text-blue-300 font-semibold mb-2">ν (Frequência)</p>
            <p className="text-gray-300">
              A frequência da radiação. Quanto maior a frequência, maior a energia do quantum.
            </p>
          </div>
          <div className="bg-black/40 border border-blue-500/20 rounded-lg p-4">
            <p className="text-blue-300 font-semibold mb-2">c (Velocidade da Luz)</p>
            <p className="text-gray-300">
              c = 3 × 10⁸ m/s. A velocidade constante da luz no vácuo.
            </p>
          </div>
          <div className="bg-black/40 border border-blue-500/20 rounded-lg p-4">
            <p className="text-blue-300 font-semibold mb-2">k (Constante de Boltzmann)</p>
            <p className="text-gray-300">
              k = 1,381 × 10⁻²³ J/K. Relaciona temperatura com energia térmica.
            </p>
          </div>
          <div className="bg-black/40 border border-blue-500/20 rounded-lg p-4">
            <p className="text-blue-300 font-semibold mb-2">T (Temperatura Absoluta)</p>
            <p className="text-gray-300">
              A temperatura do corpo negro em Kelvin. Quanto maior a temperatura, mais energia é emitida.
            </p>
          </div>
        </div>
      </div>

      {/* Seção: Por Que Funciona */}
      <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Por Que Esta Fórmula Funciona</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          A chave para a fórmula de Planck está no termo exponencial <Equation displayMode={false}>{String.raw`e^{h\nu/kT}`}</Equation>. Este termo captura a quantização da energia:
        </p>
        <div className="space-y-4 mt-4">
          <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
            <p className="text-purple-300 font-semibold mb-2">Baixas Frequências (Infravermelho)</p>
            <p className="text-gray-300">
              Quando <Equation displayMode={false}>{String.raw`h\nu \ll kT`}</Equation>, o termo exponencial é pequeno e a fórmula se reduz à lei clássica de Rayleigh-Jeans.
            </p>
          </div>
          <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
            <p className="text-purple-300 font-semibold mb-2">Altas Frequências (Ultravioleta)</p>
            <p className="text-gray-300">
              Quando <Equation displayMode={false}>{String.raw`h\nu \gg kT`}</Equation>, o termo exponencial é grande e a energia vai para zero, evitando a catástrofe ultravioleta!
            </p>
          </div>
        </div>
      </div>

      {/* Seção: Sucesso Experimental */}
      <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border border-yellow-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Sucesso Experimental</h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          A fórmula de Planck corresponde <strong className="text-yellow-300">perfeitamente</strong> aos dados experimentais. Não há discrepâncias, não há ajustes necessários. É uma descrição precisa de como a natureza funciona em nível fundamental.
        </p>
      </div>

      <div className="text-center pt-8">
        <button 
          onClick={onNavigate} 
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-green-500/30"
        >
          Explorar a Revolução Quântica <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}