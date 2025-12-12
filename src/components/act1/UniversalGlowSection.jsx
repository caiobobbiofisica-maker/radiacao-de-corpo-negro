// src/components/act1/UniversalGlowSection.jsx
import { Flame, ArrowRight, Lightbulb } from 'lucide-react';

const getBlackBodyColor = (temp) => {
  if (temp < 800) return '#000000';
  if (temp < 1200) return '#ff4500';
  if (temp < 1800) return '#ff6600';
  if (temp < 2500) return '#ff8800';
  if (temp < 3500) return '#ffaa00';
  if (temp < 5000) return '#ffdd00';
  return '#ffffff';
};

export function UniversalGlowSection({ temperature, setTemperature, onNavigate }) {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">O Brilho Universal</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">Você já se perguntou por que o metal quente brilha? Vamos descobrir juntos o mistério por trás do brilho dos objetos aquecidos.</p>
      </div>

      {/* Seção: A Radiação Térmica */}
      <div className="bg-gradient-to-r from-orange-900/40 to-red-900/40 border border-orange-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">A Radiação Térmica</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Quando aquecemos qualquer objeto, ele emite luz - isso é chamado de <strong className="text-orange-400">radiação térmica</strong>. A cor e a intensidade dessa luz dependem diretamente da temperatura do objeto. Este fenômeno está presente em toda parte: desde a brasa do carvão até as estrelas distantes no universo.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Mas existe um tipo especial de objeto que emite radiação de forma perfeita: o <strong className="text-yellow-400">corpo negro</strong>. Apesar do nome, quando aquecido, ele brilha intensamente e de forma previsível.
        </p>
      </div>

      {/* Seção: A Busca por um Emissor Perfeito */}
      <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">A Busca por um Emissor Perfeito</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Um pedaço de carvão emite radiação de um jeito, e um pedaço de tungstênio, de outro. Além de emitirem, eles também refletem a luz do ambiente. Para decifrar o código fundamental da radiação térmica, era preciso encontrar um objeto "puro", um <strong className="text-blue-300">emissor ideal</strong>.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Foi assim que nasceu o conceito de corpo negro. Apesar do nome, não se trata de algo necessariamente preto.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-black/40 border border-white/10 rounded-lg p-6 space-y-4">
          <h3 className="text-white font-bold flex items-center space-x-2"><Flame className="w-6 h-6 text-orange-500" /><span>Perguntas Fascinantes</span></h3>
          <ul className="text-gray-300 space-y-3 list-disc list-inside">
            <li>Por que o ferro em brasa brilha vermelho?</li>
            <li>Por que as estrelas têm cores diferentes?</li>
            <li>Como sabemos a temperatura do Sol?</li>
            <li>O que faz um objeto "brilhar" quando aquecido?</li>
          </ul>
        </div>
        <div className="bg-black/40 border border-white/10 rounded-lg p-6 space-y-4">
          <h3 className="text-white font-bold">Simulador de Temperatura</h3>
          <p className="text-gray-400 text-sm">Veja como a cor muda com a temperatura</p>
          <div>
            <label htmlFor="temperature-slider" className="flex items-center justify-between text-white font-medium">
              <span>Temperatura:</span>
              <span className="text-orange-400 font-bold text-lg">{temperature}K</span>
            </label>
            <input 
              id="temperature-slider" 
              type="range" 
              min="300" 
              max="7000" 
              value={temperature} 
              onChange={(e) => setTemperature(parseInt(e.target.value))} 
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer mt-2"
            />
          </div>
          <div className="flex flex-col items-center justify-center pt-4">
            <div 
              className="w-24 h-24 rounded-full border-4 border-white/10 transition-all duration-300" 
              style={{ 
                backgroundColor: getBlackBodyColor(temperature), 
                boxShadow: `0 0 35px ${getBlackBodyColor(temperature)}` 
              }}
            ></div>
            <p className="text-center text-gray-400 text-sm mt-2">
              {temperature < 1000 ? 'Vermelho escuro' : temperature < 2000 ? 'Vermelho brilhante' : temperature < 3000 ? 'Laranja' : temperature < 5000 ? 'Amarelo-Branco' : 'Branco-Azulado'}
            </p>
          </div>
        </div>
      </div>

      {/* Seção: O Ponto-Chave */}
      <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-yellow-400" />
          O Ponto-Chave
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          Um <strong className="text-yellow-300">absolvedor perfeito</strong> é também o <strong className="text-yellow-300">emissor mais perfeito</strong> possível. Ele não "polui" sua própria luz com reflexos, emitindo um espectro térmico puro e universal.
        </p>
      </div>

      <div className="text-center">
        <button 
          onClick={onNavigate} 
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-orange-500/30"
        >
          Descobrir o Corpo Negro <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}