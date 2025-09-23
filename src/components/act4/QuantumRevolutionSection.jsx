// src/components/act4/QuantumRevolutionSection.jsx
import { ArrowLeft, Lightbulb, Star, Atom, Globe } from 'lucide-react';

export function QuantumRevolutionSection({ onNavigateBack }) {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">O Legado Inesperado</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A "trapaça" de Planck abriu as portas para uma nova compreensão do universo.
        </p>
      </div>

      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">A Centelha da Revolução</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {/* Card 1: Einstein */}
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
            <Star className="w-10 h-10 mx-auto text-blue-400 mb-3" />
            <h4 className="font-bold text-white mb-2">1905: Einstein</h4>
            <p className="text-sm text-gray-400">Usou a ideia de quanta de Planck para explicar o efeito fotoelétrico, provando que a luz em si é quantizada (fótons).</p>
          </div>
          {/* Card 2: Bohr */}
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
            <Atom className="w-10 h-10 mx-auto text-purple-400 mb-3" />
            <h4 className="font-bold text-white mb-2">1913: Bohr</h4>
            <p className="text-sm text-gray-400">Aplicou a quantização ao átomo, criando o primeiro modelo atômico bem-sucedido que explicava os espectros de luz.</p>
          </div>
          {/* Card 3: Tecnologia */}
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
            <Globe className="w-10 h-10 mx-auto text-green-400 mb-3" />
            <h4 className="font-bold text-white mb-2">Século XX e XXI</h4>
            <p className="text-sm text-gray-400">A mecânica quântica tornou-se a base para lasers, transistores (computadores), ressonância magnética e muito mais.</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-500/40 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-yellow-300 mb-4">De um "Ato de Desespero" para a Era Quântica</h3>
        <p className="text-white text-xl leading-relaxed max-w-3xl mx-auto">
          A solução relutante de Planck não apenas resolveu um problema específico, mas revelou que o universo, em seu nível mais fundamental, opera por regras estranhas e não intuitivas. A física nunca mais seria a mesma.
        </p>
      </div>
      
      <div className="flex justify-center pt-8">
        <button 
          onClick={onNavigateBack} 
          className="inline-flex items-center justify-center gap-2 bg-gray-500/20 hover:bg-gray-500/40 transition-colors text-gray-300 px-6 py-2 font-semibold rounded-lg"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </button>
      </div>
    </div>
  );
}