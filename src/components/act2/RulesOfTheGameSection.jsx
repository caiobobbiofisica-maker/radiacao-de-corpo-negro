// src/components/act2/RulesOfTheGameSection.jsx
import { ArrowRight, ArrowLeft } from 'lucide-react';

export function RulesOfTheGameSection({ onNavigateNext, onNavigateBack }) {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center"><span className="text-purple-400 mr-3">📊</span> Padrões Matemáticos Precisos</h3>
          <p className="text-gray-300 leading-relaxed">As observações eram tão regulares que os físicos conseguiram traduzi-las em leis matemáticas precisas.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-black/40 border border-white/10 rounded-lg p-6 space-y-4">
          <h4 className="font-bold text-white">A Regra do Brilho Total</h4>
          <p className="text-xs text-gray-400">Lei de Stefan-Boltzmann (1879)</p>
          <div className="font-mono text-center text-lg bg-black/30 p-4 rounded-md text-red-400">P = σT⁴</div>
          <p className="text-gray-300">A energia total é proporcional à quarta potência da temperatura.</p>
          <div className="bg-yellow-900/40 text-yellow-300 p-3 rounded-lg">💡 Se dobrar a temperatura, o brilho aumenta 16 vezes!</div>
        </div>
        <div className="bg-black/40 border border-white/10 rounded-lg p-6 space-y-4">
          <h4 className="font-bold text-white">A Regra da Cor</h4>
          <p className="text-xs text-gray-400">Lei do Deslocamento de Wien (1895)</p>
          <div className="font-mono text-center text-lg bg-black/30 p-4 rounded-md text-sky-400">λₘₐₓ = b/T</div>
          <p className="text-gray-300">O comprimento de onda de pico é inversamente proporcional à temperatura.</p>
          <div className="bg-green-900/40 text-green-300 p-3 rounded-lg">🌟 Permite calcular a temperatura das estrelas pela cor!</div>
        </div>
      </div>
      <div className="flex justify-between items-center pt-4">
        <button onClick={onNavigateBack} className="inline-flex items-center justify-center gap-2 bg-gray-500/20 hover:bg-gray-500/40 transition-colors text-gray-300 px-6 py-2 font-semibold rounded-lg">
            <ArrowLeft className="w-4 h-4 mr-2" /> Voltar
        </button>
        <button onClick={onNavigateNext} className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-red-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-purple-500/30">
          Próximo Ato: A Catástrofe <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
}