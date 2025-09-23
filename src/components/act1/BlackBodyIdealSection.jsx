// src/components/act1/BlackBodyIdealSection.jsx
import { ArrowRight } from 'lucide-react';

export function BlackBodyIdealSection({ onNavigate }) {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">O Corpo Negro Ideal</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">Para decifrar o código da radiação térmica, era preciso encontrar um objeto "puro", um emissor ideal.</p>
      </div>
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">A Busca por um Emissor Perfeito</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">Um pedaço de carvão emite radiação de um jeito, e um pedaço de tungstênio, de outro. Além de emitir, eles também refletem a luz do ambiente. Para decifrar o código fundamental da radiação térmica, era preciso encontrar um objeto "puro", um <strong className="text-purple-400">emissor ideal</strong>.</p>
        <p className="text-gray-300 text-lg leading-relaxed">Foi assim que nasceu o conceito de <strong className="text-indigo-400">corpo negro</strong>. Apesar do nome, não se trata de algo necessariamente preto.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-black/40 border border-white/10 rounded-lg p-6">
          <h3 className="text-white font-bold mb-2">Propriedade 1</h3>
          <p className="text-lg text-gray-300">Ele absorve <strong className="text-green-400">toda a radiação</strong> que incide sobre ele, sem refletir absolutamente nada.</p>
        </div>
        <div className="bg-black/40 border border-white/10 rounded-lg p-6">
          <h3 className="text-white font-bold mb-2">Propriedade 2</h3>
          <p className="text-lg text-gray-300">A radiação que ele emite depende <strong className="text-blue-400">apenas e unicamente</strong> de sua temperatura, e não do material de que é feito.</p>
        </div>
      </div>
       <div className="bg-black/40 border border-white/10 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">O Ponto-Chave</h3>
        <p className="text-gray-300 text-xl leading-relaxed">Um <strong className="text-yellow-400">absorvedor perfeito</strong> é também o <strong className="text-orange-400"> emissor mais perfeito</strong> possível. Ele não "polui" sua própria luz com reflexos, emitindo um espectro térmico puro e universal.</p>
      </div>
      <div className="text-center">
        <button onClick={onNavigate} className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-purple-500/30">
          Ver o Laboratório da Natureza <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}