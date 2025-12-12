// src/components/act1/LaboratorySection.jsx
import { ArrowRight, Microscope } from 'lucide-react';

export function LaboratorySection({ onNavigate }) {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">O Laboratório da Natureza</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Como os cientistas estudam o corpo negro na prática
        </p>
      </div>

      {/* Seção: O Contexto Histórico */}
      <div className="bg-gradient-to-r from-amber-900/40 to-orange-900/40 border border-amber-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Por Que Estudar o Corpo Negro?</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Embora o estudo da radiação do corpo negro tenha levado a uma das maiores revoluções da física (o nascimento da mecânica quântica), sua motivação inicial estava fortemente ligada a interesses comerciais e industriais muito práticos da época, especificamente na <strong className="text-amber-300">indústria de iluminação elétrica</strong>.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Aqui está o porquê:
        </p>
      </div>

      {/* Seção: Os Problemas Práticos */}
      <div className="space-y-4">
        <div className="bg-black/40 border border-white/10 rounded-lg p-6">
          <h4 className="text-xl font-bold text-orange-400 mb-3">1. O Problema da Lâmpada Eficiente</h4>
          <p className="text-gray-300 text-lg leading-relaxed">
            No final do século XIX, a indústria de iluminação elétrica estava crescendo rapidamente. O grande desafio comercial era produzir lâmpadas incandescentes que fossem o mais eficientes possível.
          </p>
        </div>

        <div className="bg-black/40 border border-white/10 rounded-lg p-6">
          <h4 className="text-xl font-bold text-yellow-400 mb-3">2. A Questão da Eficiência</h4>
          <p className="text-gray-300 text-lg leading-relaxed">
            Uma lâmpada "eficiente" era aquela que convertia a maior parte da energia elétrica em <strong className="text-yellow-300">luz visível</strong>, e o mínimo possível em <strong className="text-yellow-300">calor</strong> (radiação infravermelha, que é invisível e desperdiça energia).
          </p>
        </div>

        <div className="bg-black/40 border border-white/10 rounded-lg p-6">
          <h4 className="text-xl font-bold text-red-400 mb-3">3. A Conexão com o Corpo Negro</h4>
          <p className="text-gray-300 text-lg leading-relaxed">
            O filamento de uma lâmpada incandescente, ao ser aquecido pela eletricidade, brilha. Ele se comporta de forma muito parecida com um corpo negro (ou, mais tecnicamente, um "corpo cinza", mas os princípios são os mesmos). O filamento absorve energia (elétrica) e a emite como radiação eletromagnética (luz e calor).
          </p>
        </div>

        <div className="bg-black/40 border border-white/10 rounded-lg p-6">
          <h4 className="text-xl font-bold text-purple-400 mb-3">4. A Necessidade de uma Teoria</h4>
          <p className="text-gray-300 text-lg leading-relaxed">
            As empresas de eletricidade (como as da Alemanha, onde Max Planck trabalhava) queriam saber:
          </p>
          <ul className="text-gray-300 text-lg leading-relaxed mt-3 space-y-2 list-disc list-inside">
            <li>Qual é a "temperatura de cor" ideal para um filamento?</li>
            <li>Como a cor (o espectro da luz) muda com a temperatura?</li>
            <li>Em que temperatura o filamento emite a luz visível mais brilhante, sem desperdiçar muita energia como calor (infravermelho) ou luz indesejada (ultravioleta)?</li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            Para responder a isso, eles precisavam de uma fórmula matemática precisa que previsse o espectro de radiação (quanta energia era emitida em cada cor/comprimento de onda) para uma determinada temperatura.
          </p>
        </div>
      </div>

      {/* Seção: A Importância Histórica */}
      <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Microscope className="w-6 h-6 text-indigo-400" />
          Max Planck e a Revolução
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          <strong className="text-indigo-300">Max Planck</strong> foi encarregado de resolver exatamente este problema prático. Ao tentar encontrar uma fórmula que correspondesse aos dados experimentais da radiação do corpo negro (medidos por outros físicos), ele teve que introduzir a ideia revolucionária de que a energia era emitida em "pacotes" discretos, ou <strong className="text-indigo-300">quanta</strong>.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Portanto, a busca por uma lâmpada mais eficiente e comercialmente viável foi um dos principais motores que levaram diretamente à descoberta da Lei de Planck e ao nascimento da física quântica. É um dos melhores exemplos de como um problema de engenharia e industrial pode levar a uma revolução na ciência fundamental.
        </p>
      </div>

      <div className="text-center pt-8">
        <button 
          onClick={onNavigate} 
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-orange-500/30"
        >
          Explorar os Dados Misteriosos <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}