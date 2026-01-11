import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro = ({ onComplete }: CinematicIntroProps) => {
  const [phase, setPhase] = useState<'text' | 'narration' | 'transition' | 'complete'>('text');
  const [showText, setShowText] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);
  const [circleScale, setCircleScale] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasStarted = useRef(false);

  const narrationText = `O mercado evoluiu.
As ideias ficaram maiores.
E a inovação deixou de ser opção.

A INOVAPRO chegou para transformar visão em realidade.
Bem-vindo ao próximo nível.`;

  const playNarration = useCallback(async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/elevenlabs-tts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({ 
            text: narrationText,
            voiceId: "onwK4e9ZLuTAKqWW03F9" // Daniel - deep Brazilian Portuguese voice
          }),
        }
      );

      if (!response.ok) {
        console.error("TTS failed, skipping narration");
        // Continue without narration after delay
        setTimeout(() => {
          setPhase('transition');
        }, 3000);
        return;
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      audioRef.current = new Audio(audioUrl);
      audioRef.current.volume = 0.8;
      
      audioRef.current.onended = () => {
        setPhase('transition');
      };
      
      await audioRef.current.play();
    } catch (error) {
      console.error("Error playing narration:", error);
      // Continue without narration
      setTimeout(() => {
        setPhase('transition');
      }, 3000);
    }
  }, [narrationText]);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    // Start sequence
    const sequence = async () => {
      setIsLoading(false);
      
      // Show main text
      setTimeout(() => setShowText(true), 500);
      
      // Show subtext
      setTimeout(() => setShowSubtext(true), 2000);
      
      // Start narration phase
      setTimeout(() => {
        setPhase('narration');
        playNarration();
      }, 4000);
    };

    sequence();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [playNarration]);

  useEffect(() => {
    if (phase === 'transition') {
      // Start circle expansion animation
      const startTime = Date.now();
      const duration = 2500;
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setCircleScale(eased * 100);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setPhase('complete');
          setTimeout(onComplete, 500);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [phase, onComplete]);

  const skipIntro = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    onComplete();
  };

  return (
    <AnimatePresence>
      {phase !== 'complete' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Ambient particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: Math.random() * 0.5 + 0.5,
                }}
                animate={{
                  y: [null, Math.random() * window.innerHeight],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* Subtle ambient glow */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
          </div>

          {/* Main text content */}
          <div className="relative z-10 text-center px-8">
            <AnimatePresence>
              {showText && (
                <motion.h1
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8"
                >
                  <span className="text-gradient">INOVAPRO</span>
                </motion.h1>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showSubtext && phase !== 'transition' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="space-y-4"
                >
                  <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light">
                    2026 não é o futuro.
                  </p>
                  <p className="text-xl md:text-2xl lg:text-3xl text-foreground font-medium">
                    É o momento em que a <span className="text-gradient font-bold">INOVAPRO</span> redefine o mercado.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Narration indicator */}
            {phase === 'narration' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-12 flex items-center justify-center gap-2"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-primary rounded-full"
                      animate={{
                        height: [8, 24, 8],
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Expanding circle transition */}
          {phase === 'transition' && (
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: `${circleScale}vmax`,
                height: `${circleScale}vmax`,
                background: 'radial-gradient(circle, hsl(270 80% 60% / 0.8) 0%, hsl(220 80% 50% / 0.6) 50%, hsl(185 100% 50% / 0.4) 100%)',
                boxShadow: `0 0 ${circleScale * 2}px hsl(270 100% 60% / 0.6), inset 0 0 ${circleScale}px hsl(185 100% 50% / 0.3)`,
              }}
              initial={{ scale: 0.1, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: [0.5, 1, 0.8],
              }}
              transition={{ duration: 0.5 }}
            />
          )}

          {/* Skip button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            whileHover={{ opacity: 1 }}
            onClick={skipIntro}
            className="absolute bottom-8 right-8 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Pular intro →
          </motion.button>

          {/* Loading indicator */}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
