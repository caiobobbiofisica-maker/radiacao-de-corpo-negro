// src/components/act4/QuantumRevolutionSection.jsx
import { ArrowRight, Zap } from 'lucide-react';

export function QuantumRevolutionSection({ onNavigate }) {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">A Revolução Quântica</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Como uma solução para um problema prático mudou para sempre a física
        </p>
      </div>

      {/* Seção: O Impacto Imediato */}
      <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-purple-400" />
          O Impacto Imediato
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          A fórmula de Planck funcionou. Correspondia perfeitamente aos dados experimentais. Mas isso levantou uma questão profunda: se a quantização funcionava para a radiação térmica, será que se aplicava a outros fenômenos também?
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Essa pergunta abriu as portas para uma revolução científica que duraria décadas e transformaria completamente nossa compreensão do universo.
        </p>
      </div>

      {/* Seção: Os Pioneiros */}
      <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Os Pioneiros da Mecânica Quântica</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Após Planck, outros cientistas construíram sobre sua ideia revolucionária:
        </p>
        <div className="space-y-4 mt-4">
          <div className="bg-black/40 border border-blue-500/20 rounded-lg p-4">
            <p className="text-blue-300 font-semibold mb-2">Albert Einstein (1905)</p>
            <p className="text-gray-300">
              Explicou o efeito fotoelétrico usando a ideia de quanta de luz (fótons). Mostrou que a quantização não era apenas um truque matemático, mas uma realidade física.
            </p>
          </div>
          <div className="bg-black/40 border border-blue-500/20 rounded-lg p-4">
            <p className="text-blue-300 font-semibold mb-2">Niels Bohr (1913)</p>
            <p className="text-gray-300">
              Desenvolveu um modelo do átomo baseado em quantização. Os elétrons ocupam órbitas discretas com energias bem definidas.
            </p>
          </div>
          <div className="bg-black/40 border border-blue-500/20 rounded-lg p-4">
            <p className="text-blue-300 font-semibold mb-2">Werner Heisenberg (1925)</p>
            <p className="text-gray-300">
              Formulou a mecânica das matrizes, uma versão da mecânica quântica. Descobriu o Princípio da Incerteza.
            </p>
          </div>
          <div className="bg-black/40 border border-blue-500/20 rounded-lg p-4">
            <p className="text-blue-300 font-semibold mb-2">Erwin Schrödinger (1926)</p>
            <p className="text-gray-300">
              Desenvolveu a equação de onda, outra formulação da mecânica quântica. Propôs o conceito de função de onda.
            </p>
          </div>
        </div>
      </div>

      {/* Seção: Mudança de Paradigma */}
      <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Uma Mudança de Paradigma</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          A mecânica quântica não era apenas uma correção da física clássica. Era uma mudança fundamental em como entendemos a realidade:
        </p>
        <div className="space-y-4 mt-4">
          <div className="bg-black/40 border border-green-500/20 rounded-lg p-4">
            <p className="text-green-300 font-semibold mb-2">Determinismo vs. Probabilidade</p>
            <p className="text-gray-300">
              A física clássica era determinística: dados as condições iniciais, o futuro era completamente previsível. A mecânica quântica é probabilística: só podemos prever probabilidades.
            </p>
          </div>
          <div className="bg-black/40 border border-green-500/20 rounded-lg p-4">
            <p className="text-green-300 font-semibold mb-2">Observação Muda a Realidade</p>
            <p className="text-gray-300">
              O ato de observar um sistema quântico muda seu estado. Não há observação "passiva" - o observador faz parte do sistema.
            </p>
          </div>
          <div className="bg-black/40 border border-green-500/20 rounded-lg p-4">
            <p className="text-green-300 font-semibold mb-2">Dualidade Onda-Partícula</p>
            <p className="text-gray-300">
              Partículas podem se comportar como ondas e ondas como partículas. A natureza é fundamentalmente dual.
            </p>
          </div>
          <div className="bg-black/40 border border-green-500/20 rounded-lg p-4">
            <p className="text-green-300 font-semibold mb-2">Quantização Universal</p>
            <p className="text-gray-300">
              Não apenas a energia é quantizada. Momento angular, carga, e muitas outras grandezas também são quantizadas.
            </p>
          </div>
        </div>
      </div>

      {/* Seção: Consequências Práticas */}
      <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border border-yellow-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Consequências Práticas</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          A mecânica quântica não é apenas teoria abstrata. Tem aplicações práticas profundas:
        </p>
        <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside mt-4">
          <li>Lasers e fibras ópticas</li>
          <li>Transistores e circuitos integrados</li>
          <li>Células solares e painéis fotovoltaicos</li>
          <li>Ressonância magnética (RM)</li>
          <li>Microscópios eletrônicos</li>
          <li>Computadores quânticos (futuro próximo)</li>
        </ul>
      </div>

      {/* Seção: O Legado */}
      <div className="bg-gradient-to-r from-red-900/40 to-pink-900/40 border border-red-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">O Legado</h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          O que começou como um problema prático — como descrever a radiação de um corpo negro — levou a uma das maiores revoluções científicas de todos os tempos. A mecânica quântica não apenas resolveu o problema; abriu um novo mundo de possibilidades e mudou para sempre nossa compreensão da realidade.
        </p>
      </div>

      <div className="text-center pt-8">
        <button 
          onClick={onNavigate} 
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-purple-500/30"
        >
          Explorar o Legado Quântico <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}