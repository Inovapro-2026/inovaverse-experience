import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const partners = [
  { name: 'Tech Partners', type: 'Tecnologia' },
  { name: 'Digital Agency', type: 'Criativo' },
  { name: 'Cloud Solutions', type: 'Infraestrutura' },
  { name: 'Data Experts', type: 'Analytics' },
  { name: 'AI Labs', type: 'Inteligência' },
  { name: 'Startup Hub', type: 'Ecossistema' },
];

export const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden" ref={ref}>
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
            🤝 Parcerias & Colaborações
          </span>
          <h2 className="section-title mb-6">
            <span className="text-foreground">Crescemos </span>
            <span className="text-gradient">Juntos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Acreditamos em parcerias que geram valor real. Conectamos talentos, 
            empresas e tecnologias para criar o futuro.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection lines */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 border border-primary/10 rounded-full" />
            <div className="absolute w-96 h-96 border border-secondary/10 rounded-full" />
            <div className="absolute w-[500px] h-[500px] border border-accent/5 rounded-full" />
          </div>

          {/* Center logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="w-24 h-24 rounded-2xl glass-strong flex items-center justify-center glow-primary-md">
              <span className="text-2xl font-bold font-display text-gradient">IP</span>
            </div>
          </motion.div>

          {/* Partner nodes */}
          <div className="grid grid-cols-3 gap-8 py-20">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
                  ${index === 1 || index === 4 ? 'mt-16' : ''}
                  ${index === 0 || index === 3 ? 'mb-16' : ''}
                `}
              >
                <div className="holographic p-6 text-center group hover:glow-primary transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-gradient">{partner.name.charAt(0)}</span>
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">{partner.name}</h4>
                  <p className="text-xs text-muted-foreground">{partner.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-lg text-muted-foreground italic mt-12"
        >
          "Crescemos juntos. Acreditamos em parcerias que geram valor real."
        </motion.p>
      </div>
    </section>
  );
};
