// src/components/act1/UniversalGlowSection.jsx
import { Flame, ArrowRight, Lightbulb } from 'lucide-react';

export function UniversalGlowSection({ onNavigate }) {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">O Brilho Universal</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Você já se perguntou por que o metal quente brilha? Vamos descobrir juntos o mistério por trás do brilho dos objetos aquecidos.
        </p>
      </div>

      {/* Seção: A Radiação Térmica */}
      <div className="bg-gradient-to-r from-orange-900/40 to-red-900/40 border border-orange-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">A Radiação Térmica</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Quando aquecemos qualquer objeto, ele emite luz - isso é chamado de <strong className="text-orange-400">radiação térmica</strong>. A cor da luz depende da temperatura: objetos mais frios emitem luz vermelha, enquanto objetos mais quentes emitem luz branca ou até azulada.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Esse fenômeno é universal - não depende do material do objeto. Um pedaço de ferro quente, um filamento de tungstênio, ou qualquer outro material aquecido segue o mesmo padrão de emissão de luz.
        </p>
      </div>

      {/* Seção: O Contexto Industrial */}
      <div className="bg-gradient-to-r from-amber-900/40 to-yellow-900/40 border border-amber-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">O Contexto Industrial</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          No final do século XIX, a indústria de iluminação elétrica estava em pleno desenvolvimento. As lâmpadas incandescentes usavam filamentos de metal aquecidos para produzir luz. Compreender como esses filamentos emitiam luz era crucial para melhorar a eficiência e durabilidade das lâmpadas.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Esse problema prático - como descrever matematicamente a radiação emitida por um objeto aquecido - levaria a uma das maiores revoluções da física.
        </p>
      </div>

      {/* Seção: O Ponto-Chave */}
      <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-yellow-400" />
          O Ponto-Chave
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          Um <strong className="text-yellow-300">absolvedor perfeito</strong> é também o <strong className="text-yellow-300">emissor mais perfeito</strong> possível. Ele não "polui" sua própria luz com reflexos, emitindo um espectro térmico puro e universal.
        </p>
      </div>

      <div className="text-center">
        <button 
          onClick={onNavigate} 
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-orange-500/30"
        >
          Descobrir o Corpo Negro <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}