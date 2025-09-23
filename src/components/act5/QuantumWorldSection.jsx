// src/components/act5/QuantumWorldSection.jsx
import { ArrowRight } from 'lucide-react';

export function QuantumWorldSection({ onNavigate }) {
  const pioneers = [
    { name: "Albert Einstein", year: 1905, contribution: "propôs que a própria luz era quantizada em partículas (os fótons), usando a relação de Planck (E = hν) para explicar perfeitamente o Efeito Fotoelétrico." },
    { name: "Niels Bohr", year: 1913, contribution: "usou a quantização para criar seu modelo do átomo de hidrogênio." },
    { name: "Louis de Broglie", year: 1924, contribution: "propôs que as próprias partículas, como elétrons, também tinham propriedades ondulatórias." },
    { name: "Heisenberg, Schrödinger e outros", year: 1925, contribution: "desenvolveram o formalismo matemático completo da mecânica quântica, confirmando a natureza fundamentalmente 'granulada' e probabilística do nosso universo." }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">A Faísca que Acendeu a Revolução</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Originalmente, Planck foi cauteloso, sugerindo que a quantização se aplicava apenas aos osciladores nas paredes da cavidade. A partir daí, a avalanche quântica não pôde mais ser parada.
        </p>
      </div>

      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        {pioneers.map((pioneer, index) => (
          <div key={pioneer.name} className={`py-4 ${index < pioneers.length - 1 ? 'border-b border-gray-700' : ''}`}>
            <h3 className="text-xl font-bold text-indigo-300">{pioneer.name} ({pioneer.year})</h3>
            <p className="text-lg text-gray-300 mt-2">{pioneer.contribution}</p>
          </div>
        ))}
      </div>
      
      <div className="text-center pt-8">
        <button 
          onClick={onNavigate} 
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-indigo-500/30"
        >
          Ver a Era Tecnológica <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}