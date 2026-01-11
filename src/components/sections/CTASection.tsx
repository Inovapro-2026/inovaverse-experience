import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Users, MessageCircle, ArrowRight, Instagram } from 'lucide-react';

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToProjects = () => {
    document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPartners = () => {
    document.getElementById('parceiros')?.scrollIntoView({ behavior: 'smooth' });
  };

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
        
        {/* Floating 3D elements */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotateZ: [0, 10, -10, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 backdrop-blur-sm"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotateZ: [0, -5, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-32 left-16 w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-transparent border border-secondary/20 backdrop-blur-sm"
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
            <button 
              onClick={scrollToProjects}
              className="btn-hero group flex items-center justify-center gap-3"
            >
              <Rocket className="w-5 h-5" />
              <span>Conhecer Projetos</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={scrollToPartners}
              className="btn-outline-glow flex items-center justify-center gap-3"
            >
              <Users className="w-5 h-5" />
              <span>Ser Parceiro</span>
            </button>
            <a 
              href="https://www.instagram.com/inovapro.technology/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-glow flex items-center justify-center gap-3"
            >
              <Instagram className="w-5 h-5" />
              <span>Falar com a Inovapro</span>
            </a>
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
              <motion.div 
                key={stat.label} 
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold font-display text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
