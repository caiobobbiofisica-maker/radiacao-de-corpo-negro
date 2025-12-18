// src/components/act5/QuantumFutureSection.jsx
import { ArrowRight, Rocket } from 'lucide-react';

export function QuantumFutureSection({ onNavigate }) {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">O Futuro Quântico</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          As próximas fronteiras da tecnologia quântica
        </p>
      </div>

      {/* Seção: Introdução */}
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          Estamos apenas no início da era quântica. Enquanto a tecnologia clássica está se aproximando de seus limites fundamentais, novas tecnologias quânticas estão emergindo que promete revolucionar a computação, comunicação e sensores.
        </p>
      </div>

      {/* Seção: Computação Quântica */}
      <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Rocket className="w-6 h-6 text-purple-400" />
          Computação Quântica
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Os computadores quânticos usam qubits (bits quânticos) que podem estar em superposição de estados 0 e 1 simultaneamente. Isso permite que resolvam certos problemas exponencialmente mais rápido que computadores clássicos.
        </p>
        <div className="space-y-3 mt-4">
          <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
            <p className="text-purple-300 font-semibold mb-2">Aplicações Potenciais:</p>
            <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
              <li>Simulação de moléculas para descoberta de drogas</li>
              <li>Otimização de rotas e logística</li>
              <li>Quebra de criptografia (e criação de criptografia quântica)</li>
              <li>Inteligência artificial e aprendizado de máquina</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Seção: Comunicações Quânticas */}
      <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Comunicações Quânticas</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          A criptografia quântica usa propriedades quânticas para criar sistemas de comunicação teoricamente impossíveis de quebrar. Se alguém tentar interceptar uma mensagem quântica, o sistema detecta imediatamente.
        </p>
        <div className="space-y-3 mt-4">
          <div className="bg-black/40 border border-blue-500/20 rounded-lg p-4">
            <p className="text-blue-300 font-semibold mb-2">Vantagens:</p>
            <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
              <li>Segurança teórica garantida pela mecânica quântica</li>
              <li>Detecção automática de espionagem</li>
              <li>Ideal para comunicações governamentais e financeiras</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Seção: Sensores Quânticos */}
      <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Sensores Quânticos</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Os sensores quânticos podem medir propriedades físicas com precisão muito maior que sensores clássicos, usando efeitos como emaranhamento quântico.
        </p>
        <div className="space-y-3 mt-4">
          <div className="bg-black/40 border border-green-500/20 rounded-lg p-4">
            <p className="text-green-300 font-semibold mb-2">Aplicações:</p>
            <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
              <li>Relógios atômicos mais precisos</li>
              <li>Magnetômetros ultra-sensíveis</li>
              <li>Detecção de ondas gravitacionais</li>
              <li>Navegação sem GPS</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Seção: O Ciclo Completo */}
      <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">O Ciclo Completo</h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          Tudo começou com uma pergunta simples: como descrever a radiação emitida por um corpo negro? Max Planck respondeu essa pergunta com uma ideia revolucionária que levou à mecânica quântica, uma das maiores realizações intelectuais da humanidade.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Hoje, mais de um século depois, essa ideia continua moldando o futuro. A mecânica quântica não é apenas uma teoria abstrata; é a base de praticamente toda a tecnologia moderna e promete revolucionar ainda mais o mundo nos próximos anos.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          A jornada da radiação de corpo negro para o futuro quântico é uma das histórias mais fascinantes da ciência moderna.
        </p>
      </div>

      <div className="text-center pt-8">
        <button 
          onClick={() => onNavigate()}
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-purple-500/30"
        >
          Voltar ao Início <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}