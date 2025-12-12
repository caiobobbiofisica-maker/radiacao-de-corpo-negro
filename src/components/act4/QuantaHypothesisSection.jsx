// src/components/act4/QuantumHypothesisSection.jsx
import { ArrowRight, Zap } from 'lucide-react';
import { Equation } from '../Equation';

export function QuantumHypothesisSection({ onNavigate }) {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">A Hipótese dos Quanta</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Uma ideia tão radical que levou décadas para ser aceita
        </p>
      </div>

      {/* Seção: O Que é um Quantum */}
      <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 border border-red-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">O Que é um Quantum?</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Um <strong className="text-red-300">quantum</strong> (plural: quanta) é a menor quantidade possível de uma quantidade física que pode existir de forma independente. Para a radiação eletromagnética, um quantum é um "pacote" de energia indivisível.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          A ideia é que a radiação não é emitida continuamente, mas em pulsos discretos. Cada pulso tem uma energia bem definida que depende da frequência.
        </p>
      </div>

      {/* Seção: Implicações Profundas */}
      <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-purple-400" />
          Implicações Profundas
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          A hipótese dos quanta tinha implicações que iam muito além do problema da radiação térmica:
        </p>
        <div className="space-y-4 mt-4">
          <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
            <p className="text-purple-300 font-semibold mb-2">Desafia a Intuição</p>
            <p className="text-gray-300">
              Nossa experiência cotidiana nos diz que a energia é contínua. Podemos derramar qualquer quantidade de água, desde uma gota até um oceano. Mas a natureza, em nível microscópico, não funciona assim.
            </p>
          </div>
          <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
            <p className="text-purple-300 font-semibold mb-2">Questiona a Realidade</p>
            <p className="text-gray-300">
              Se a energia é quantizada, o que isso significa para a natureza fundamental da realidade? Como a matéria absorve e emite energia em pacotes?
            </p>
          </div>
          <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
            <p className="text-purple-300 font-semibold mb-2">Abre Novas Perguntas</p>
            <p className="text-gray-300">
              Se a radiação é quantizada, será que a matéria também é? Será que tudo no universo é feito de pacotes discretos?
            </p>
          </div>
        </div>
      </div>

      {/* Seção: Aceitação Lenta */}
      <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Uma Aceitação Lenta</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Curiosamente, nem mesmo Planck acreditava completamente em sua própria hipótese! Ele via a quantização como um truque matemático para fazer os números funcionarem, não como uma descrição da realidade física.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Levou muitos anos e muitas evidências experimentais para que a comunidade científica aceitasse que a quantização era real. Cientistas como Albert Einstein, Niels Bohr e Werner Heisenberg tiveram que desenvolver essa ideia e mostrar suas implicações.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Hoje, a quantização é um dos pilares da mecânica quântica e um dos conceitos mais fundamentais da física moderna.
        </p>
      </div>

      {/* Seção: O Prêmio Nobel */}
      <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border border-yellow-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Reconhecimento</h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          Max Planck recebeu o Prêmio Nobel de Física em 1918 "em reconhecimento aos serviços prestados ao avanço da física pela descoberta dos quanta de energia". Essa descoberta mudou para sempre a forma como entendemos o universo.
        </p>
      </div>

      <div className="text-center pt-8">
        <button 
          onClick={onNavigate} 
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-indigo-500/30"
        >
          Explorar a Fórmula de Planck <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}