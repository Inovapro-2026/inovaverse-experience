import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const partners = [
  { 
    name: 'Hostinger', 
    type: 'Hospedagem', 
    url: 'https://hostinger.com.br?REFERRALCODE=inovapro',
    isPaid: true,
    color: 'from-purple-500 to-violet-600',
    icon: '🌐'
  },
  { 
    name: 'Supabase', 
    type: 'Backend', 
    url: 'https://supabase.com',
    color: 'from-emerald-500 to-green-600',
    icon: '⚡'
  },
  { 
    name: 'Meta', 
    type: 'Tecnologia', 
    url: 'https://meta.com',
    color: 'from-blue-500 to-cyan-500',
    icon: '📱'
  },
  { 
    name: 'OpenAI', 
    type: 'Inteligência Artificial', 
    url: 'https://openai.com',
    color: 'from-gray-400 to-gray-600',
    icon: '🤖'
  },
  { 
    name: 'Groq', 
    type: 'IA de Alta Performance', 
    url: 'https://groq.com',
    color: 'from-orange-500 to-red-500',
    icon: '🚀'
  },
  { 
    name: 'Vercel', 
    type: 'Deploy', 
    url: 'https://vercel.com',
    color: 'from-white to-gray-300',
    icon: '▲'
  },
  { 
    name: 'Stripe', 
    type: 'Pagamentos', 
    url: 'https://stripe.com',
    color: 'from-indigo-500 to-purple-600',
    icon: '💳'
  },
  { 
    name: 'GitHub', 
    type: 'Código', 
    url: 'https://github.com',
    color: 'from-gray-600 to-gray-800',
    icon: '🐙'
  },
];

export const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="parceiros" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, hsl(220, 80%, 50%, 0.1) 0%, transparent 60%)' }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-secondary mb-6">
            🤝 Parcerias & Tecnologias
          </span>
          <h2 className="section-title mb-6">
            <span className="text-foreground">Tecnologias que </span>
            <span className="text-gradient">Impulsionam</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Utilizamos as melhores ferramentas e parceiros estratégicos 
            para entregar soluções de alta qualidade.
          </p>
        </motion.div>

        {/* Scrolling Partners */}
        <div className="relative mb-16">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{ 
                duration: 30, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex gap-8"
            >
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <a
                  key={`${partner.name}-${index}`}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 group"
                >
                  <div className={`
                    relative px-8 py-6 rounded-2xl border border-white/10 
                    bg-white/5 backdrop-blur-sm
                    hover:border-primary/50 hover:bg-white/10
                    transition-all duration-300
                    ${partner.isPaid ? 'ring-2 ring-yellow-500/30' : ''}
                  `}>
                    {partner.isPaid && (
                      <span className="absolute -top-2 -right-2 px-2 py-0.5 text-[10px] bg-yellow-500 text-black rounded-full font-bold">
                        PARCEIRO
                      </span>
                    )}
                    <div className="flex items-center gap-4">
                      <div className={`
                        w-14 h-14 rounded-xl bg-gradient-to-br ${partner.color} 
                        flex items-center justify-center text-2xl
                        shadow-lg group-hover:shadow-xl
                        group-hover:scale-110 transition-transform duration-300
                      `}
                      style={{
                        boxShadow: `0 0 20px ${partner.color.includes('purple') ? 'rgba(168,85,247,0.3)' : 
                                               partner.color.includes('emerald') ? 'rgba(52,211,153,0.3)' :
                                               partner.color.includes('blue') ? 'rgba(59,130,246,0.3)' :
                                               partner.color.includes('orange') ? 'rgba(249,115,22,0.3)' :
                                               'rgba(255,255,255,0.2)'}`
                      }}
                      >
                        {partner.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-lg">{partner.name}</h4>
                        <p className="text-xs text-muted-foreground">{partner.type}</p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>
          
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>

        {/* Partner Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.slice(0, 4).map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`
                relative p-6 rounded-2xl border border-white/10 
                bg-gradient-to-br from-white/5 to-white/0
                backdrop-blur-sm group cursor-pointer
                hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10
                transition-all duration-300
                ${partner.isPaid ? 'ring-2 ring-yellow-500/30' : ''}
              `}
            >
              {partner.isPaid && (
                <span className="absolute -top-2 right-4 px-3 py-1 text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-full font-bold">
                  PARCEIRO OFICIAL
                </span>
              )}
              
              <div className={`
                w-16 h-16 rounded-2xl bg-gradient-to-br ${partner.color} 
                flex items-center justify-center text-3xl mb-4
                group-hover:scale-110 transition-transform duration-300
              `}
              style={{
                boxShadow: `0 0 30px ${partner.color.includes('purple') ? 'rgba(168,85,247,0.4)' : 
                                       partner.color.includes('emerald') ? 'rgba(52,211,153,0.4)' :
                                       partner.color.includes('blue') ? 'rgba(59,130,246,0.4)' :
                                       partner.color.includes('orange') ? 'rgba(249,115,22,0.4)' :
                                       'rgba(255,255,255,0.3)'}`
              }}
              >
                {partner.icon}
              </div>
              
              <h4 className="font-bold text-foreground text-xl mb-1">{partner.name}</h4>
              <p className="text-sm text-muted-foreground mb-4">{partner.type}</p>
              
              <div className="flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Conhecer</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-lg text-muted-foreground italic mt-16"
        >
          "Crescemos juntos. Acreditamos em parcerias que geram valor real."
        </motion.p>
      </div>
    </section>
  );
};
