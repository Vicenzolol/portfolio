"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-grotesk mb-8 text-center">
            Sobre <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Mim</span>
          </h2>
          
          <div className="glass p-8 md:p-12 rounded-3xl space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Olá! Sou <motion.span 
                className="text-foreground font-semibold cursor-default inline-block"
                whileHover={{ 
                  scale: 1.05,
                  color: "#6366f1",
                  transition: { duration: 0.2 }
                }}
              >Vicenzo</motion.span>, um desenvolvedor web apaixonado por tecnologia 
              e sempre em busca de novas formas de criar soluções digitais inovadoras.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Com experiência em desenvolvimento <span className="text-foreground font-semibold">full stack</span>, trabalho com 
              Laravel/PHP, JavaScript, React, Next.js e outras tecnologias modernas para construir aplicações eficientes e intuitivas.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Sou movido pela <span className="text-foreground font-semibold">curiosidade</span> e pelo desejo constante de evoluir. 
              Adoro explorar novas tecnologias, enfrentar desafios e expandir meus conhecimentos para me tornar um profissional 
              cada vez mais completo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-6 border-t border-border"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { value: "7+", label: "Anos de Estudo" },
                  { value: "15+", label: "Projetos" },
                  { value: "10+", label: "Tecnologias" },
                  { value: "100%", label: "Dedicação" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="space-y-2 cursor-default"
                  >
                    <motion.div 
                      className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"
                      whileHover={{
                        backgroundImage: "linear-gradient(to right, #8b5cf6, #ec4899)",
                        transition: { duration: 0.3 }
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
