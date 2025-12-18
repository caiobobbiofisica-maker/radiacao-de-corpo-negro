// src/components/act1/LaboratorySection.jsx
import { ArrowRight, Microscope, Lightbulb, TrendingUp } from 'lucide-react';
import { BlackBodySimulation } from './BlackBodySimulation';

export function LaboratorySection({ onNavigate }) {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">O Laboratório da Natureza</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Como os cientistas estudam o corpo negro na prática
        </p>
      </div>

      {/* Seção: O Contexto Histórico e Industrial */}
      <div className="bg-gradient-to-r from-amber-900/40 to-orange-900/40 border border-amber-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-yellow-400" />
          Por Que Estudar o Corpo Negro?
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Embora o estudo da radiação do corpo negro tenha levado a uma das maiores revoluções da física (o nascimento da mecânica quântica), sua motivação inicial estava fortemente ligada a interesses comerciais e industriais muito práticos da época, especificamente na <strong className="text-amber-300">indústria de iluminação elétrica</strong>.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-black/40 border border-amber-500/20 rounded-lg p-4">
            <h4 className="text-amber-300 font-bold mb-2 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" /> O Problema da Lâmpada Eficiente
            </h4>
            <p className="text-gray-300 text-sm">
              No final do século XIX, a indústria de iluminação elétrica estava crescendo rapidamente. O grande desafio comercial era produzir lâmpadas incandescentes que fossem o mais eficientes possível.
            </p>
          </div>
          <div className="bg-black/40 border border-amber-500/20 rounded-lg p-4">
            <h4 className="text-amber-300 font-bold mb-2">A Questão da Eficiência</h4>
            <p className="text-gray-300 text-sm">
              Uma lâmpada "eficiente" era aquela que convertia a maior parte da energia elétrica em <strong>luz visível</strong>, e o mínimo possível em <strong>calor</strong> (radiação infravermelha, que é invisível e desperdiça energia).
            </p>
          </div>
        </div>

        <div className="bg-black/30 border border-amber-500/20 rounded-lg p-4 mb-4">
          <h4 className="text-amber-300 font-bold mb-2">A Conexão com o Corpo Negro</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            O filamento de uma lâmpada incandescente, ao ser aquecido pela eletricidade, brilha. Ele se comporta de forma muito parecida com um corpo negro (ou, mais tecnicamente, um "corpo cinza", mas os princípios são os mesmos). O filamento absorve energia (elétrica) e a emite como radiação eletromagnética (luz e calor).
          </p>
        </div>

        <div className="bg-black/30 border border-amber-500/20 rounded-lg p-4">
          <h4 className="text-amber-300 font-bold mb-2">A Necessidade de uma Teoria</h4>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            As empresas de eletricidade (como as da Alemanha, onde Max Planck trabalhava) queriam saber:
          </p>
          <ul className="text-gray-300 text-sm space-y-2 ml-4">
            <li>✓ Qual é a "temperatura de cor" ideal para um filamento?</li>
            <li>✓ Como a cor (o espectro da luz) muda com a temperatura?</li>
            <li>✓ Em que temperatura o filamento emite a luz visível mais brilhante, sem desperdiçar muita energia como calor (infravermelho) ou luz indesejada (ultravioleta)?</li>
          </ul>
          <p className="text-gray-300 text-sm leading-relaxed mt-3">
            Para responder a isso, eles precisavam de uma fórmula matemática precisa que previsse o espectro de radiação (quanta energia era emitida em cada cor/comprimento de onda) para uma determinada temperatura.
          </p>
        </div>
      </div>

      {/* Simulador: BlackBodySimulation */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Microscope className="w-6 h-6 text-blue-400" />
          Simulador: Radiação do Corpo Negro em Equilíbrio Térmico
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Veja como a radiação varia com a temperatura. Este é o tipo de dado que os físicos do século XIX estavam medindo experimentalmente:
        </p>
        <BlackBodySimulation />
      </div>

      {/* Seção: O Problema Prático e a Solução Teórica */}
      <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">O Problema Prático Leva à Revolução Teórica</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          <strong className="text-indigo-300">Max Planck</strong> foi encarregado de resolver exatamente este problema prático. Ele trabalhava para a indústria alemã de eletricidade e precisava encontrar uma fórmula que correspondesse aos dados experimentais da radiação do corpo negro (medidos por outros físicos como Wilhelm Wien e Otto Lummer).
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Ao tentar encontrar uma fórmula que se ajustasse aos dados experimentais, Planck teve que introduzir a ideia revolucionária de que a energia não era emitida continuamente, mas em <strong className="text-indigo-300">"pacotes" discretos</strong>, ou <strong className="text-indigo-300">quanta</strong>, cujo "preço" depende da frequência: <strong className="text-indigo-300">E = hν</strong>.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Portanto, a busca por uma lâmpada mais eficiente e comercialmente viável foi um dos principais motores que levaram diretamente à descoberta da Lei de Planck e ao nascimento da física quântica. É um dos melhores exemplos de como um problema de engenharia e industrial pode levar a uma revolução na ciência fundamental.
        </p>
      </div>

      {/* Seção: A Armadilha de Luz */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">A Armadilha de Luz Perfeita</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Quando a luz entra por um pequeno orifício, ela fica "presa" dentro da cavidade, ricocheteando nas paredes internas até ser completamente absorvida. É uma verdadeira <strong className="text-pink-400">armadilha de luz</strong>!
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-black/40 border border-white/10 rounded-lg p-6">
            <h3 className="text-white font-bold mb-2">1. Entrada</h3>
            <p className="text-gray-300">A luz entra pelo pequeno orifício.</p>
          </div>
          <div className="bg-black/40 border border-white/10 rounded-lg p-6">
            <h3 className="text-white font-bold mb-2">2. Reflexões</h3>
            <p className="text-gray-300">Múltiplas reflexões nas paredes internas.</p>
          </div>
          <div className="bg-black/40 border border-white/10 rounded-lg p-6">
            <h3 className="text-white font-bold mb-2">3. Absorção</h3>
            <p className="text-gray-300">A luz é gradualmente absorvida.</p>
          </div>
        </div>
      </div>

      <div className="text-center pt-8">
        <button 
          onClick={() => onNavigate('ACT_2')}
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-orange-500/30"
        >
          Explorar os Dados Misteriosos <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}