// src/components/act1/BlackBodyIdealSection.jsx
import { ArrowRight, BookOpen } from 'lucide-react';

export function BlackBodyIdealSection({ onNavigate }) {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">O Corpo Negro Ideal</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Entenda o conceito que revolucionou a física
        </p>
      </div>

      {/* Seção: O que é um Corpo Negro */}
      <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">O que é um Corpo Negro?</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Corpos diferentes, como o carvão e o tungstênio, emitem radiação de maneiras distintas: cada material absorve e reflete parte da luz do ambiente de forma particular. Para compreender as leis universais que regem a radiação térmica — aquelas que não dependem do material — os físicos conceberam um modelo ideal: o <strong className="text-cyan-300">emissor perfeito, ou corpo negro</strong>.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Um corpo negro é um objeto teórico que absorve toda a radiação que incide sobre ele (não reflete nada) e emite radiação térmica de forma perfeitamente uniforme em todas as direções.
        </p>
      </div>

      {/* Seção: Propriedades do Corpo Negro */}
      <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Propriedades do Corpo Negro</h3>
        <div className="space-y-4 mt-4">
          <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
            <p className="text-purple-300 font-semibold mb-2">Absorção Perfeita</p>
            <p className="text-gray-300">
              Absorve 100% da radiação que incide sobre ele, independentemente da frequência ou ângulo de incidência.
            </p>
          </div>
          <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
            <p className="text-purple-300 font-semibold mb-2">Emissão Uniforme</p>
            <p className="text-gray-300">
              Emite radiação uniformemente em todas as direções, sem preferência por qualquer direção particular.
            </p>
          </div>
          <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
            <p className="text-purple-300 font-semibold mb-2">Espectro Universal</p>
            <p className="text-gray-300">
              O espectro de radiação depende apenas da temperatura, não do material ou da forma do objeto.
            </p>
          </div>
        </div>
      </div>

      {/* Seção: Por Que é Importante */}
      <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Por Que é Importante?</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Ao estudar o corpo negro ideal, os físicos conseguem formular leis matemáticas que descrevem a radiação térmica de forma universal. Essas leis não dependem dos detalhes específicos de cada material.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          <strong className="text-green-300">"Um corpo negro é o melhor absorvedor e, portanto, também o melhor emissor. Qualquer tentativa de melhorar a absorção de radiação em qualquer frequência resultaria em uma redução da intensidade. Assim, ele não 'polui' sua própria luz com reflexos, emitindo um espectro térmico puro e universal."</strong>
        </p>
      </div>

      {/* Seção: Histórico e Contexto */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-400" />
          Um Conceito Revolucionário
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          O conceito de corpo negro nasceu da necessidade prática de compreender como objetos reais emitem luz. Ao isolar as propriedades universais da radiação térmica — independentes do material — os físicos conseguiram formular leis matemáticas precisas. Este foi o primeiro passo para uma das maiores revoluções científicas: o nascimento da mecânica quântica.
        </p>
      </div>

      <div className="text-center pt-8">
        <button 
          onClick={onNavigate} 
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-blue-500/30"
        >
          Explorar o Laboratório da Natureza <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}