// src/components/act4/PlanckIntroSection.jsx
import { ArrowRight, Lightbulb } from 'lucide-react';
import { Equation } from '../Equation';

export function PlanckIntroSection({ onNavigate }) {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Max Planck e a Revolução</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A ideia revolucionária que mudou para sempre a física
        </p>
      </div>

      {/* Seção: O Homem */}
      <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Max Planck (1858-1947)</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Max Planck era um físico teórico alemão que trabalhava para a indústria de eletricidade. Seu trabalho era resolver um problema prático: como descrever matematicamente a radiação emitida por objetos aquecidos.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Planck não estava tentando revolucionar a física. Ele estava apenas tentando encontrar uma fórmula que correspondesse aos dados experimentais. Mas ao fazer isso, ele descobriu algo que mudaria para sempre nossa compreensão do universo.
        </p>
      </div>

      {/* Seção: A Ideia Revolucionária */}
      <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border border-yellow-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-yellow-400" />
          A Ideia Revolucionária
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Em 1900, Planck propôs algo radical: a energia não é contínua, mas sim <strong className="text-yellow-300">quantizada</strong>. Ela é emitida em "pacotes" discretos chamados <strong className="text-yellow-300">quanta</strong>, cuja energia depende da frequência da radiação.
        </p>
        <div className="bg-black/40 border border-yellow-500/20 rounded-lg p-6 text-center">
          <Equation>{String.raw`E = h\nu`}</Equation>
          <p className="text-gray-400 mt-4 text-sm">
            onde h é a constante de Planck (6,626 × 10⁻³⁴ J·s) e ν é a frequência
          </p>
        </div>
      </div>

      {/* Seção: O Significado */}
      <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">O Que Isso Significa?</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Essa ideia parecia simples, mas tinha implicações profundas:
        </p>
        <div className="space-y-4 mt-4">
          <div className="bg-black/40 border border-blue-500/20 rounded-lg p-4">
            <p className="text-blue-300 font-semibold mb-2">1. Energia Discreta</p>
            <p className="text-gray-300">
              A energia não pode ter qualquer valor. Ela só pode ser múltipla de <Equation displayMode={false}>{String.raw`h\nu`}</Equation>.
            </p>
          </div>
          <div className="bg-black/40 border border-blue-500/20 rounded-lg p-4">
            <p className="text-blue-300 font-semibold mb-2">2. Frequência Importa</p>
            <p className="text-gray-300">
              Quanto maior a frequência, maior a energia do quantum. Luz ultravioleta tem quanta de energia muito maiores que luz vermelha.
            </p>
          </div>
          <div className="bg-black/40 border border-blue-500/20 rounded-lg p-4">
            <p className="text-blue-300 font-semibold mb-2">3. Resolução da Catástrofe</p>
            <p className="text-gray-300">
              Modos de alta frequência (ultravioleta) têm quanta de energia tão altos que quase nunca são excitados em temperaturas normais, resolvendo o problema da energia infinita.
            </p>
          </div>
        </div>
      </div>

      {/* Seção: A Fórmula de Planck */}
      <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">A Fórmula de Planck</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Usando essa ideia de quantização, Planck derivou uma fórmula que descrevia perfeitamente a distribuição de energia na radiação térmica:
        </p>
        <div className="bg-black/40 border border-green-500/20 rounded-lg p-6 text-center">
          <Equation>{String.raw`u(\nu, T) = \frac{8\pi h\nu^3}{c^3} \frac{1}{e^{h\nu/kT} - 1}`}</Equation>
          <p className="text-gray-400 mt-4 text-sm">
            A fórmula de Planck para a densidade de energia espectral
          </p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Essa fórmula correspondia <strong className="text-green-300">perfeitamente</strong> aos dados experimentais. Não havia discrepâncias. O problema estava resolvido.
        </p>
      </div>

      <div className="text-center pt-8">
        <button 
          onClick={onNavigate} 
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-purple-500/30"
        >
          Ver o Impacto da Revolução <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}