// src/components/act5/SeedOfRevolutionSection.jsx
import { ArrowRight, Sprout } from 'lucide-react';
import { Equation } from '../Equation';

export function SeedOfRevolutionSection({ onNavigate }) {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">A Semente da Revolução</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          O postulado de Planck que mudou tudo
        </p>
      </div>

      {/* Seção: O Postulado */}
      <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Sprout className="w-6 h-6 text-green-400" />
          O Postulado de Planck
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Em 1900, Max Planck fez uma suposição revolucionária que seria o ponto de partida para toda a mecânica quântica:
        </p>
        <div className="bg-black/40 border border-green-500/20 rounded-lg p-6 text-center">
          <p className="text-gray-300 text-lg mb-4">
            "A energia é emitida e absorvida em quantidades discretas chamadas quanta, cuja magnitude é proporcional à frequência da radiação."
          </p>
          <Equation>{String.raw`E = h\nu`}</Equation>
          <p className="text-gray-400 mt-4 text-sm">
            onde h = 6,626 × 10⁻³⁴ J·s (constante de Planck)
          </p>
        </div>
      </div>

      {/* Seção: Por Que Era Radical */}
      <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Por Que Era Tão Radical?</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Essa ideia desafiava tudo o que a física clássica havia ensinado:
        </p>
        <div className="space-y-4 mt-4">
          <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
            <p className="text-purple-300 font-semibold mb-2">Quebrou a Continuidade</p>
            <p className="text-gray-300">
              A física clássica assumia que tudo era contínuo. Planck propôs que a energia era discreta.
            </p>
          </div>
          <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
            <p className="text-purple-300 font-semibold mb-2">Introduziu o Acaso</p>
            <p className="text-gray-300">
              Se a energia é quantizada, então processos que parecem contínuos são na verdade saltos entre estados discretos.
            </p>
          </div>
          <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
            <p className="text-purple-300 font-semibold mb-2">Desafiou a Intuição</p>
            <p className="text-gray-300">
              Nossa experiência cotidiana não mostra quantização. Mas a natureza microscópica funciona assim.
            </p>
          </div>
        </div>
      </div>

      {/* Seção: O Impacto */}
      <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">O Impacto Duradouro</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Esse postulado simples teve consequências profundas:
        </p>
        <ul className="text-gray-300 text-lg leading-relaxed space-y-2 list-disc list-inside mt-4">
          <li>Resolveu a Catástrofe do Ultravioleta</li>
          <li>Explicou o Efeito Fotoelétrico (Einstein)</li>
          <li>Levou ao Modelo de Bohr do Átomo</li>
          <li>Abriu caminho para a Mecânica Quântica Completa</li>
          <li>Revolucionou a tecnologia do século XX</li>
        </ul>
      </div>

      <div className="text-center pt-8">
        <button 
          onClick={onNavigate} 
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-green-500/30"
        >
          Explorar o Mundo Quântico <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}