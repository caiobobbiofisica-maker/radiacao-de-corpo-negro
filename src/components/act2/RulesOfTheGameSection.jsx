// src/components/act2/RulesOfTheGameSection.jsx
import { ArrowRight, ArrowLeft, Zap, Palette } from 'lucide-react';
import { Equation } from '../Equation';

export function RulesOfTheGameSection({ onNavigateNext, onNavigateBack }) {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">As Regras do Jogo</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Os dados experimentais revelaram padrões matemáticos precisos que governam a radiação térmica
        </p>
      </div>

      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Zap className="w-6 h-6 text-yellow-400" />
          Padrões Matemáticos Precisos
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          As observações eram tão regulares que os físicos conseguiram traduzi-las em leis matemáticas precisas. Essas leis funcionavam perfeitamente bem para descrever os dados experimentais, mas ninguém sabia <strong>por quê</strong> elas funcionavam. Os físicos tinham as "regras do jogo", mas não entendiam os mecanismos por trás delas.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Lei de Stefan-Boltzmann */}
        <div className="bg-gradient-to-br from-red-900/40 to-orange-900/40 border border-red-500/30 rounded-lg p-8 space-y-6">
          <div>
            <h4 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <Zap className="w-6 h-6 text-orange-400" />
              A Regra do Brilho Total
            </h4>
            <p className="text-xs text-gray-400 mb-4">Lei de Stefan-Boltzmann (1879)</p>
          </div>

          <div className="bg-black/50 border border-red-500/20 rounded-lg p-6">
            <div className="text-center mb-4 text-2xl">
              <Equation displayMode={true}>{String.raw`P = \sigma T^4`}</Equation>
            </div>
            <p className="text-gray-300 text-center text-sm">
              A energia total emitida é proporcional à <strong>quarta potência</strong> da temperatura absoluta.
            </p>
          </div>

          <div className="bg-yellow-900/40 border border-yellow-500/30 rounded-lg p-4">
            <p className="text-yellow-300 font-semibold mb-2">💡 Implicação Dramática:</p>
            <p className="text-yellow-200 text-sm leading-relaxed">
              Se você <strong>dobrar a temperatura</strong> de um corpo negro, o brilho total <strong>aumenta 16 vezes!</strong>
            </p>
            <div className="text-center mt-3 text-sm">
              <Equation displayMode={false}>{String.raw`(2)^4 = 16`}</Equation>
            </div>
            <p className="text-yellow-200 text-sm mt-3">
              Isso explica por que o Sol (T ≈ 5778 K) é tão mais brilhante que uma lâmpada incandescente (T ≈ 2700 K).
            </p>
          </div>

          <div className="bg-black/30 border border-red-500/20 rounded-lg p-4 space-y-2">
            <p className="text-gray-300 text-sm">
              <strong className="text-red-300">Onde:</strong>
            </p>
            <ul className="text-gray-300 text-sm space-y-1 ml-4">
              <li>• <Equation displayMode={false}>{String.raw`P`}</Equation> é a potência (energia por unidade de tempo)</li>
              <li>• <Equation displayMode={false}>{String.raw`\sigma`}</Equation> é a constante de Stefan-Boltzmann</li>
              <li>• <Equation displayMode={false}>{String.raw`T`}</Equation> é a temperatura absoluta em Kelvin</li>
            </ul>
          </div>
        </div>

        {/* Lei de Wien */}
        <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-lg p-8 space-y-6">
          <div>
            <h4 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <Palette className="w-6 h-6 text-cyan-400" />
              A Regra da Cor
            </h4>
            <p className="text-xs text-gray-400 mb-4">Lei do Deslocamento de Wien (1895)</p>
          </div>

          <div className="bg-black/50 border border-blue-500/20 rounded-lg p-6">
            <div className="text-center mb-4 text-2xl">
              <Equation displayMode={true}>{String.raw`\lambda_{\max} = \frac{b}{T}`}</Equation>
            </div>
            <p className="text-gray-300 text-center text-sm">
              O comprimento de onda de pico é <strong>inversamente proporcional</strong> à temperatura absoluta.
            </p>
          </div>

          <div className="bg-green-900/40 border border-green-500/30 rounded-lg p-4">
            <p className="text-green-300 font-semibold mb-2">🌟 Aplicação Prática:</p>
            <p className="text-green-200 text-sm leading-relaxed">
              Permite calcular a <strong>temperatura das estrelas pela sua cor</strong>! Estrelas azuis são mais quentes, estrelas vermelhas são mais frias.
            </p>
            <p className="text-green-200 text-sm mt-2">
              Uma estrela vermelha (T ≈ 3000 K) emite principalmente no infravermelho. Uma estrela azul (T ≈ 10000 K) emite principalmente no ultravioleta.
            </p>
          </div>

          <div className="bg-black/30 border border-blue-500/20 rounded-lg p-4 space-y-2">
            <p className="text-gray-300 text-sm">
              <strong className="text-blue-300">Onde:</strong>
            </p>
            <ul className="text-gray-300 text-sm space-y-1 ml-4">
              <li>• <Equation displayMode={false}>{String.raw`\lambda_{\max}`}</Equation> é o comprimento de onda de pico</li>
              <li>• <Equation displayMode={false}>{String.raw`b \approx 2.898 \times 10^{-3}`}</Equation> m·K é a constante de Wien</li>
              <li>• <Equation displayMode={false}>{String.raw`T`}</Equation> é a temperatura absoluta em Kelvin</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contexto Histórico */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">O Contexto Histórico</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Essas duas leis foram descobertas empiricamente através de medições cuidadosas no final do século XIX. Elas funcionavam perfeitamente bem para descrever os dados experimentais, mas ninguém sabia <strong>por quê</strong> elas funcionavam. Os físicos tinham as "regras do jogo", mas não entendiam os mecanismos por trás delas.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Historicamente, há incerteza sobre qual lei foi descoberta primeiro. Os dados precisos para a Lei de Stefan-Boltzmann só vieram depois. Talvez seja mais útil pensar na Lei de Wien como resultados analíticos preliminares (que descrevem o espectro, mas não explicam completamente). A verdadeira compreensão viria com a Lei de Planck, que unificaria e explicaria ambas.
        </p>
      </div>

      <div className="flex justify-between items-center pt-8">
        <button 
          onClick={onNavigateBack} 
          className="inline-flex items-center justify-center gap-2 bg-gray-500/20 hover:bg-gray-500/40 transition-colors text-gray-300 px-6 py-2 font-semibold rounded-lg"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </button>
        <button 
          onClick={onNavigateNext} 
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-red-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-purple-500/30"
        >
          Próximo Ato: A Catástrofe <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}