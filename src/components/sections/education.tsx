"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Code, Database, Wrench, Server, Calculator, Briefcase } from "lucide-react";

const certifications = [
  { name: "Agronegócio", institution: "EEEFM Senador Dirceu Cardoso", year: "2016" },
  { name: "Cybersecurity Essentials", institution: "Cisco Network Academy", year: "2020" },
  { name: "Introduction to Packet Tracer", institution: "Cisco Network Academy", year: "2020" },
  { name: "Network Security 1.0", institution: "Cisco Network Academy", year: "2021" },
];

const disciplines = [
  {
    category: "Programação e Desenvolvimento",
    icon: Code,
    items: [
      "Programação I e II",
      "Programação Orientada a Objetos I e II",
      "Técnicas de Programação Avançada",
      "Desenvolvimento Web",
      "Tópicos Especiais em Programação",
    ],
  },
  {
    category: "Banco de Dados e Sistemas",
    icon: Database,
    items: [
      "Fundamentos de Sistemas de Informação",
      "Banco de Dados I e II",
      "Gestão de Sistemas de Informação",
      "Estrutura de Dados",
      "Sistemas de Apoio à Decisão",
    ],
  },
  {
    category: "Engenharia de Software",
    icon: Wrench,
    items: [
      "Engenharia de Software",
      "Projeto de Sistemas",
      "Gestão de Projetos de Software",
      "Laboratório de Engenharia de Software",
      "Análise de Sistemas",
    ],
  },
  {
    category: "Infraestrutura e Redes",
    icon: Server,
    items: [
      "Organização e Arquitetura de Computadores",
      "Sistemas Operacionais",
      "Redes de Computadores",
      "Sistemas Distribuídos",
      "Serviço de Redes para Internet",
    ],
  },
  {
    category: "Matemática e Estatística",
    icon: Calculator,
    items: [
      "Cálculo I e II",
      "Matemática Discreta",
      "Probabilidade e Estatística",
      "Teoria Geral de Sistemas",
      "Metaheurísticas",
    ],
  },
  {
    category: "Empreendedorismo e Gestão",
    icon: Briefcase,
    items: [
      "Teoria Geral da Administração",
      "Administração Financeira",
      "Empreendedorismo",
      "Administração da Produção e Logística",
      "Comércio Eletrônico",
    ],
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-16">
            <GraduationCap className="w-8 h-8 text-indigo-500" />
            <h2 className="text-5xl md:text-6xl font-bold font-grotesk text-center">
              Formação <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Acadêmica</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Main Education */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass p-6 md:p-8 rounded-3xl cursor-default"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="p-3 sm:p-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl shrink-0">
                  <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="flex-1 space-y-3 w-full">
                  <motion.h3 
                    className="text-xl sm:text-2xl font-bold font-grotesk leading-tight"
                    whileHover={{
                      color: "#6366f1",
                      transition: { duration: 0.2 }
                    }}
                  >
                    Bacharelado em Sistemas de Informação
                  </motion.h3>
                  <p className="text-base sm:text-lg text-indigo-500">Instituto Federal do Espírito Santo</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm sm:text-base text-muted-foreground">
                    <span>Campus Cachoeiro de Itapemirim</span>
                    <span className="hidden sm:inline">•</span>
                    <span>2017 - 2024</span>
                  </div>
                  <div className="pt-4 space-y-2">
                    <p className="text-foreground font-semibold text-sm sm:text-base">Projeto de Conclusão de Curso (TCC):</p>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      &ldquo;Aplicação de Técnica de Visão Computacional na Identificação de Moldes de Roupas em Fotografia&rdquo; 
                      - Sistema inovador baseado em técnicas de visão computacional para identificar e vetorizar moldes 
                      de roupas a partir de fotografias, utilizando pré-processamento de imagens, detecção de bordas e 
                      algoritmo Douglas-Peucker para gerar arquivos SVG editáveis.
                    </p>
                    <motion.a
                      href="https://repositorio.ifes.edu.br/handle/123456789/5446"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg text-sm sm:text-base font-medium hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
                    >
                      <span>Ver TCC Completo</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                  </div>
                  
                  <div className="pt-6 space-y-3 border-t border-foreground/10 mt-6">
                    <p className="text-foreground font-semibold text-sm sm:text-base">Tecnologias Utilizadas no TCC:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-xs sm:text-sm font-medium">Python</span>
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs sm:text-sm font-medium">OpenCV</span>
                      <span className="px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full text-xs sm:text-sm font-medium">NumPy</span>
                      <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-xs sm:text-sm font-medium">Shapely</span>
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs sm:text-sm font-medium">Visão Computacional</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500" />
                <h3 className="text-xl sm:text-2xl font-bold font-grotesk">Certificações</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="glass p-5 sm:p-6 rounded-2xl hover:bg-foreground/5 transition-colors cursor-default"
                  >
                    <h4 className="font-bold text-base sm:text-lg mb-2">{cert.name}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{cert.institution}</p>
                    <p className="text-xs sm:text-sm text-indigo-500 mt-2">{cert.year}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Disciplines */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500" />
                <h3 className="text-xl sm:text-2xl font-bold font-grotesk">
                  Disciplinas e Tecnologias Estudadas
                </h3>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-2xl">
                Conhecimentos técnicos e práticos adquiridos durante a graduação em Sistemas de Informação
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {disciplines.map((discipline, index) => {
                  const Icon = discipline.icon;
                  return (
                    <motion.div
                      key={discipline.category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      whileHover={{ 
                        scale: 1.05,
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                      className="glass p-5 sm:p-6 rounded-2xl hover:bg-foreground/5 transition-all cursor-default group"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div 
                          className="p-2 sm:p-2.5 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
                        </motion.div>
                        <h4 className="font-bold text-sm sm:text-base group-hover:text-indigo-400 transition-colors leading-tight">
                          {discipline.category}
                        </h4>
                      </div>
                      <ul className="space-y-2 sm:space-y-2.5">
                        {discipline.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            <span className="text-indigo-500 mt-0.5 font-semibold shrink-0">✓</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
