import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    text: "A Inovapro transformou nossa ideia em realidade. Profissionalismo excepcional e entrega acima do esperado.",
    author: "Carlos Silva",
    role: "CEO, TechStartup",
    rating: 5,
  },
  {
    text: "Profissionalismo, visão e entrega acima do esperado. Recomendo fortemente para qualquer projeto digital.",
    author: "Marina Santos",
    role: "Diretora de Inovação",
    rating: 5,
  },
  {
    text: "Soluções modernas que realmente funcionam. A equipe entende as necessidades do negócio e entrega resultados.",
    author: "Roberto Almeida",
    role: "Founder, FinTech",
    rating: 5,
  },
  {
    text: "Empresa que pensa no futuro e executa no presente. Parceria estratégica que trouxe resultados concretos.",
    author: "Ana Costa",
    role: "COO, E-commerce",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 opacity-50 pointer-events-none"
      >
        <div style={{ background: 'radial-gradient(ellipse at 30% 50%, hsl(185, 100%, 50%, 0.05) 0%, transparent 50%)', width: '100%', height: '100%' }} />
      </motion.div>

      {/* Floating 3D elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotateZ: [0, 5, -5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 backdrop-blur-sm hidden lg:block"
      />
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotateZ: [0, -5, 5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-10 w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 backdrop-blur-sm hidden lg:block"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-accent mb-6"
          >
            ⭐ Feedback & Impacto Real
          </motion.span>
          <h2 className="section-title mb-6">
            <span className="text-foreground">O que dizem </span>
            <span className="text-gradient">nossos parceiros</span>
          </h2>
        </motion.div>

        {/* Holographic Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
          animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ perspective: 1000 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            style={{ rotateX }}
            className="holographic p-8 md:p-12 relative"
          >
            {/* Decorative corners with animation */}
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50 rounded-tl-lg" 
            />
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/50 rounded-tr-lg" 
            />
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/50 rounded-bl-lg" 
            />
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/50 rounded-br-lg" 
            />

            {/* Quote icon with animation */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Quote className="w-12 h-12 text-primary/30 mb-6" />
            </motion.div>

            {/* Testimonial content */}
            <div className="min-h-[200px] flex flex-col justify-center">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.5 }}
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-accent text-accent" />
                    </motion.div>
                  ))}
                </div>

                {/* Text */}
                <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div>
                  <p className="font-semibold text-foreground">{testimonials[currentIndex].author}</p>
                  <p className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-primary w-8' 
                        : 'bg-white/20 hover:bg-white/40 w-2'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <motion.button
                  onClick={prevTestimonial}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={nextTestimonial}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
