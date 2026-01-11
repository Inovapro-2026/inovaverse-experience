import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Heart, Sparkles, TrendingUp, Shield, Zap, Brain } from 'lucide-react';

const values = [
  { icon: Sparkles, text: 'Inovação constante', color: 'text-purple-400' },
  { icon: Target, text: 'Compromisso com resultados', color: 'text-blue-400' },
  { icon: Shield, text: 'Transparência', color: 'text-cyan-400' },
  { icon: TrendingUp, text: 'Evolução contínua', color: 'text-green-400' },
  { icon: Brain, text: 'Mentalidade de futuro', color: 'text-pink-400' },
];

export const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section className="relative py-32 overflow-hidden" ref={ref}>
      {/* Animated background - expanding universe effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 0.3 } : {}}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
          style={{ 
            background: 'radial-gradient(ellipse at 50% 50%, hsl(270, 80%, 50%, 0.1) 0%, hsl(220, 80%, 50%, 0.05) 30%, transparent 70%)'
          }}
        />
        {/* Expanding rings with scroll */}
        {[1, 2, 3, 4].map((ring) => (
          <motion.div
            key={ring}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 0.1 } : {}}
            transition={{ duration: 1.5, delay: ring * 0.2, ease: "easeOut" }}
            style={{ scale }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20"
          >
            <div style={{ width: `${ring * 350}px`, height: `${ring * 350}px` }} />
          </motion.div>
        ))}

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            className="absolute w-2 h-2 rounded-full bg-primary/40"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6"
          >
            🎯 Função & Propósito
          </motion.span>
          <h2 className="section-title">
            <span className="text-foreground">Nosso </span>
            <span className="text-gradient">Propósito</span>
          </h2>
        </motion.div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -10 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="project-card"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center"
              >
                <Target className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="text-2xl font-bold font-display text-gradient">Missão</h3>
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Criar soluções digitais que impulsionam pessoas e empresas, 
              transformando ideias em produtos reais que geram impacto positivo.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 10 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="project-card"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-14 h-14 rounded-2xl bg-secondary/10 border border-secondary/30 flex items-center justify-center"
              >
                <Eye className="w-7 h-7 text-secondary" />
              </motion.div>
              <h3 className="text-2xl font-bold font-display bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Visão</h3>
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Ser referência em inovação, automação e inteligência digital, 
              conectando empresas ao futuro e liderando a transformação digital.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-6 h-6 text-accent" />
              </motion.div>
              <h3 className="text-xl font-bold font-display">Nossos Valores</h3>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {values.map((value, index) => (
              <motion.div
                key={value.text}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl glass hover:glow-primary transition-all duration-300 cursor-default"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <value.icon className={`w-5 h-5 ${value.color}`} />
                </motion.div>
                <span className="text-foreground font-medium">{value.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
