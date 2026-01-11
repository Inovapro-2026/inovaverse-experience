import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Users, MessageCircle, ArrowRight } from 'lucide-react';

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background with 3D-like depth */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{ 
            background: 'linear-gradient(180deg, transparent 0%, hsl(240, 20%, 5%) 30%, hsl(270, 30%, 8%) 70%, hsl(240, 20%, 3%) 100%)'
          }}
        />
        {/* Glowing orbs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.5 } : {}}
          transition={{ duration: 1 }}
          className="absolute left-1/4 top-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(270, 80%, 50%, 0.3) 0%, transparent 70%)' }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.4 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute right-1/4 bottom-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(220, 80%, 50%, 0.3) 0%, transparent 70%)' }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight">
            <span className="text-foreground">Conheça o </span>
            <span className="text-gradient">futuro.</span>
            <br />
            <span className="text-foreground">Construa com a </span>
            <span className="text-gradient-purple">Inovapro.</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Pronto para transformar suas ideias em realidade? 
            Vamos construir o futuro digital juntos.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button className="btn-hero group flex items-center justify-center gap-3">
              <Rocket className="w-5 h-5" />
              <span>Conhecer Projetos</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-outline-glow flex items-center justify-center gap-3">
              <Users className="w-5 h-5" />
              <span>Ser Parceiro</span>
            </button>
            <button className="btn-outline-glow flex items-center justify-center gap-3">
              <MessageCircle className="w-5 h-5" />
              <span>Falar com a Inovapro</span>
            </button>
          </motion.div>

          {/* Stats or trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {[
              { value: '3+', label: 'Projetos Ativos' },
              { value: '100%', label: 'Foco em Inovação' },
              { value: '∞', label: 'Potencial' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold font-display text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
