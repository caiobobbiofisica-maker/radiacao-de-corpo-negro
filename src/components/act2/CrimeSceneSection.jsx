// src/components/act2/CrimeSceneSection.jsx
import { ArrowRight } from 'lucide-react';

export function CrimeSceneSection({ onNavigate }) {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* ESTILO ATUALIZADO: Cards escuros */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
          <span className="text-red-400 mr-3">🔍</span> Os Detetives da Luz
        </h3>
        <p className="text-gray-300 leading-relaxed">
          No final do século XIX, com o "corpo negro" idealizado, os físicos se tornaram detetives da luz. Eles apontaram seus espectrômetros para o orifício da cavidade e mediram a radiação que saía de lá em diferentes temperaturas, coletando as "impressões digitais" do calor.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-black/40 border border-white/10 rounded-lg p-6">
          <h4 className="font-bold text-white mb-2">O Espectrômetro</h4>
          <p className="text-gray-300 mb-4">Era a ferramenta fundamental que separava a luz em suas diferentes "cores", revelando quanta energia era emitida em cada parte do espectro.</p>
          <div className="bg-black/30 p-4 rounded-lg text-center text-gray-300">"Uma lupa para desvendar os segredos da luz"</div>
        </div>
        <div className="bg-black/40 border border-white/10 rounded-lg p-6">
          <h4 className="font-bold text-white mb-2">Diferentes Temperaturas</h4>
          <p className="text-gray-300 mb-4">Os cientistas aqueceram suas cavidades e observaram como o padrão de radiação mudava. Cada temperatura revelava uma "impressão digital" única.</p>
        </div>
      </div>
      <div className="text-center pt-4">
        <button onClick={onNavigate} className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-red-500/30">
          Analisar a Primeira Pista <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
}