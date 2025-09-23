// src/components/act5/TechnologicalEraSection.jsx
import { ArrowRight, Cpu, Smartphone, Zap, Lightbulb, Heart, Satellite } from 'lucide-react';

export function TechnologicalEraSection({ onNavigate }) {
  const technologies = [
    { name: "Transistores", icon: <Cpu className="text-blue-400" />, description: "A base de todos os computadores e smartphones." },
    { name: "Lasers", icon: <Zap className="text-red-400" />, description: "Usados em tudo, desde leitores de Blu-ray a cirurgias." },
    { name: "LEDs", icon: <Lightbulb className="text-yellow-400" />, description: "Iluminação eficiente e telas de todos os dispositivos." },
    { name: "Ressonância Magnética", icon: <Heart className="text-pink-400" />, description: "Uma janela não invasiva para dentro do corpo humano." },
    { name: "GPS", icon: <Satellite className="text-green-400" />, description: "Relógios atômicos em satélites exigem correções quânticas." },
    { name: "Câmeras Digitais", icon: <Smartphone className="text-purple-400" />, description: "Sensores que usam o efeito fotoelétrico para capturar luz." },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Do Átomo ao Seu Smartphone</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A física quântica não ficou nos quadros-negros. Ela é a fundação invisível da nossa sociedade tecnológica moderna.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map(tech => (
          <div key={tech.name} className="bg-black/40 border border-white/10 rounded-lg p-6 hover:border-purple-400/50 transition-colors">
            <div className="flex items-center gap-4 mb-3">
              {tech.icon}
              <h3 className="text-xl font-bold text-white">{tech.name}</h3>
            </div>
            <p className="text-gray-400">{tech.description}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-8 text-center">
        <p className="text-xl text-purple-200 leading-relaxed">
          Cada vez que você usa seu smartphone, assiste a uma TV ou se conecta à internet, você está a usar biliões de dispositivos que só funcionam por causa das regras estranhas do mundo quântico.
        </p>
      </div>

      <div className="text-center pt-8">
        <button 
          onClick={onNavigate} 
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-purple-500/30"
        >
          Vislumbrar o Futuro <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}