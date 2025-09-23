// src/act1.jsx

import { useState } from 'react';
import { Lightbulb, Eye, Flame } from 'lucide-react';

// Importe os componentes para cada seção do Ato 1
// Certifique-se que estes arquivos existem na pasta src/components/act1/
import { UniversalGlowSection } from './components/act1/UniversalGlowSection';
import { BlackBodyIdealSection } from './components/act1/BlackBodyIdealSection';
import { LaboratorySection } from './components/act1/LaboratorySection';

// Constantes para a navegação interna do Ato 1
const SECTIONS = { 
    INTRO: 'INTRO', 
    IDEAL_BODY: 'IDEAL_BODY', 
    LABORATORY: 'LABORATORY' 
};

// Dados para os botões de navegação das seções
const sectionData = [
  { id: SECTIONS.INTRO, title: 'O Brilho Universal', icon: <Lightbulb className="w-5 h-5" /> },
  { id: SECTIONS.IDEAL_BODY, title: 'O Corpo Negro Ideal', icon: <Eye className="w-5 h-5" /> },
  { id: SECTIONS.LABORATORY, title: 'O Laboratório da Natureza', icon: <Flame className="w-5 h-5" /> },
];

export default function Act1({ onNavigate, actsData }) {
  const [currentSection, setCurrentSection] = useState(SECTIONS.INTRO);
  // Estado para o slider de temperatura, que será usado no UniversalGlowSection
  const [temperature, setTemperature] = useState(1500);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white animate-in fade-in duration-500">
      {/* Cabeçalho do Ato */}
      <header className="relative container mx-auto px-6 py-12 text-center">
        <span className="mb-4 inline-block bg-white/10 text-blue-200 border border-white/20 rounded-full px-4 py-1 font-semibold">Ato 1 de 5</span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">A Faísca da Revolução</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A jornada começa com uma pergunta simples: por que as coisas brilham quando esquentam?
        </p>
        <div className="flex justify-center space-x-4 mt-8">
          {actsData.map(act => {
            const isActive = act.id === 'ACT_1';
            return (
              <button 
                key={act.id} 
                onClick={() => onNavigate(act.id)} 
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${ 
                  isActive 
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/30' 
                  : 'border border-gray-600 text-gray-300 hover:bg-gray-800' 
                }`}
              >
                {act.title}
              </button>
            )
          })}
        </div>
      </header>
      
      {/* Navegação das Seções */}
      <nav className="sticky top-0 z-50 bg-black/30 backdrop-blur-md border-y border-white/10">
        <div className="container mx-auto px-6 flex justify-center">
          {sectionData.map(section => (
            <button 
              key={section.id} 
              onClick={() => setCurrentSection(section.id)} 
              className={`flex items-center gap-2 px-4 py-3 font-semibold border-b-4 transition-colors ${ 
                currentSection === section.id 
                ? 'border-orange-500 text-white' 
                : 'border-transparent text-gray-300 hover:text-white' 
              }`}
            >
              {section.icon}
              <span className="hidden md:block">{section.title}</span>
            </button>
          ))}
        </div>
      </nav>
      
      {/* Conteúdo Principal */}
      <main className="container mx-auto px-6 py-16">
        {currentSection === SECTIONS.INTRO && (
          <UniversalGlowSection 
            temperature={temperature} 
            setTemperature={setTemperature} 
            onNavigate={() => setCurrentSection(SECTIONS.IDEAL_BODY)} 
          />
        )}
        {currentSection === SECTIONS.IDEAL_BODY && (
          <BlackBodyIdealSection onNavigate={() => setCurrentSection(SECTIONS.LABORATORY)} />
        )}
        {currentSection === SECTIONS.LABORATORY && (
          // Navega para o próximo Ato (ACT_2)
          <LaboratorySection onNavigate={() => onNavigate('ACT_2')} />
        )}
      </main>
    </div>
  );
}