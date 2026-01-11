import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Wallet, 
  TrendingUp, 
  Users, 
  Zap, 
  Globe, 
  MessageSquare,
  Sparkles,
  ArrowRight,
  Building,
  UserCheck,
  Bot,
  Headphones,
  ExternalLink
} from 'lucide-react';

const projects = [
  {
    id: 'inovabank',
    name: 'INOVABANK',
    tagline: 'Organização Financeira Inteligente',
    description: 'Plataforma digital voltada à organização financeira, controle inteligente e educação financeira, criada para ajudar pessoas e negócios a entenderem melhor seus ganhos, gastos e decisões financeiras.',
    url: 'https://inovabank.inovapro.cloud/',
    color: 'from-purple-500 to-violet-600',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    glowColor: 'shadow-purple-500/20',
    icon: Wallet,
    features: [
      { icon: Sparkles, text: 'Facilidade' },
      { icon: TrendingUp, text: 'Inteligência' },
      { icon: Users, text: 'Acessibilidade' },
      { icon: Zap, text: 'Crescimento Consciente' },
    ]
  },
  {
    id: 'inovahub',
    name: 'INOVAHUB',
    tagline: 'Ecossistema de Conexões',
    description: 'Ecossistema digital que conecta empreendedores, prestadores de serviços e clientes, promovendo oportunidades, visibilidade e negócios reais.',
    url: 'https://hub.inovapro.cloud/',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    glowColor: 'shadow-blue-500/20',
    icon: Globe,
    features: [
      { icon: Building, text: 'Conexão Talentos & Empresas' },
      { icon: TrendingUp, text: 'Geração de Renda' },
      { icon: UserCheck, text: 'Estrutura Confiável' },
      { icon: Users, text: 'Comunidade Ativa' },
    ]
  },
  {
    id: 'isa',
    name: 'ISA',
    tagline: 'Intelligent Service Assistant',
    description: 'Assistente inteligente criado para automatizar atendimentos, melhorar a comunicação com clientes e aumentar o engajamento das empresas.',
    url: 'https://isa.inovapro.cloud/',
    color: 'from-cyan-400 to-teal-500',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
    glowColor: 'shadow-cyan-500/20',
    icon: MessageSquare,
    features: [
      { icon: Headphones, text: 'Atendimento Ágil' },
      { icon: Bot, text: 'Experiência Personalizada' },
      { icon: Zap, text: 'Escalabilidade' },
      { icon: Sparkles, text: 'Inovação em Comunicação' },
    ]
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section id="projetos" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(270, 80%, 50%) 0%, transparent 70%)' }}
      />
      
      {/* Floating 3D elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-500/20 backdrop-blur-sm"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-transparent border border-cyan-500/20 backdrop-blur-sm"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-accent mb-6">
            🚀 Nossos Projetos
          </span>
          <h2 className="section-title mb-6">
            <span className="text-foreground">Soluções que </span>
            <span className="text-gradient">Transformam</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada projeto é uma missão. Desenvolvemos tecnologias que geram impacto real 
            e criam valor para pessoas e empresas.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
              whileHover={{ scale: 1.02, y: -10 }}
              className={`project-card group cursor-pointer block ${
                activeProject === project.id ? 'ring-2 ring-primary/50' : ''
              }`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${project.bgColor} ${project.borderColor} border flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}>
                <project.icon className="w-8 h-8 text-primary" />
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
              </div>

              {/* Title */}
              <div className="flex items-center gap-2 mb-2">
                <h3 className={`text-2xl font-bold font-display bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                  {project.name}
                </h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-muted-foreground text-sm mb-4">{project.tagline}</p>
              
              {/* Description */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {project.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <feature.icon className="w-4 h-4 text-primary" />
                    <span>{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className={`flex items-center gap-2 text-sm font-medium bg-gradient-to-r ${project.color} bg-clip-text text-transparent group-hover:gap-4 transition-all duration-300`}>
                <span>Acessar projeto</span>
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
