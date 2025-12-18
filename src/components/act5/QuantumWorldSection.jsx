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
            <p className="text-gray-300">
              <strong>Efeito Fotoelétrico:</strong> Einstein explicou como a luz ejetava elétrons de metais usando a ideia de fótons (quanta de luz). Ganhou o Prêmio Nobel em 1921 por essa descoberta.
            </p>
            <p className="text-gray-300 mt-2">
              <strong>Impacto:</strong> Forneceu evidência experimental para a quantização da luz e abriu caminho para a fotônica moderna.
            </p>
          </div>

          {/* Niels Bohr */}
          <div className="bg-black/40 border border-blue-500/20 rounded-lg p-6">
            <h4 className="text-xl font-bold text-blue-300 mb-3">Niels Bohr (1885-1962)</h4>
            <p className="text-gray-300">
              <strong>Modelo do Átomo:</strong> Bohr propôs que os elétrons ocupam órbitas quantizadas ao redor do núcleo, não qualquer órbita. Ganhou o Prêmio Nobel em 1922.
            </p>
            <p className="text-gray-300 mt-2">
              <strong>Impacto:</strong> Explicou a estrutura atômica e o espectro de linhas dos átomos, fornecendo evidência para a quantização.
            </p>
          </div>

          {/* Louis de Broglie */}
          <div className="bg-black/40 border border-blue-500/20 rounded-lg p-6">
            <h4 className="text-xl font-bold text-blue-300 mb-3">Louis de Broglie (1892-1987)</h4>
            <p className="text-gray-300">
              <strong>Dualidade Onda-Partícula:</strong> De Broglie propôs que não apenas a luz, mas também a matéria tem propriedades ondulatórias. Ganhou o Prêmio Nobel em 1929.
            </p>
            <p className="text-gray-300 mt-2">
              <strong>Impacto:</strong> Revolucionou nossa compreensão da natureza da matéria e levou ao desenvolvimento da microscopia eletrônica.
            </p>
          </div>

          {/* Werner Heisenberg */}
          <div className="bg-black/40 border border-blue-500/20 rounded-lg p-6">
            <h4 className="text-xl font-bold text-blue-300 mb-3">Werner Heisenberg (1901-1976)</h4>
            <p className="text-gray-300">
              <strong>Princípio da Incerteza:</strong> Heisenberg mostrou que há limites fundamentais para o quanto podemos conhecer simultaneamente a posição e o momento de uma partícula. Ganhou o Prêmio Nobel em 1932.
            </p>
            <p className="text-gray-300 mt-2">
              <strong>Impacto:</strong> Revelou uma limitação fundamental da realidade física, não apenas do nosso conhecimento.
            </p>
          </div>

          {/* Erwin Schrödinger */}
          <div className="bg-black/40 border border-blue-500/20 rounded-lg p-6">
            <h4 className="text-xl font-bold text-blue-300 mb-3">Erwin Schrödinger (1887-1961)</h4>
            <p className="text-gray-300">
              <strong>Equação de Onda Quântica:</strong> Schrödinger desenvolveu a equação fundamental que descreve como as ondas de matéria evoluem no tempo. Ganhou o Prêmio Nobel em 1933.
            </p>
            <p className="text-gray-300 mt-2">
              <strong>Impacto:</strong> Forneceu o formalismo matemático para toda a mecânica quântica, permitindo calcular as propriedades de átomos e moléculas.
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
          onClick={() => onNavigate()}
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-blue-500/30"
        >
          Explorar a Era Tecnológica <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}