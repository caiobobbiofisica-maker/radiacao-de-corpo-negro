// src/Act3.jsx

import { useState } from 'react';
import { Brain, AlertTriangle, Zap } from 'lucide-react';

// Importando as seções internas do Ato 3
import { ClassicalTheorySection } from './components/act3/ClassicalTheorySection';
import { UVCatastropheSection } from './components/act3/UVCatastropheSection';
import { PhysicsCrisisSection } from './components/act3/PhysicsCrisisSection';

// Constantes para a navegação interna do Ato 3
const SECTIONS = { THEORY: 'THEORY', CATASTROPHE: 'CATASTROPHE', CRISIS: 'CRISIS' };

const sectionData = [
  { id: SECTIONS.THEORY, title: 'A Teoria Clássica', icon: <Brain className="w-5 h-5" /> },
  { id: SECTIONS.CATASTROPHE, title: 'A Catástrofe', icon: <AlertTriangle className="w-5 h-5" /> },
  { id: SECTIONS.CRISIS, title: 'A Crise da Física', icon: <Zap className="w-5 h-5" /> }
];

// O componente agora recebe 'onNavigate' e 'actsData' como propriedades
export default function Act3({ onNavigate, actsData }) {
  const [currentSection, setCurrentSection] = useState(SECTIONS.THEORY);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-red-900 to-rose-900 text-white animate-in fade-in duration-500">
      {/* Cabeçalho do Ato */}
      <header className="relative container mx-auto px-6 py-12 text-center">
        <span className="mb-4 inline-block bg-white/10 text-purple-200 border border-white/20 rounded-full px-4 py-1 font-semibold">Ato 3 de 5</span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">A Catástrofe do Ultravioleta</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          O ponto de ruptura onde a física clássica colidiu com a realidade quântica.
        </p>
        <div className="flex justify-center space-x-4 mt-8">
          {/* Mapeando a lista de atos recebida via props */}
          {actsData.map(act => {
            const isActive = act.id === 'ACT_3';
            return (
              <button 
                key={act.id} 
                onClick={() => onNavigate(act.id)} 
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${ 
                  isActive 
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30' 
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
                ? 'border-purple-500 text-white' 
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
        {currentSection === SECTIONS.THEORY && (
          <ClassicalTheorySection onNavigate={() => setCurrentSection(SECTIONS.CATASTROPHE)} />
        )}
        {currentSection === SECTIONS.CATASTROPHE && (
          <UVCatastropheSection onNavigate={() => setCurrentSection(SECTIONS.CRISIS)} />
        )}
        {currentSection === SECTIONS.CRISIS && (
          <PhysicsCrisisSection 
  onNavigateBack={() => setCurrentSection(SECTIONS.CATASTROPHE)} 
  onNavigate={onNavigate}
/>
        )}
      </main>
    </div>
  );
}