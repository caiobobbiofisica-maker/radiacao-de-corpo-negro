// src/components/act5/SeedOfRevolutionSection.jsx

import { ArrowRight } from 'lucide-react';
import { Equation } from '../Equation';

export function SeedOfRevolutionSection({ onNavigate }) {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">O Nascimento da Física Quântica</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Max Planck resolveu o problema, mas por anos, a comunidade científica, e até o próprio Planck, viu sua solução com desconfiança.
        </p>
      </div>

      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">O Postulado de Planck: A Nova Regra do Jogo</h3>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          A ideia de que a energia era "granulada" em vez de contínua era bizarra e ia contra séculos de física. Eles acreditavam que era apenas um artifício matemático que, por coincidência, funcionava. O legado de Planck, no entanto, foi consolidado no que hoje chamamos de Postulado de Planck:
        </p>
        <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-lg p-6 text-center">
          <p className="text-lg text-gray-200 mb-4">"Qualquer ente físico que executa oscilações harmônicas simples pode possuir apenas energias totais E que satisfaçam à relação:"</p>
          <Equation>{String.raw`E = nh\nu, \quad (onde \ n = 0, 1, 2, 3...)`}</Equation>
          <p className="text-gray-400 mt-2">onde ν é a frequência da oscilação, e h uma constante universal."</p>
        </div>
      </div>
      
      <div className="bg-black/40 border border-white/10 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Por Que Não Vemos os "Degraus" de Energia no Nosso Dia a Dia?</h3>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Se a energia é quantizada, por que ela nos parece contínua? Por que não sentimos os "degraus" quânticos ao balançar em um balanço?
          A resposta está no tamanho incrivelmente pequeno da constante de Planck (h = 6,63 x 10⁻³⁴ J.s).
        </p>
        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
          <p className="text-lg text-yellow-200 text-center leading-relaxed">
            "Comparar o tamanho do degrau quântico com a energia total do pêndulo é como comparar o tamanho de um único átomo com a altura do Monte Everest. Os degraus existem, mas são tão juntos que formam uma rampa que nos parece perfeitamente lisa."
          </p>
        </div>
      </div>

      <div className="text-center pt-8">
        <button 
          onClick={onNavigate} 
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:scale-105 transition-transform text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg shadow-yellow-500/30"
        >
          Ver a Faísca da Revolução <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}