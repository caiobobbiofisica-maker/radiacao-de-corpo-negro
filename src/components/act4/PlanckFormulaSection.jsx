// src/components/act4/PlanckFormulaSection.jsx
import { ArrowRight, Award, Zap, CheckCircle } from 'lucide-react';
import { Equation } from '../Equation';
import { TheoryVsRealityGraph } from '../act3/TheoryVsRealityGraph';

export function PlanckFormulaSection({ onNavigate }) {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">A Fórmula da Solução</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Com sua nova hipótese de quantização, Planck recalculou a energia média e chegou a uma fórmula que correspondia perfeitamente aos dados experimentais.
        </p>
      </div>

      {/* Seção: Derivação da Fórmula */}
      <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">A Derivação da Fórmula</h3>
        
        <div className="space-y-6">
          {/* Passo 1 */}
          <div className="bg-black/40 border border-indigo-500/20 rounded-lg p-4">
            <h4 className="text-indigo-300 font-bold mb-2">Passo 1: Energia Média com Quantização</h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Na teoria clássica, a energia média por modo era <Equation displayMode={false}>{String.raw`k_B T`}</Equation>. Com a quantização de Planck, a energia média de um modo com frequência <Equation displayMode={false}>{String.raw`\nu`}</Equation> é:
            </p>
            <div className="text-center">
              <Equation displayMode={true}>{String.raw`\langle E \rangle = \frac{h\nu}{e^{h\nu/k_B T} - 1}`}</Equation>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mt-3">
              Essa fórmula mostra que em altas frequências, quando <Equation displayMode={false}>{String.raw`h\nu \gg k_B T`}</Equation>, a energia média tende a zero — exatamente o que precisávamos para evitar a catástrofe!
            </p>
          </div>

          {/* Passo 2 */}
          <div className="bg-black/40 border border-indigo-500/20 rounded-lg p-4">
            <h4 className="text-indigo-300 font-bold mb-2">Passo 2: Densidade de Energia Espectral</h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Multiplicando a energia média pelo número de modos (que cresce como <Equation displayMode={false}>{String.raw`\nu^2`}</Equation>), obtemos a densidade de energia espectral:
            </p>
            <div className="text-center">
              <Equation displayMode={true}>{String.raw`\rho_T(\nu) d\nu = \frac{8\pi \nu^2}{c^3} \frac{h\nu}{e^{h\nu/k_B T} - 1} d\nu`}</Equation>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mt-3">
              Esta é a <strong>Lei de Radiação de Planck</strong> — a fórmula completa que descreve como a energia é distribuída entre as diferentes frequências.
            </p>
          </div>

          {/* Passo 3 */}
          <div className="bg-black/40 border border-indigo-500/20 rounded-lg p-4">
            <h4 className="text-indigo-300 font-bold mb-2">Passo 3: Limite Clássico (Baixas Frequências)</h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Em baixas frequências, quando <Equation displayMode={false}>{String.raw`h\nu \ll k_B T`}</Equation>, a fórmula de Planck se reduz à Lei de Rayleigh-Jeans:
            </p>
            <div className="text-center">
              <Equation displayMode={true}>{String.raw`\rho_T(\nu) d\nu \approx \frac{8\pi \nu^2}{c^3} k_B T \, d\nu`}</Equation>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mt-3">
              Isso mostra que a fórmula de Planck <strong>recupera a física clássica</strong> no limite apropriado — uma prova de sua consistência!
            </p>
          </div>

          {/* Passo 4 */}
          <div className="bg-black/40 border border-indigo-500/20 rounded-lg p-4">
            <h4 className="text-indigo-300 font-bold mb-2">Passo 4: Limite Quântico (Altas Frequências)</h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Em altas frequências, quando <Equation displayMode={false}>{String.raw`h\nu \gg k_B T`}</Equation>, o exponencial domina e a fórmula decai rapidamente:
            </p>
            <div className="text-center">
              <Equation displayMode={true}>{String.raw`\rho_T(\nu) d\nu \approx \frac{8\pi \nu^2}{c^3} h\nu \, e^{-h\nu/k_B T} d\nu`}</Equation>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mt-3">
              O fator exponencial <Equation displayMode={false}>{String.raw`e^{-h\nu/k_B T}`}</Equation> suprime drasticamente a radiação em altas frequências. <strong>A catástrofe do ultravioleta desaparece!</strong>
            </p>
          </div>
        </div>
      </div>

      {/* A Fórmula Completa */}
      <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-6">✨ A Lei de Radiação de Planck</h3>
        <div className="bg-black/50 border border-green-500/20 rounded-lg p-8 mb-6">
          <div className="text-2xl mb-4">
            <Equation displayMode={true}>{String.raw`u(\nu, T) d\nu = \frac{8\pi h \nu^3}{c^3} \frac{1}{e^{h\nu/k_B T} - 1} d\nu`}</Equation>
          </div>
        </div>
        <p className="text-lg text-green-200 leading-relaxed">
          Esta fórmula se ajustou <strong>perfeitamente</strong> aos dados experimentais em <strong>todas as frequências</strong> — desde o infravermelho até o ultravioleta. Nenhuma discrepância, nenhuma catástrofe. Apenas a natureza revelando suas regras verdadeiras.
        </p>
      </div>

      {/* Gráfico de Comparação */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Comparação: Teoria Clássica vs. Realidade</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          O gráfico abaixo mostra como a fórmula de Planck (linha verde) se ajusta perfeitamente aos dados experimentais, enquanto a teoria clássica (linha vermelha) diverge completamente em altas frequências:
        </p>
        <TheoryVsRealityGraph />
      </div>

      {/* Seção: O Significado Profundo */}
      <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border border-yellow-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-yellow-400" />
          O Significado Profundo
        </h3>
        
        <div className="space-y-4">
          <div className="bg-black/40 border border-yellow-500/20 rounded-lg p-4">
            <h4 className="text-yellow-300 font-bold mb-2">A Constante de Planck</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              A constante <Equation displayMode={false}>{String.raw`h \approx 6.626 \times 10^{-34} \text{ J} \cdot \text{s}`}</Equation> é uma das constantes fundamentais da natureza. Ela define a escala em que os efeitos quânticos se tornam importantes. Para objetos macroscópicos, <Equation displayMode={false}>{String.raw`h\nu`}</Equation> é tão pequeno que a quantização é imperceptível. Mas para átomos e luz, é fundamental!
            </p>
          </div>

          <div className="bg-black/40 border border-yellow-500/20 rounded-lg p-4">
            <h4 className="text-yellow-300 font-bold mb-2">Recuperação do Limite Clássico</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Um aspecto notável da fórmula de Planck é que ela <strong>recupera a Lei de Rayleigh-Jeans</strong> em baixas frequências. Isso mostra que a física clássica não estava "errada" — ela era apenas um caso especial de uma teoria mais geral. A física quântica <strong>contém</strong> a física clássica como um limite.
            </p>
          </div>

          <div className="bg-black/40 border border-yellow-500/20 rounded-lg p-4">
            <h4 className="text-yellow-300 font-bold mb-2">A Supressão do Ultravioleta</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              O fator exponencial <Equation displayMode={false}>{String.raw`e^{-h\nu/k_B T}`}</Equation> na fórmula de Planck é o "herói" que salva a física. Ele garante que a radiação em altas frequências seja exponencialmente suprimida, impedindo a divergência para o infinito. Essa supressão é uma consequência direta da quantização de energia.
            </p>
          </div>
        </div>
      </div>

      {/* A Conclusão Relutante de Planck */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Award className="text-yellow-400" /> A Conclusão Relutante
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Planck havia resolvido o quebra-cabeça. Mas, para isso, ele teve que "trapacear", introduzindo uma regra que ele mesmo não compreendia completamente.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Inicialmente, ele acreditava que essa estranha regra de quantização era apenas um <strong>artifício matemático</strong> ou algo que se aplicava somente aos osciladores nas paredes da cavidade. Ele não percebeu imediatamente que havia descoberto uma propriedade fundamental da própria energia.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Planck estava relutante em aceitar a quantização como uma propriedade real da natureza. Em suas próprias palavras, ele descreveu a introdução da quantização como um "ato de desespero" — uma solução desesperada para um problema que a física clássica não conseguia resolver.
        </p>
        <div className="bg-purple-900/40 border border-purple-500/30 rounded-lg p-4">
          <p className="text-center text-purple-200 font-semibold">
            Ele havia encontrado a solução, mas ainda não tinha ideia da revolução que sua "solução desesperada" estava prestes a iniciar. A quantização não era apenas um artifício — era a porta de entrada para uma compreensão completamente nova da realidade.
          </p>
        </div>
      </div>

      <div className="text-center pt-8">
        <button 
          onClick={() => onNavigate('ACT_4_LEGACY')}
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-pink-500/30"
        >
          Ver o Legado Inesperado <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}