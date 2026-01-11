import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { Suspense, lazy } from 'react';

// Lazy load 3D scene for better performance
const HeroScene = lazy(() => import('../3d/HeroScene').then(m => ({ default: m.HeroScene })));

const HeroFallback = () => (
  <div className="absolute inset-0 z-0">
    <div 
      className="absolute inset-0 animate-pulse"
      style={{ 
        background: 'radial-gradient(ellipse at 50% 30%, hsl(270, 80%, 30%, 0.4) 0%, hsl(220, 80%, 20%, 0.2) 40%, transparent 70%)'
      }}
    />
    <div className="absolute inset-0 bg-grid opacity-20" />
  </div>
);

export const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background with Fallback */}
      <Suspense fallback={<HeroFallback />}>
        <HeroScene />
      </Suspense>
      
      {/* Static background gradient for immediate visual */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ 
          background: 'radial-gradient(ellipse at 50% 0%, hsl(270, 80%, 50%, 0.2) 0%, hsl(220, 80%, 40%, 0.1) 40%, transparent 70%)'
        }}
      />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background z-10 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm font-medium text-primary border border-primary/20">
            <Sparkles className="w-4 h-4" />
            Inovação Digital • Automação • Inteligência
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6"
        >
          <span className="text-foreground">INOVA</span>
          <span className="text-gradient">PRO</span>
          <br />
          <span className="text-gradient-purple">TECHNOLOGY</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Transformamos ideias em produtos reais. Criamos soluções digitais que 
          facilitam processos, aumentam resultados e conectam empresas ao futuro.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button 
            onClick={scrollToProjects}
            className="btn-hero"
          >
            Explorar Projetos
          </button>
          <button className="btn-outline-glow">
            Falar com a Inovapro
          </button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer"
          onClick={scrollToProjects}
        >
          <span className="text-sm">Descubra mais</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};
