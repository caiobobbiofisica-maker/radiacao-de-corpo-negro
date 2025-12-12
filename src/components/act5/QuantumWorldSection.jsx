// src/components/act5/QuantumWorldSection.jsx
import { ArrowRight, Users } from 'lucide-react';

export function QuantumWorldSection({ onNavigate }) {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">O Mundo Quântico</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Os pioneiros que construíram a mecânica quântica
        </p>
      </div>

      {/* Seção: Os Gigantes da Física */}
      <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-blue-400" />
          Os Gigantes da Física Quântica
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Após Planck, uma geração de físicos brilhantes construiu sobre sua ideia revolucionária, criando a mecânica quântica moderna:
        </p>

        <div className="space-y-6">
          {/* Albert Einstein */}
          <div className="bg-black/40 border border-blue-500/20 rounded-lg p-6">
            <h4 className="text-xl font-bold text-blue-300 mb-3">Albert Einstein (1879-1955)</h4>
            <p className="text-gray-300 mb-3">
              <strong>Contribuição Principal:</strong> Explicou o efeito fotoelétrico usando a ideia de fótons (quanta de luz).
            </p>
            <p className="text-gray-300 mb-3">
              Em 1905, Einstein mostrou que a luz não é apenas uma onda, mas também se comporta como partículas. Quando a luz bate em um metal, ela transfere energia em pacotes discretos (fótons), explicando por que elétrons são ejetados apenas acima de uma certa frequência.
            </p>
            <p className="text-gray-300">
              <strong>Impacto:</strong> Validou experimentalmente a quantização de Planck. Ganhou o Prêmio Nobel em 1921 por essa descoberta.
            </p>
          </div>

          {/* Niels Bohr */}
          <div className="bg-black/40 border border-blue-500/20 rounded-lg p-6">
            <h4 className="text-xl font-bold text-blue-300 mb-3">Niels Bohr (1885-1962)</h4>
            <p className="text-gray-300 mb-3">
              <strong>Contribuição Principal:</strong> Desenvolveu o modelo do átomo baseado em órbitas quantizadas.
            </p>
            <p className="text-gray-300 mb-3">
              Bohr propôs que os elétrons ocupam órbitas discretas ao redor do núcleo, cada uma com uma energia bem definida. Os elétrons só podem saltar entre essas órbitas, emitindo ou absorvendo energia em quantidades específicas.
            </p>
            <p className="text-gray-300">
              <strong>Impacto:</strong> Explicou os espectros de emissão e absorção dos átomos. Seu modelo foi o precursor da mecânica quântica moderna.
            </p>
          </div>

          {/* Louis de Broglie */}
          <div className="bg-black/40 border border-blue-500/20 rounded-lg p-6">
            <h4 className="text-xl font-bold text-blue-300 mb-3">Louis de Broglie (1892-1987)</h4>
            <p className="text-gray-300 mb-3">
              <strong>Contribuição Principal:</strong> Propôs a dualidade onda-partícula para a matéria.
            </p>
            <p className="text-gray-300 mb-3">
              Se a luz (uma onda) se comporta como partícula, será que a matéria (partículas) se comporta como onda? De Broglie respondeu sim, propondo que toda partícula tem uma onda associada.
            </p>
            <p className="text-gray-300">
              <strong>Impacto:</strong> Abriu caminho para a mecânica ondulatória de Schrödinger. Ganhou o Prêmio Nobel em 1929.
            </p>
          </div>

          {/* Werner Heisenberg */}
          <div className="bg-black/40 border border-blue-500/20 rounded-lg p-6">
            <h4 className="text-xl font-bold text-blue-300 mb-3">Werner Heisenberg (1901-1976)</h4>
            <p className="text-gray-300 mb-3">
              <strong>Contribuição Principal:</strong> Formulou a mecânica das matrizes e descobriu o Princípio da Incerteza.
            </p>
            <p className="text-gray-300 mb-3">
              Heisenberg mostrou que não podemos conhecer simultaneamente a posição e o momento de uma partícula com precisão arbitrária. Essa limitação não é devida a imperfeições experimentais, mas é fundamental à natureza.
            </p>
            <p className="text-gray-300">
              <strong>Impacto:</strong> Revolucionou nossa compreensão da realidade. Ganhou o Prêmio Nobel em 1932.
            </p>
          </div>

          {/* Erwin Schrödinger */}
          <div className="bg-black/40 border border-blue-500/20 rounded-lg p-6">
            <h4 className="text-xl font-bold text-blue-300 mb-3">Erwin Schrödinger (1887-1961)</h4>
            <p className="text-gray-300 mb-3">
              <strong>Contribuição Principal:</strong> Desenvolveu a equação de onda que descreve o comportamento quântico.
            </p>
            <p className="text-gray-300 mb-3">
              A equação de Schrödinger é a equação fundamental da mecânica quântica. Ela descreve como a função de onda de um sistema evolui ao longo do tempo, permitindo calcular as propriedades de átomos e moléculas.
            </p>
            <p className="text-gray-300">
              <strong>Impacto:</strong> Forneceu o formalismo matemático para toda a mecânica quântica. Ganhou o Prêmio Nobel em 1933.
            </p>
          </div>
        </div>
      </div>

      {/* Seção: Uma Era de Ouro */}
      <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Uma Era de Ouro</h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          Os anos 1925-1930 foram uma era de ouro da física teórica. Em apenas alguns anos, esses cientistas revolucionários desenvolveram a mecânica quântica moderna, uma das maiores realizações intelectuais da humanidade. Suas contribuições moldaram não apenas a física, mas toda a tecnologia moderna.
        </p>
      </div>

      <div className="text-center pt-8">
        <button 
          onClick={onNavigate} 
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-blue-500/30"
        >
          Explorar a Era Tecnológica <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}