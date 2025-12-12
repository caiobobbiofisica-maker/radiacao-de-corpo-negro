// src/components/act3/PhysicsCrisisSection.jsx
import { ArrowRight, Zap } from 'lucide-react';

export function PhysicsCrisisSection({ onNavigate }) {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">A Crise da Física Clássica</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Um sistema que funcionava perfeitamente tinha seus limites expostos
        </p>
      </div>

      {/* Seção: Um Pilar Abalado */}
      <div className="bg-gradient-to-r from-orange-900/40 to-red-900/40 border border-orange-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Um Pilar Abalado</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          A física clássica havia dominado por mais de dois séculos. Newton, Lagrange, Hamilton e muitos outros tinham construído um edifício teórico impressionante. As leis da mecânica explicavam o movimento dos planetas, o comportamento dos gases, a propagação do calor...
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Mas agora, quando aplicada ao problema mais simples e fundamental — como os objetos aquecidos emitem luz — a teoria clássica produzia resultados absurdos. Era como se o edifício inteiro tivesse uma rachadura fundamental.
        </p>
      </div>

      {/* Seção: O Que Estava Errado */}
      <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">O Que Estava Errado?</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Os físicos perceberam que havia uma suposição fundamental na física clássica que não era verdadeira: a suposição de que a energia era <strong className="text-purple-300">contínua</strong>.
        </p>
        <div className="space-y-4 mt-4">
          <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
            <p className="text-purple-300 font-semibold mb-2">A Suposição Clássica:</p>
            <p className="text-gray-300">
              Na física clássica, a energia pode ter qualquer valor, desde zero até infinito, em passos infinitesimalmente pequenos. É como se você pudesse pagar qualquer quantia de dinheiro, até frações infinitesimais de centavo.
            </p>
          </div>
          <div className="bg-black/40 border border-indigo-500/20 rounded-lg p-4">
            <p className="text-indigo-300 font-semibold mb-2">A Realidade Quântica:</p>
            <p className="text-gray-300">
              Na verdade, a energia é <strong>quantizada</strong>. Ela só pode ter certos valores discretos, múltiplos de uma quantidade fundamental. É como se você só pudesse pagar em moedas de valor específico — não há frações menores.
            </p>
          </div>
        </div>
      </div>

      {/* Seção: A Revolução Silenciosa */}
      <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-cyan-400" />
          A Revolução Silenciosa
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          O que começou como um simples problema técnico — como descrever matematicamente a radiação térmica — se transformou em uma revolução científica. A solução de Planck não era apenas uma correção matemática; era uma mudança fundamental na forma como entendemos a natureza.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Essa ideia de quantização abriu as portas para a mecânica quântica, que eventualmente explicaria:
        </p>
        <ul className="text-gray-300 text-lg leading-relaxed mt-4 space-y-2 list-disc list-inside">
          <li>A estrutura dos átomos e moléculas</li>
          <li>Por que os elementos têm propriedades químicas específicas</li>
          <li>Como funcionam os lasers, transistores e células solares</li>
          <li>A natureza da luz e da matéria</li>
          <li>Os processos que alimentam o Sol e as estrelas</li>
        </ul>
      </div>

      {/* Seção: O Legado */}
      <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">O Legado</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          A crise da física clássica não foi um fracasso — foi um triunfo. Ela mostrou que a ciência é um processo vivo, que evolui quando enfrenta novos desafios. A física clássica não estava "errada"; ela era apenas incompleta. Funcionava perfeitamente para objetos macroscópicos em baixas velocidades, mas falhava quando se aproximava dos limites do muito pequeno (quântico) ou muito rápido (relativístico).
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          A solução de Planck abriu uma nova era na física — a era quântica. E essa era continua até hoje, moldando nossa tecnologia e nossa compreensão do universo.
        </p>
      </div>

      <div className="text-center pt-8">
        <button 
          onClick={onNavigate} 
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-yellow-500/30"
        >
          Descobrir a Revolução Quântica <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}