// src/components/act3/ClassicalTheorySection.jsx
import { useState } from 'react';
import { ArrowRight, Calculator, Waves, Music } from 'lucide-react';
import { StandingWaveModel } from './StandingWaveModel';
import { ModeFrequencyChart } from './ModeFrequencyChart';
import { Equation } from '../Equation'; // Supondo que você tenha este componente

export function ClassicalTheorySection({ onNavigate }) {
  const [showWaveModel, setShowWaveModel] = useState(false);

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">A Teoria Clássica em Ação</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Armados com as leis de Maxwell e Boltzmann, os físicos Lord Rayleigh e Sir James Jeans tentaram decifrar o mistério.
        </p>
      </div>

      {/* Passo 1: As Ondas na Caixa */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Waves className="text-sky-400" /> Passo 1: A Cavidade como um "Violão"
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          A primeira ideia foi modelar a radiação dentro da cavidade como <strong>ondas estacionárias</strong>, presas entre as paredes, assim como as vibrações em uma corda de violão. Cada onda possível é um "modo" de vibração.
        </p>
        <button 
          onClick={() => setShowWaveModel(!showWaveModel)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 rounded-lg font-semibold transition-all"
        >
          <Music className="w-5 h-5"/>
          {showWaveModel ? "Ocultar" : "Visualizar"} Modelo das Ondas
        </button>
        {showWaveModel && <StandingWaveModel />}
      </div>
      
      {/* Passo 2: Contando as Ondas */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Calculator className="text-orange-400" /> Passo 2: Contando os Modos
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          O próximo passo foi calcular quantos modos existiam para cada frequência. A descoberta foi alarmante: quanto <strong>maior a frequência</strong> (mais para o azul e ultravioleta), <strong>mais modos</strong> se tornavam possíveis, crescendo sem parar.
        </p>
        <ModeFrequencyChart />
      </div>

      <div className="text-center pt-8">
        <button 
          onClick={onNavigate} 
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-blue-500/30"
        >
          Ver a Consequência Desastrosa <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}