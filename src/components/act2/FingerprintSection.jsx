// src/components/act2/FingerprintSection.jsx
import { ArrowRight, Fingerprint } from 'lucide-react';
import { Equation } from '../Equation';

export function FingerprintSection({ onNavigate }) {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">A Impressão Digital da Radiação</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Cada temperatura tem um "espectro" único - como uma impressão digital
        </p>
      </div>

      {/* Introdução */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          Mas as duas regras que descobrimos (brilho total e cor) são apenas a ponta do iceberg. O verdadeiro mistério está em como a energia se distribui em cada comprimento de onda. Cada temperatura produz um padrão único e característico - como uma impressão digital da radiação.
        </p>
      </div>

      {/* Seção: O Espectro Completo */}
      <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Fingerprint className="w-6 h-6 text-pink-400" />
          O Espectro Completo
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Se você medir a intensidade de radiação em cada comprimento de onda (desde o infravermelho até o ultravioleta), descobrirá que:
        </p>
        <ul className="text-gray-300 text-lg leading-relaxed space-y-3 list-disc list-inside">
          <li>Em comprimentos de onda muito curtos (ultravioleta): pouca energia</li>
          <li>Em comprimentos de onda intermediários: energia máxima em um pico característico</li>
          <li>Em comprimentos de onda muito longos (infravermelho): energia decaindo gradualmente</li>
        </ul>
      </div>

      {/* Seção: A Curva Característica */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">A Curva Característica</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Essa distribuição forma uma curva suave e característica. O pico dessa curva (onde a energia é máxima) ocorre em um comprimento de onda que depende da temperatura - exatamente como prevê a Lei de Wien que aprendemos!
        </p>
        <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-lg p-6">
          <p className="text-indigo-200 text-lg leading-relaxed">
            <strong>Observação Crucial:</strong> Essa curva é universal! Não importa se você está olhando para o filamento de uma lâmpada, a superfície do Sol ou uma estrela distante - a forma da curva é sempre a mesma, apenas mudando de posição e altura com a temperatura.
          </p>
        </div>
      </div>

      {/* Seção: Os Dados Experimentais */}
      <div className="bg-gradient-to-r from-orange-900/40 to-red-900/40 border border-orange-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Os Dados Experimentais</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          No final do século XIX, os físicos conseguiram medir essa curva com precisão. Os dados eram claros e reproduzíveis. Agora havia um novo desafio: encontrar uma fórmula matemática que descrevesse essa curva com precisão.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          A física clássica tinha uma previsão para essa curva, mas havia um problema... um problema tão grave que ficou conhecido como a "Catástrofe do Ultravioleta".
        </p>
      </div>

      <div className="text-center pt-8">
        <button 
          onClick={onNavigate} 
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-red-500/30"
        >
          Descobrir a Catástrofe <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}