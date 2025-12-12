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
          Os computadores quânticos usam qubits (bits quânticos) em vez de bits clássicos. Um qubit pode estar em uma superposição de 0 e 1 simultaneamente, permitindo que computadores quânticos processem informações de forma fundamentalmente diferente.
        </p>
        <div className="space-y-4 mt-4">
          <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
            <p className="text-purple-300 font-semibold mb-2">Potencial</p>
            <p className="text-gray-300">
              Computadores quânticos poderiam resolver certos problemas exponencialmente mais rápido que computadores clássicos. Isso teria implicações profundas para criptografia, simulação molecular, otimização e muitos outros campos.
            </p>
          </div>
          <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
            <p className="text-purple-300 font-semibold mb-2">Desafios</p>
            <p className="text-gray-300">
              Qubits são extremamente frágeis e precisam ser mantidos em temperaturas próximas do zero absoluto. Corrigir erros quânticos é um desafio fundamental. Mas o progresso está sendo feito rapidamente.
            </p>
          </div>
        </div>
      </div>

      {/* Seção: Comunicação Quântica */}
      <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Comunicação Quântica</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          A criptografia quântica usa propriedades quânticas para criar canais de comunicação teoricamente inquebrável. A distribuição de chaves quânticas (QKD) permite que duas partes compartilhem uma chave secreta com segurança garantida pela física quântica.
        </p>
        <div className="space-y-4 mt-4">
          <div className="bg-black/40 border border-blue-500/20 rounded-lg p-4">
            <p className="text-blue-300 font-semibold mb-2">Segurança Absoluta</p>
            <p className="text-gray-300">
              Qualquer tentativa de interceptar a comunicação quântica é detectada imediatamente. Isso oferece um nível de segurança que é impossível com criptografia clássica.
            </p>
          </div>
          <div className="bg-black/40 border border-blue-500/20 rounded-lg p-4">
            <p className="text-blue-300 font-semibold mb-2">Redes Quânticas</p>
            <p className="text-gray-300">
              Pesquisadores estão desenvolvendo redes quânticas que conectariam computadores quânticos, criando um "internet quântico" global.
            </p>
          </div>
        </div>
      </div>

      {/* Seção: Sensores Quânticos */}
      <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Sensores Quânticos</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Sensores quânticos exploram propriedades quânticas para medir quantidades físicas com precisão sem precedentes. Eles poderiam revolucionar navegação, detecção e medição.
        </p>
        <div className="space-y-4 mt-4">
          <div className="bg-black/40 border border-green-500/20 rounded-lg p-4">
            <p className="text-green-300 font-semibold mb-2">Relógios Atômicos Aprimorados</p>
            <p className="text-gray-300">
              Relógios quânticos poderiam ser bilhões de vezes mais precisos que relógios atômicos atuais, revolucionando GPS, telecomunicações e pesquisa fundamental.
            </p>
          </div>
          <div className="bg-black/40 border border-green-500/20 rounded-lg p-4">
            <p className="text-green-300 font-semibold mb-2">Detecção de Ondas Gravitacionais</p>
            <p className="text-gray-300">
              Detectores de ondas gravitacionais como LIGO usam técnicas quânticas para alcançar a sensibilidade necessária para detectar distorções no espaço-tempo causadas por eventos cósmicos.
            </p>
          </div>
        </div>
      </div>

      {/* Seção: O Futuro */}
      <div className="bg-gradient-to-r from-red-900/40 to-pink-900/40 border border-red-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Um Futuro Quântico</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Estamos no início de uma segunda revolução quântica. A primeira revolução (1900-1930) descobriu os princípios fundamentais. A segunda revolução (agora) está aplicando esses princípios para criar novas tecnologias.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Nos próximos 50 anos, a tecnologia quântica provavelmente terá um impacto tão profundo quanto a eletrônica teve no século XX. Computadores quânticos, comunicação quântica segura, e sensores quânticos aprimorados transformarão praticamente todos os aspectos da sociedade.
        </p>
      </div>

      {/* Seção: Conclusão */}
      <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border border-yellow-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Da Radiação de Corpo Negro ao Futuro</h3>
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
          onClick={onNavigate} 
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-purple-500/30"
        >
          Voltar ao Início <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}