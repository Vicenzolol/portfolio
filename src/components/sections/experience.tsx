"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Suporte Técnico e Desenvolvedor",
    company: "Arco Informática",
    period: "2024 - 2025",
    location: "Cachoeiro de Itapemirim, ES",
    description: "Desenvolvimento de projetos web, manutenção de sistemas legados, suporte técnico e atendimento ao cliente.",
    achievements: [
      "Atendimento e suporte técnico a clientes",
      "Desenvolvimento de soluções web personalizadas",
      "Manutenção de sistemas e infraestrutura",
      "Gestão de servidores cPanel e WHM",
      "Instalação de emails e ajustes nos sistemas de mails Magic Spam",
    ],
  },
  {
    title: "Desenvolvedor Full Stack",
    company: "Arco Informática",
    period: "2025 - 2026",
    location: "Cachoeiro de Itapemirim, ES",
    description: "Desenvolvimento de projetos e sites web utilizando Laravel, PHP, JavaScript e Bootstrap. Manutenção e melhorias em sistemas legados.",
    achievements: [
      "Desenvolvimento de múltiplos projetos web do zero",
      "Implementação de novas features em sistemas existentes",
      "Otimização de performance e código legado",
      "Manutenção e ajustes em sites desenvolvidos com Laravel e WordPress",
      "Trabalho com bancos de dados MySQL",
      "Desenvolvimento de APIs REST e documentação Swagger",
      "Correções e ajustes em integrações de sistemas de pagamento com PagBank",
      "Realização de diversas migrações de banco de dados, incluindo migrações de WordPress para MySQL",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="w-8 h-8 text-indigo-500" />
            <h2 className="text-5xl md:text-6xl font-bold font-grotesk text-center">
              Experiência <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Profissional</span>
            </h2>
          </div>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Minha jornada profissional no desenvolvimento de software
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                whileHover={{
                  scale: 1.02,
                  x: 5,
                  transition: { duration: 0.3 }
                }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glass p-8 rounded-3xl card-hover relative cursor-default"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-4 top-8 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 border-4 border-background" />

                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <motion.h3
                        className="text-2xl font-bold font-grotesk"
                        whileHover={{
                          color: "#6366f1",
                          transition: { duration: 0.2 }
                        }}
                      >
                        {exp.title}
                      </motion.h3>
                      <p className="text-lg text-indigo-500">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground">{exp.location}</p>
                  <p className="text-foreground leading-relaxed">{exp.description}</p>

                  <div className="pt-4 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 + i * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mt-2" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
