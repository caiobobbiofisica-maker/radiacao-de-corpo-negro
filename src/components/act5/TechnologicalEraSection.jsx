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
          {/* Transistores */}
          <div className="bg-black/40 border border-yellow-500/20 rounded-lg p-4">
            <h4 className="text-lg font-bold text-yellow-300 mb-2">Transistores e Semicondutores</h4>
            <p className="text-gray-300">
              O transistor, inventado em 1947, é baseado na mecânica quântica dos semicondutores. Todos os computadores, smartphones e dispositivos eletrônicos modernos usam bilhões de transistores. Sem a compreensão da mecânica quântica, essa tecnologia seria impossível.
            </p>
          </div>

          {/* Lasers */}
          <div className="bg-black/40 border border-yellow-500/20 rounded-lg p-4">
            <h4 className="text-lg font-bold text-yellow-300 mb-2">Lasers</h4>
            <p className="text-gray-300">
              Os lasers funcionam através da emissão estimulada de radiação, um processo completamente quântico. Lasers são usados em cirurgias, comunicações ópticas, leitura de CDs/DVDs, impressoras, e muitas outras aplicações.
            </p>
          </div>

          {/* LEDs */}
          <div className="bg-black/40 border border-yellow-500/20 rounded-lg p-4">
            <h4 className="text-lg font-bold text-yellow-300 mb-2">Diodos Emissores de Luz (LEDs)</h4>
            <p className="text-gray-300">
              Os LEDs funcionam através da recombinação de elétrons e buracos em semicondutores, um processo quântico. Eles são muito mais eficientes que lâmpadas incandescentes e estão revolucionando a iluminação.
            </p>
          </div>

          {/* Células Solares */}
          <div className="bg-black/40 border border-yellow-500/20 rounded-lg p-4">
            <h4 className="text-lg font-bold text-yellow-300 mb-2">Células Solares e Painéis Fotovoltaicos</h4>
            <p className="text-gray-300">
              As células solares convertem luz em eletricidade através do efeito fotoelétrico, o mesmo fenômeno que Einstein explicou usando a mecânica quântica. Essa tecnologia é crucial para a energia renovável.
            </p>
          </div>

          {/* Ressonância Magnética */}
          <div className="bg-black/40 border border-yellow-500/20 rounded-lg p-4">
            <h4 className="text-lg font-bold text-yellow-300 mb-2">Ressonância Magnética (RM)</h4>
            <p className="text-gray-300">
              A RM usa propriedades quânticas de núcleos atômicos para criar imagens do corpo humano. É uma ferramenta médica essencial para diagnóstico, e sua operação é baseada completamente em mecânica quântica.
            </p>
          </div>

          {/* Microscópios Eletrônicos */}
          <div className="bg-black/40 border border-yellow-500/20 rounded-lg p-4">
            <h4 className="text-lg font-bold text-yellow-300 mb-2">Microscópios Eletrônicos</h4>
            <p className="text-gray-300">
              Os microscópios eletrônicos usam o comportamento ondulatório dos elétrons (proposto por de Broglie) para alcançar resoluções muito maiores que microscópios ópticos. Eles são essenciais para pesquisa em biologia e nanotecnologia.
            </p>
          </div>

          {/* GPS */}
          <div className="bg-black/40 border border-yellow-500/20 rounded-lg p-4">
            <h4 className="text-lg font-bold text-yellow-300 mb-2">GPS (Sistema de Posicionamento Global)</h4>
            <p className="text-gray-300">
              O GPS depende de relógios atômicos extremamente precisos, que funcionam através de transições quânticas em átomos. Sem a mecânica quântica, o GPS não seria possível.
            </p>
          </div>

          {/* Câmeras Digitais */}
          <div className="bg-black/40 border border-yellow-500/20 rounded-lg p-4">
            <h4 className="text-lg font-bold text-yellow-300 mb-2">Câmeras Digitais</h4>
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
          onClick={onNavigate} 
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-yellow-500/30"
        >
          Explorar o Futuro Quântico <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}