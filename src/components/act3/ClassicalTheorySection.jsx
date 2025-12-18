// src/components/act3/ClassicalTheorySection.jsx
import { useState } from 'react';
import { ArrowRight, Calculator, Waves, Music, AlertCircle } from 'lucide-react';
import { StandingWaveModel } from './StandingWaveModel';
import { ModeFrequencyChart } from './ModeFrequencyChart';
import { Equation } from '../Equation';

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

      {/* Passo 3: O Teorema da Equipartição de Energia */}
      <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Passo 3: Distribuindo a Energia</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Aqui vem o passo crucial. Os físicos usaram um dos pilares da termodinâmica clássica: o <strong className="text-purple-300">Teorema da Equipartição de Energia</strong>.
        </p>

        <div className="bg-black/50 border border-purple-500/20 rounded-lg p-6 mb-6">
          <h4 className="text-white font-bold mb-4">O Teorema da Equipartição de Energia</h4>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Em um sistema em equilíbrio térmico, a energia total se distribui <strong>igualmente entre todos os graus de liberdade</strong>. A cada modo de vibração, independentemente de sua frequência, cabe uma energia média de:
          </p>
          <div className="text-center mb-4 text-lg">
            <Equation displayMode={true}>{String.raw`\langle E \rangle = k_B T`}</Equation>
          </div>
          <p className="text-gray-300 text-sm">
            Onde <Equation displayMode={false}>{String.raw`k_B`}</Equation> é a constante de Boltzmann e <Equation displayMode={false}>{String.raw`T`}</Equation> é a temperatura absoluta.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
            <h4 className="text-purple-300 font-bold mb-2">🎪 A Cavidade = Salão de Festas</h4>
            <p className="text-gray-300 text-sm">Um lugar onde a energia (petiscos) é distribuída entre os convidados (modos de vibração).</p>
          </div>
          <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
            <h4 className="text-purple-300 font-bold mb-2">👥 Modos = Convidados</h4>
            <p className="text-gray-300 text-sm">Cada modo de vibração é um "convidado" que recebe uma porção igual de energia.</p>
          </div>
          <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
            <h4 className="text-purple-300 font-bold mb-2">🍽️ Equipartição = Garçom Justo</h4>
            <p className="text-gray-300 text-sm">O garçom distribui a mesma quantidade de petiscos para cada convidado, sem discriminação.</p>
          </div>
        </div>

        <div className="bg-yellow-900/40 border border-yellow-500/30 rounded-lg p-4">
          <p className="text-yellow-300 font-semibold mb-2">⚠️ O Problema Crítico:</p>
          <p className="text-yellow-200 text-sm leading-relaxed">
            Havia um número <strong>infinito</strong> de modos de vibração na cavidade, e a quantidade de modos crescia rapidamente nas altas frequências (ultravioleta). Se cada modo recebe uma energia média de <Equation displayMode={false}>{String.raw`k_B T`}</Equation>, então a energia total seria:
          </p>
          <div className="text-center mt-3 text-sm">
            <Equation displayMode={true}>{String.raw`E_{total} = \infty \times k_B T = \infty`}</Equation>
          </div>
          <p className="text-yellow-200 text-sm mt-3">
            Isso significa que qualquer objeto em temperatura finita deveria irradiar uma quantidade <strong>infinita</strong> de energia! Absurdo!
          </p>
        </div>
      </div>

      <div className="text-center pt-8">
        <button 
          onClick={() => onNavigate('ACT_3_UV')}
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-blue-500/30"
        >
          Ver a Consequência Desastrosa <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}