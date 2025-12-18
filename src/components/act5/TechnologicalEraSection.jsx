// src/components/act5/TechnologicalEraSection.jsx
import { ArrowRight, Zap } from 'lucide-react';

export function TechnologicalEraSection({ onNavigate }) {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">A Era Tecnológica</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Como a mecânica quântica transformou a tecnologia
        </p>
      </div>

      {/* Seção: Introdução */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          A mecânica quântica não é apenas teoria abstrata. Ela é a base de praticamente toda a tecnologia moderna. Sem a compreensão da mecânica quântica, não teríamos computadores, smartphones, internet, lasers, ou muitas outras tecnologias que usamos diariamente.
        </p>
      </div>

      {/* Seção: Aplicações Tecnológicas */}
      <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border border-yellow-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-yellow-400" />
          Tecnologias Baseadas em Mecânica Quântica
        </h3>
        
        <div className="space-y-6 mt-6">
          {/* Transistores e Semicondutores */}
          <div className="bg-black/40 border border-yellow-500/20 rounded-lg p-4">
            <p className="text-yellow-300 font-semibold mb-2">🖥️ Transistores e Semicondutores</p>
            <p className="text-gray-300">
              Os transistores funcionam através de tunelamento quântico e quantização de níveis de energia. Sem eles, não teríamos computadores, smartphones ou qualquer eletrônica moderna.
            </p>
          </div>

          {/* Lasers */}
          <div className="bg-black/40 border border-yellow-500/20 rounded-lg p-4">
            <p className="text-yellow-300 font-semibold mb-2">🔴 Lasers</p>
            <p className="text-gray-300">
              Os lasers funcionam através da emissão estimulada de radiação, um processo quântico. Usados em cirurgias, comunicações, leitura de dados de CDs/DVDs, e muito mais.
            </p>
          </div>

          {/* LEDs */}
          <div className="bg-black/40 border border-yellow-500/20 rounded-lg p-4">
            <p className="text-yellow-300 font-semibold mb-2">💡 LEDs (Diodos Emissores de Luz)</p>
            <p className="text-gray-300">
              Os LEDs funcionam através da recombinação de elétrons e buracos em semicondutores, emitindo fótons. São muito mais eficientes que lâmpadas incandescentes.
            </p>
          </div>

          {/* Células Solares */}
          <div className="bg-black/40 border border-yellow-500/20 rounded-lg p-4">
            <p className="text-yellow-300 font-semibold mb-2">☀️ Células Solares</p>
            <p className="text-gray-300">
              As células solares convertem fótons em eletricidade através do efeito fotoelétrico, um processo quântico. São fundamentais para energia renovável.
            </p>
          </div>

          {/* Ressonância Magnética */}
          <div className="bg-black/40 border border-yellow-500/20 rounded-lg p-4">
            <p className="text-yellow-300 font-semibold mb-2">🏥 Ressonância Magnética (RM)</p>
            <p className="text-gray-300">
              A RM funciona através da manipulação de spins nucleares, uma propriedade quântica. É uma ferramenta essencial para diagnóstico médico.
            </p>
          </div>

          {/* GPS */}
          <div className="bg-black/40 border border-yellow-500/20 rounded-lg p-4">
            <p className="text-yellow-300 font-semibold mb-2">🛰️ GPS (Sistema de Posicionamento Global)</p>
            <p className="text-gray-300">
              O GPS depende de relógios atômicos que funcionam através de transições quânticas. Sem eles, a precisão do GPS seria impossível.
            </p>
          </div>

          {/* Câmeras Digitais */}
          <div className="bg-black/40 border border-yellow-500/20 rounded-lg p-4">
            <p className="text-yellow-300 font-semibold mb-2">📷 Câmeras Digitais</p>
            <p className="text-gray-300">
              As câmeras digitais usam sensores CCD ou CMOS que funcionam através do efeito fotoelétrico. Quando a luz bate no sensor, elétrons são liberados (um processo quântico), criando a imagem digital.
            </p>
          </div>
        </div>
      </div>

      {/* Seção: O Impacto Econômico */}
      <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">O Impacto Econômico</h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          A indústria de tecnologia, que é uma das maiores economias do mundo, é baseada em aplicações de mecânica quântica. Trilhões de dólares em valor econômico dependem de tecnologias quânticas. Sem Planck, Einstein, Bohr, Heisenberg e Schrödinger, o mundo moderno seria completamente diferente.
        </p>
      </div>

      <div className="text-center pt-8">
        <button 
          onClick={() => onNavigate()}
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-yellow-500/30"
        >
          Explorar o Futuro Quântico <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}