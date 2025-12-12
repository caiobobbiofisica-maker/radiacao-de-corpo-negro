// src/components/act2/CrimeSceneSection.jsx
import { ArrowRight, AlertCircle } from 'lucide-react';

export function CrimeSceneSection({ onNavigate }) {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">A Cena do Crime</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Os primeiros indícios de um mistério que levaria à revolução quântica
        </p>
      </div>

      {/* Introdução */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          No final do século XIX, os físicos observaram algo curioso: quando mediam a radiação emitida por objetos aquecidos, encontravam padrões muito regulares e previsíveis. Mas havia algo estranho nos dados - algo que a física clássica não conseguia explicar completamente.
        </p>
      </div>

      {/* Seção: As Primeiras Pistas */}
      <div className="bg-gradient-to-r from-amber-900/40 to-yellow-900/40 border border-amber-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <AlertCircle className="w-6 h-6 text-amber-400" />
          As Primeiras Pistas
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Os cientistas observaram dois padrões muito claros na radiação térmica:
        </p>
        <div className="space-y-4">
          <div className="bg-black/40 border border-amber-500/20 rounded-lg p-4">
            <p className="text-amber-300 font-semibold mb-2">Pista 1: O Brilho Aumenta Dramaticamente</p>
            <p className="text-gray-300">
              Quando você aquece um objeto, seu brilho total não aumenta linearmente com a temperatura. Aumenta muito mais rapidamente! Especificamente, aumenta com a quarta potência da temperatura.
            </p>
          </div>
          <div className="bg-black/40 border border-yellow-500/20 rounded-lg p-4">
            <p className="text-yellow-300 font-semibold mb-2">Pista 2: A Cor Muda de Forma Previsível</p>
            <p className="text-gray-300">
              Conforme a temperatura aumenta, a cor da radiação muda de forma muito regular. Objetos frios emitem principalmente infravermelho (invisível). Conforme aquecem, começam a emitir luz vermelha, depois amarela, depois branca. Essa mudança segue um padrão matemático preciso.
            </p>
          </div>
        </div>
      </div>

      {/* Seção: O Mistério Mais Profundo */}
      <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">O Mistério Mais Profundo</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Mas havia um mistério ainda mais profundo: como exatamente a energia se distribui em cada comprimento de onda? Se você medisse a intensidade de radiação em cada "cor" (cada comprimento de onda), qual seria o padrão?
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Os dados experimentais mostravam uma curva suave e característica. Havia um pico em um comprimento de onda específico (que dependia da temperatura), e a energia decaia tanto para comprimentos de onda menores quanto maiores.
        </p>
      </div>

      {/* Seção: O Desafio para a Física Clássica */}
      <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 border border-red-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">O Desafio para a Física Clássica</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          A física clássica tinha uma resposta para essa pergunta. De acordo com as leis da termodinâmica clássica, a energia deveria se distribuir igualmente entre todos os modos de vibração possíveis. Isso era conhecido como o <strong className="text-red-300">Teorema da Equipartição de Energia</strong>.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Mas havia um problema: havia um número infinito de modos de vibração em comprimentos de onda muito curtos (ultravioleta). Se cada modo recebesse uma quantidade igual de energia, a energia total seria infinita!
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Isso levaria a uma previsão absurda: qualquer objeto aquecido deveria emitir uma quantidade infinita de radiação ultravioleta. Mas experimentalmente, isso não acontecia. Havia claramente algo errado com a física clássica.
        </p>
      </div>

      {/* Seção: O Próximo Capítulo */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">O Próximo Capítulo</h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          Esse problema ficou conhecido como a <strong className="text-white">"Catástrofe do Ultravioleta"</strong>. Era um sinal de que algo fundamental estava errado com nossa compreensão da física. A solução viria de uma ideia tão revolucionária que mudaria para sempre nossa compreensão do universo.
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