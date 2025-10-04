"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Casandinhos",
    description: "Sistema completo de lista de casamento online com autenticação JWT, gerenciamento de presentes e interface responsiva.",
    image: "/assets/projects/casandinhos.jpg",
    tags: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL"],
    github: "https://github.com/Vicenzolol/casandinhos",
    live: "https://casandinhos.vercel.app",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Dominus",
    description: "Jogo de estratégia medieval com geração procedural de terrenos, sistema climático dinâmico e mecânicas de combate baseadas em dados.",
    image: "/assets/projects/dominus.jpg",
    tags: ["Next.js", "TypeScript", "Canvas API", "CSS Modules"],
    github: "https://github.com/Vicenzolol/dominus",
    live: "https://dominus-mocha.vercel.app",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    title: "Portfolio Moderno",
    description: "Site de portfólio profissional com animações avançadas, efeitos 3D e design minimalista sofisticado.",
    image: "/assets/projects/portfolio.jpg",
    tags: ["Next.js", "Framer Motion", "Three.js", "Tailwind CSS"],
    github: "/",
    live: "/",
    gradient: "from-blue-500 to-cyan-500",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-indigo-500" />
            <h2 className="text-5xl md:text-6xl font-bold font-grotesk text-center">
              Meus <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Projetos</span>
            </h2>
          </div>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Seleção de projetos que demonstram minhas habilidades e paixão por criar experiências digitais únicas
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass rounded-3xl overflow-hidden group h-full"
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-foreground/20">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-4 bg-foreground/10 backdrop-blur-sm rounded-full hover:bg-foreground/20 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-4 bg-foreground/10 backdrop-blur-sm rounded-full hover:bg-foreground/20 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold font-grotesk">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full bg-foreground/5 border border-foreground/10 hover:border-indigo-500/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/Vicenzolol"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass hover:bg-foreground/10 transition-all font-medium"
            >
              <Github className="w-5 h-5" />
              Ver todos os projetos no GitHub
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
