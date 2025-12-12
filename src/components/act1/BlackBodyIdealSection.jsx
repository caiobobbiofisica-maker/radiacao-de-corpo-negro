// src/components/act1/BlackBodyIdealSection.jsx
import { ArrowRight, BookOpen } from 'lucide-react';
import { Equation } from '../Equation';

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
          Esse corpo ideal é definido como aquele que absorve toda a radiação incidente e cuja emissão depende apenas da temperatura, não da composição. O conceito permitiu formular as leis fundamentais da radiação térmica, abrindo caminho para a física quântica. Apesar do nome, o corpo negro não precisa ser literalmente preto; sua aparência varia com a temperatura.
        </p>
      </div>

      {/* Seção: As Duas Propriedades Fundamentais */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">As Duas Propriedades Fundamentais</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-6">
            <h4 className="text-xl font-bold text-purple-300 mb-3">Propriedade 1</h4>
            <p className="text-gray-300 text-lg leading-relaxed">
              Ele absorve toda a radiação que incide sobre ele, sem refletir absolutamente nada.
            </p>
          </div>
          <div className="bg-indigo-900/30 border border-indigo-500/30 rounded-lg p-6">
            <h4 className="text-xl font-bold text-indigo-300 mb-3">Propriedade 2</h4>
            <p className="text-gray-300 text-lg leading-relaxed">
              A radiação que ele emite depende apenas e unicamente de sua temperatura, e não do material de que é feito.
            </p>
          </div>
        </div>
      </div>

      {/* Seção: O Ponto-Chave */}
      <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border border-yellow-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">O Ponto-Chave</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Um <strong className="text-yellow-300">absolvedor perfeito é também o emissor mais perfeito</strong> possível. Se ele absorve toda a radiação que recebe, só pode manter a temperatura constante emitindo na mesma intensidade. Assim, ele não "polui" sua própria luz com reflexos, emitindo um espectro térmico puro e universal.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          <strong className="text-yellow-300">"Um absolvedor perfeito é também o emissor mais perfeito possível. Se ele absorve toda a radiação que recebe, só pode manter a temperatura constante emitindo na mesma intensidade. Assim, ele não 'polui' sua própria luz com reflexos, emitindo um espectro térmico puro e universal."</strong>
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