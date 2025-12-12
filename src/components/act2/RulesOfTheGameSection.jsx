// src/components/act2/RulesOfTheGameSection.jsx
import { ArrowRight, Zap } from 'lucide-react';
import { Equation } from '../Equation';

export function RulesOfTheGameSection({ onNavigate }) {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Os Padrões Matemáticos Precisos</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          As observações revelam duas regras universais que governam a radiação térmica
        </p>
      </div>

      {/* Introdução */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          As observações eram tão regulares que os físicos conseguiram traduzir-las em leis matemáticas precisas. Aqui estão as duas regras fundamentais que governam como qualquer objeto aquecido emite radiação:
        </p>
      </div>

      {/* Padrão 1: A Regra do Brilho Total */}
      <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 border border-red-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Padrão 1: A Regra do Brilho Total</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Lei de Stefan-Boltzmann (1879)
        </p>
        <div className="bg-black/40 border border-red-500/20 rounded-lg p-6 text-center mb-4">
          <Equation>{String.raw`P = \sigma T^4`}</Equation>
          <p className="text-gray-400 mt-4 text-sm">
            onde P é a potência total radiada, σ é a constante de Stefan-Boltzmann, e T é a temperatura em Kelvin
          </p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          A energia total é proporcional à quarta potência da temperatura.
        </p>
        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
          <p className="text-yellow-200 font-semibold">💡 Consequência Prática:</p>
          <p className="text-gray-300 mt-2">
            Se dobrar a temperatura, o brilho aumenta <strong>16 vezes</strong>! (2⁴ = 16)
          </p>
        </div>
      </div>

      {/* Padrão 2: A Regra da Cor */}
      <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Padrão 2: A Regra da Cor</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Lei do Deslocamento de Wien (1893)
        </p>
        <div className="bg-black/40 border border-blue-500/20 rounded-lg p-6 text-center mb-4">
          <Equation>{String.raw`\lambda_{max} = \frac{b}{T}`}</Equation>
          <p className="text-gray-400 mt-4 text-sm">
            onde λ_max é o comprimento de onda de pico, b é a constante de Wien, e T é a temperatura
          </p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          O comprimento de onda de pico é inversamente proporcional à temperatura.
        </p>
        <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
          <p className="text-green-200 font-semibold">🎨 Consequência Prática:</p>
          <p className="text-gray-300 mt-2">
            Permite calcular a temperatura das estrelas pela cor! Quanto mais azul, mais quente. Quanto mais vermelha, mais fria.
          </p>
        </div>
      </div>

      {/* Contexto Histórico */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Um Detalhe Histórico Interessante</h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          Historicamente, não há certeza se a "pista 1" (brilho total) veio primeiro que a "pista 2" (cor). Os dados precisos para aquelas curvas da pista 1 só vieram depois. Talvez transformar a pista 2 em resultados analíticos preliminares (que não explicam o espectro, mas dizem algo sobre ele) seja válido num contexto de um site mais geral com todos os experimentos.
        </p>
      </div>

      <div className="text-center pt-8">
        <button 
          onClick={onNavigate} 
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-purple-500/30"
        >
          Explorar a Catástrofe <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}