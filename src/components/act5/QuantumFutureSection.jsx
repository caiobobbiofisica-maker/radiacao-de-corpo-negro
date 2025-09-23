// src/components/act5/QuantumFutureSection.jsx
import { Rocket } from 'lucide-react';

export function QuantumFutureSection({ onNavigate }) {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">O Futuro Quântico</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A revolução iniciada por Planck está longe de terminar. Estamos a entrar na segunda era quântica.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-black/40 border border-white/10 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-2">Computação Quântica</h3>
          <p className="text-gray-400">Resolver problemas hoje impossíveis, criando novos medicamentos e materiais.</p>
        </div>
        <div className="bg-black/40 border border-white/10 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-2">Comunicações Quânticas</h3>
          <p className="text-gray-400">Redes de internet ultra-seguras, protegidas pelas próprias leis da física.</p>
        </div>
        <div className="bg-black/40 border border-white/10 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-2">Sensores Quânticos</h3>
          <p className="text-gray-400">Medir o mundo com uma precisão nunca antes imaginada, do cérebro humano às ondas gravitacionais.</p>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-yellow-900/40 to-pink-900/40 border border-yellow-500/40 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-yellow-200 mb-4">A Conclusão da Saga</h3>
        <p className="text-white text-xl leading-relaxed">
          Tudo começou com um quebra-cabeça sobre como os objetos brilham. A busca pela resposta forçou a física a abandonar a certeza do mundo contínuo e a abraçar a estranheza do mundo quântico. A faísca de uma fornalha, analisada por Planck, havia de facto acendido a maior revolução científica da história moderna.
        </p>
      </div>

      <div className="text-center pt-8">
        <button 
          onClick={onNavigate} 
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-pink-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-yellow-500/30"
        >
          <Rocket className="w-5 h-5" /> Recomeçar a Saga
        </button>
      </div>
    </div>
  );
}