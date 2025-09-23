// src/act5.jsx

import { useState } from 'react';
import { Sparkles, Atom, Cpu, Rocket } from 'lucide-react';

// Importando os componentes de cada seção do Ato 5
import { SeedOfRevolutionSection } from './components/act5/SeedOfRevolutionSection';
import { QuantumWorldSection } from './components/act5/QuantumWorldSection';
import { TechnologicalEraSection } from './components/act5/TechnologicalEraSection';
import { QuantumFutureSection } from './components/act5/QuantumFutureSection';

const SECTIONS = {
  SEED: 'SEED',
  WORLD: 'WORLD',
  TECH: 'TECH',
  FUTURE: 'FUTURE',
};

const sectionData = [
  { id: SECTIONS.SEED, title: 'A Semente da Revolução', icon: <Sparkles className="w-5 h-5" /> },
  { id: SECTIONS.WORLD, title: 'O Mundo Quântico', icon: <Atom className="w-5 h-5" /> },
  { id: SECTIONS.TECH, title: 'A Era Tecnológica', icon: <Cpu className="w-5 h-5" /> },
  { id: SECTIONS.FUTURE, title: 'O Futuro Quântico', icon: <Rocket className="w-5 h-5" /> },
];

export default function Act5({ onNavigate, actsData }) {
  const [currentSection, setCurrentSection] = useState(SECTIONS.SEED);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white animate-in fade-in duration-500">
      <header className="relative container mx-auto px-6 py-12 text-center">
        <span className="mb-4 inline-block bg-white/10 text-yellow-200 border border-white/20 rounded-full px-4 py-1 font-semibold">Ato 5 de 5</span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">O Legado Quântico</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Como a faísca de uma fornalha, analisada por Planck, acendeu a maior revolução científica da história moderna.
        </p>
        <div className="flex justify-center space-x-4 mt-8">
          {actsData.map(act => {
            const isActive = act.id === 'ACT_5'; // Supondo que o ID para o Ato 5 seja 'ACT_5'
            return (
              <button 
                key={act.id} 
                onClick={() => onNavigate(act.id)} 
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${ 
                  isActive 
                  ? 'bg-gradient-to-r from-yellow-500 to-pink-500 text-white shadow-lg' 
                  : 'border border-gray-600 text-gray-300 hover:bg-gray-800' 
                }`}
              >
                {act.title}
              </button>
            )
          })}
        </div>
      </header>
      
      <nav className="sticky top-0 z-50 bg-black/30 backdrop-blur-md border-y border-white/10">
        <div className="container mx-auto px-6 flex justify-center">
          {sectionData.map(section => (
            <button 
              key={section.id} 
              onClick={() => setCurrentSection(section.id)} 
              className={`flex items-center gap-2 px-4 py-3 font-semibold border-b-4 transition-colors ${ 
                currentSection === section.id 
                ? 'border-yellow-400 text-white' 
                : 'border-transparent text-gray-300 hover:text-white' 
              }`}
            >
              {section.icon}
              <span className="hidden md:block">{section.title}</span>
            </button>
          ))}
        </div>
      </nav>
      
      <main className="container mx-auto px-6 py-16">
        {currentSection === SECTIONS.SEED && <SeedOfRevolutionSection onNavigate={() => setCurrentSection(SECTIONS.WORLD)} />}
        {currentSection === SECTIONS.WORLD && <QuantumWorldSection onNavigate={() => setCurrentSection(SECTIONS.TECH)} />}
        {currentSection === SECTIONS.TECH && <TechnologicalEraSection onNavigate={() => setCurrentSection(SECTIONS.FUTURE)} />}
        {currentSection === SECTIONS.FUTURE && <QuantumFutureSection onNavigate={() => onNavigate('ACT_1')} />}
      </main>
    </div>
  );
}