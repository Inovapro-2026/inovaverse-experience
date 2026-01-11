import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import techVideo from '@/assets/tech-automation-video.mp4';

export const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={techVideo} type="video/mp4" />
        </video>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
      </motion.div>

      {/* Content overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center px-6"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary border border-primary/20 mb-6"
          >
            Tecnologia do Futuro
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6"
          >
            <span className="text-foreground">Automação &</span>
            <br />
            <span className="text-gradient">Inteligência Artificial</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Utilizamos as mais avançadas tecnologias para criar soluções 
            que transformam a maneira como você faz negócios.
          </motion.p>
        </motion.div>
      </div>

      {/* Animated border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
    </section>
  );
};
