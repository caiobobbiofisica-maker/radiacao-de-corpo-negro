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
          Essa pergunta levou a uma cascata de descobertas que moldaram todo o século XX e continuam moldando o século XXI.
        </p>
      </div>

      {/* Seção: Os Pioneiros */}
      <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Os Pioneiros da Mecânica Quântica</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Após Planck, uma geração de físicos brilhantes construiu sobre sua ideia revolucionária:
        </p>
        <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside mt-4">
          <li><strong className="text-blue-300">Albert Einstein</strong> - Explicou o efeito fotoelétrico usando fótons</li>
          <li><strong className="text-blue-300">Niels Bohr</strong> - Desenvolveu o modelo do átomo com órbitas quantizadas</li>
          <li><strong className="text-blue-300">Louis de Broglie</strong> - Propôs a dualidade onda-partícula</li>
          <li><strong className="text-blue-300">Werner Heisenberg</strong> - Descobriu o Princípio da Incerteza</li>
          <li><strong className="text-blue-300">Erwin Schrödinger</strong> - Desenvolveu a equação de onda quântica</li>
        </ul>
      </div>

      {/* Seção: Aplicações Tecnológicas */}
      <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Aplicações Tecnológicas</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          A mecânica quântica não é apenas teoria abstrata. Ela é a base de praticamente toda a tecnologia moderna:
        </p>
        <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside mt-4">
          <li>Transistores e semicondutores (computadores, smartphones)</li>
          <li>Lasers (cirurgias, comunicações, leitura de dados)</li>
          <li>LEDs (iluminação eficiente)</li>
          <li>Células solares (energia renovável)</li>
          <li>Ressonância magnética (diagnóstico médico)</li>
          <li>Microscópios eletrônicos (pesquisa científica)</li>
          <li>GPS (navegação global)</li>
          <li>Câmeras digitais (fotografia)</li>
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
          onClick={() => onNavigate()}
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-purple-500/30"
        >
          Explorar o Legado Quântico <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}