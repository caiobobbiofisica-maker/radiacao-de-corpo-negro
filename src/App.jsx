// src/App.jsx

import { useState } from 'react';

// Importando todos os componentes dos Atos a partir de seus arquivos
import Act1 from './act1.jsx';
import Act2 from './act2.jsx';
import Act3 from './act3.jsx';
import Act4 from './act4.jsx';
import Act5 from './act5.jsx'; // ADICIONADO: Import do novo Ato 5

// Enumeração de todos os Atos disponíveis
const ACTS = { 
  ACT_1: 'ACT_1', 
  ACT_2: 'ACT_2', 
  ACT_3: 'ACT_3', 
  ACT_4: 'ACT_4',
  ACT_5: 'ACT_5', // ADICIONADO: ID do Ato 5
};

// A lista completa de atos, agora incluindo o Ato 5
const allActsData = [
    { id: ACTS.ACT_1, title: 'Ato 1: O Brilho Universal' },
    { id: ACTS.ACT_2, title: 'Ato 2: Os Dados Misteriosos' },
    { id: ACTS.ACT_3, title: 'Ato 3: A Catástrofe' },
    { id: ACTS.ACT_4, title: 'Ato 4: A Revolução Quântica' },
    { id: ACTS.ACT_5, title: 'Ato 5: O Legado Quântico' }, // ADICIONADO: Ato 5 na lista de navegação
];

function App() {
  // Define qual ato está ativo.
  const [currentAct, setCurrentAct] = useState(ACTS.ACT_1);

  // Função para mudar de ato, que será passada para os componentes filhos
  const handleNavigate = (actId) => {
    setCurrentAct(actId);
  };

  // Renderiza o componente do Ato correto com base no estado
  const renderCurrentAct = () => {
    switch (currentAct) {
      case ACTS.ACT_1:
        return <Act1 onNavigate={handleNavigate} actsData={allActsData} />;
      case ACTS.ACT_2:
        return <Act2 onNavigate={handleNavigate} actsData={allActsData} />;
      case ACTS.ACT_3:
        return <Act3 onNavigate={handleNavigate} actsData={allActsData} />;
      case ACTS.ACT_4:
        return <Act4 onNavigate={handleNavigate} actsData={allActsData} />;
      case ACTS.ACT_5: // ADICIONADO: Lógica para renderizar o Ato 5
        return <Act5 onNavigate={handleNavigate} actsData={allActsData} />;
      default:
        return <Act1 onNavigate={handleNavigate} actsData={allActsData} />;
    }
  };

  return (
    <div>
      {renderCurrentAct()}
    </div>
  );
}

export default App;