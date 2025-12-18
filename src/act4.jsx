// src/act4.jsx

import { useState } from 'react';
import { Lightbulb, Zap, Brain, Award } from 'lucide-react';
import { PlanckIntroductionSection } from './components/act4/PlanckIntroductionSection';
import { QuantaHypothesisSection } from './components/act4/QuantaHypothesisSection';
import { PlanckFormulaSection } from './components/act4/PlanckFormulaSection';
import { QuantumRevolutionSection } from './components/act4/QuantumRevolutionSection';

// Constantes para a navegação interna
const SECTIONS = { INTRO: 'INTRO', HYPOTHESIS: 'HYPOTHESIS', FORMULA: 'FORMULA', REVOLUTION: 'REVOLUTION' };

const sectionData = [
  { id: SECTIONS.INTRO, title: 'Um Ato de Desespero', icon: <Brain className="w-5 h-5" /> },
  { id: SECTIONS.HYPOTHESIS, title: 'Quebrando a Continuidade', icon: <Zap className="w-5 h-5" /> },
  { id: SECTIONS.FORMULA, title: 'A Fórmula da Solução', icon: <Award className="w-5 h-5" /> },
  { id: SECTIONS.REVOLUTION, title: 'O Legado Inesperado', icon: <Lightbulb className="w-5 h-5" /> }
];

// CORREÇÃO: O componente agora recebe 'actsData' como propriedade
// e não define mais a sua própria lista de atos.
export default function Act4({ onNavigate, actsData }) {
  const [currentSection, setCurrentSection] = useState(SECTIONS.INTRO);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white animate-in fade-in duration-500">
      {/* Cabeçalho */}
      <header className="relative container mx-auto px-6 py-12 text-center">
        <span className="mb-4 inline-block bg-white/10 text-indigo-200 border border-white/20 rounded-full px-4 py-1 font-semibold">Ato 4 de 5</span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Uma Ideia "Desesperada"</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Como a recusa em aceitar um colapso teórico forçou Max Planck a revolucionar a física.
        </p>
        
        {/* CORREÇÃO: Os botões agora são gerados a partir da lista 'actsData' recebida do App.jsx */}
        <div className="flex justify-center space-x-4 mt-8">
          {actsData.map(act => {
            const isActive = act.id === 'ACT_4';
            return (
              <button 
                key={act.id} 
                onClick={() => onNavigate(act.id)} 
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${ 
                  isActive 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' 
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
                ? 'border-indigo-500 text-white' 
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
        {currentSection === SECTIONS.INTRO && <PlanckIntroductionSection onNavigate={() => setCurrentSection(SECTIONS.HYPOTHESIS)} />}
        {currentSection === SECTIONS.HYPOTHESIS && <QuantaHypothesisSection onNavigate={() => setCurrentSection(SECTIONS.FORMULA)} />}
        {currentSection === SECTIONS.FORMULA && <PlanckFormulaSection onNavigate={() => setCurrentSection(SECTIONS.REVOLUTION)} />}
        {currentSection === SECTIONS.REVOLUTION && <QuantumRevolutionSection onNavigateBack={() => setCurrentSection(SECTIONS.FORMULA)} onNavigate={() => onNavigate('ACT_5')} />}
      </main>
    </div>
  );
}