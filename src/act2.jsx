// src/act2.jsx

import { useState } from 'react';
import { CrimeSceneSection } from './components/act2/CrimeSceneSection';
import { FingerprintSection } from './components/act2/FingerprintSection';
import { RulesOfTheGameSection } from './components/act2/RulesOfTheGameSection';
import { Search, Target, BarChart3 } from 'lucide-react';

// Constantes para a navegação interna
const SECTIONS = {
  CRIME_SCENE: 'CRIME_SCENE',
  FINGERPRINT: 'FINGERPRINT',
  RULES: 'RULES',
};

const sectionData = [
    { id: SECTIONS.CRIME_SCENE, title: 'A Cena do Crime', icon: <Search className="w-5 h-5" /> },
    { id: SECTIONS.FINGERPRINT, title: 'Pista Nº 1', icon: <Target className="w-5 h-5" /> },
    { id: SECTIONS.RULES, title: 'Pista Nº 2', icon: <BarChart3 className="w-5 h-5" /> }
];

// CORREÇÃO: O componente agora recebe 'actsData' como propriedade
// e não define mais sua própria lista de atos.
export default function Act2({ onNavigate, actsData }) {
  const [currentSection, setCurrentSection] = useState(SECTIONS.CRIME_SCENE);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-800 to-yellow-900 text-white animate-in fade-in duration-500">
      <header className="relative container mx-auto px-6 py-12 text-center">
        <span className="mb-4 inline-block bg-white/10 text-red-200 border border-white/20 rounded-full px-4 py-1 font-semibold">Ato 2 de 5</span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Os Dados Misteriosos</h1>
        
        {/* CORREÇÃO: Os botões agora são gerados a partir da lista 'actsData' recebida do App.jsx */}
        <div className="flex justify-center space-x-4 mt-8">
          {actsData.map(act => {
            const isActive = act.id === 'ACT_2';
            return (
              <button 
                key={act.id}
                onClick={() => onNavigate(act.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  isActive 
                  ? 'bg-red-600 text-white shadow-lg shadow-red-500/30' 
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
            <button key={section.id} onClick={() => setCurrentSection(section.id)} className={`flex items-center gap-2 px-4 py-3 font-semibold border-b-4 transition-colors ${ currentSection === section.id ? 'border-red-500 text-white' : 'border-transparent text-gray-300 hover:text-white' }`}>
              {section.icon}
              <span className="hidden md:block">{section.title}</span>
            </button>
          ))}
        </div>
      </nav>
      
      <main className="container mx-auto px-6 py-12">
        {currentSection === SECTIONS.CRIME_SCENE && <CrimeSceneSection onNavigate={() => setCurrentSection(SECTIONS.FINGERPRINT)} />}
        {currentSection === SECTIONS.FINGERPRINT && <FingerprintSection onNavigate={() => setCurrentSection(SECTIONS.RULES)} />}
        {currentSection === SECTIONS.RULES && <RulesOfTheGameSection onNavigateBack={() => setCurrentSection(SECTIONS.FINGERPRINT)} onNavigateNext={() => onNavigate('ACT_3')} />}
      </main>
    </div>
  );
}