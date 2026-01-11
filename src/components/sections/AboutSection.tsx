import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Rocket, Target, Zap } from 'lucide-react';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Lightbulb, title: 'Inovação', description: 'Soluções criativas e modernas' },
    { icon: Target, title: 'Foco', description: 'Resultados mensuráveis' },
    { icon: Rocket, title: 'Velocidade', description: 'Entrega ágil e eficiente' },
    { icon: Zap, title: 'Impacto', description: 'Transformação real' },
  ];

  return (
    <section className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div 
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(220, 80%, 50%) 0%, transparent 70%)' }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6">
              🏢 Sobre a Empresa
            </span>
            <h2 className="section-title mb-6">
              <span className="text-foreground">Quem é a </span>
              <span className="text-gradient">Inovapro?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A <span className="text-foreground font-semibold">INOVAPRO TECHNOLOGY</span> é uma empresa brasileira 
              focada em <span className="text-primary">inovação digital</span>, <span className="text-secondary">automação</span> e 
              <span className="text-accent"> soluções inteligentes</span> para negócios modernos.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nosso propósito é transformar ideias em produtos reais, criando soluções que facilitam 
              processos, aumentam resultados e conectam empresas ao futuro digital. Atuamos com visão 
              estratégica, mentalidade de crescimento e foco em impacto real.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-primary/10 animate-spin" style={{ animationDuration: '30s' }} />
              <div className="absolute inset-8 rounded-full border border-secondary/10 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
              <div className="absolute inset-16 rounded-full border border-accent/10 animate-spin" style={{ animationDuration: '20s' }} />
              
              {/* Center element */}
              <div className="absolute inset-24 rounded-full glass-strong flex items-center justify-center glow-primary-md">
                <div className="text-center">
                  <span className="text-5xl font-bold font-display text-gradient">IP</span>
                  <p className="text-xs text-muted-foreground mt-2">Est. 2024</p>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 right-0 px-4 py-2 rounded-xl glass text-sm font-medium"
              >
                🚀 Inovação
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-10 left-0 px-4 py-2 rounded-xl glass text-sm font-medium"
              >
                💡 Criatividade
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute top-1/2 -left-4 px-4 py-2 rounded-xl glass text-sm font-medium"
              >
                ⚡ Tecnologia
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
