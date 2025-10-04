"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Skills data com categorias e tempo de experiência
const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML 5', experience: '+3 anos' },
      { name: 'CSS', experience: '+3 anos' },
      { name: 'JavaScript', experience: '+3 anos' },
      { name: 'Bootstrap', experience: '+3 anos' },
      { name: 'React/Next.js', experience: '+1 ano' },
      { name: 'TypeScript', experience: '+1 ano' },
      { name: 'Tailwind CSS', experience: '+1 ano' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'PHP', experience: '+3 anos' },
      { name: 'MySQL', experience: '+3 anos' },
      { name: 'Laravel', experience: '+2 anos' },
      { name: 'MariaDB', experience: '+2 anos' },
      { name: 'Node.js', experience: '+1 ano' },
      { name: 'PostgreSQL', experience: '+1 ano' },
    ],
  },
  {
    category: 'DevOps & Infraestrutura',
    skills: [
      { name: 'cPanel/WHM', experience: '+3 anos' },
      { name: 'Apache', experience: '+2 anos' },
      { name: 'Docker', experience: '+1 ano' },
      { name: 'Git/GitHub', experience: '+1 ano' },
      { name: 'Vercel', experience: '+1 ano' },
    ],
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Resolução de Problemas', experience: 'Avançado' },
      { name: 'Aprendizado Rápido', experience: 'Avançado' },
      { name: 'Trabalho em Equipe', experience: 'Avançado' },
      { name: 'Comunicação Efetiva', experience: 'Intermediário' },
      { name: 'Gestão de Projetos', experience: 'Intermediário' },
      { name: 'Atendimento ao Cliente', experience: 'Avançado' },
    ],
  },
]

// Animated skill item component
function AnimatedSkillItem({ name, experience, delay }: { name: string; experience: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -10 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.3, delay: delay * 0.05 }}
      className="group flex items-center justify-between rounded-xl bg-foreground/5 px-4 py-3 backdrop-blur-sm transition-all duration-200 hover:bg-foreground/10"
    >
      <span className="text-sm font-medium text-foreground/90 transition-colors group-hover:text-foreground">
        {name}
      </span>
      <span className="text-sm font-bold text-indigo-400 transition-colors group-hover:text-indigo-300">
        {experience}
      </span>
    </motion.div>
  )
}

interface Skill {
  name: string
  experience: string
}

// Skill category card - SEM 3D tilt
function SkillCard({ category, skills, index }: { category: string; skills: Skill[]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Card background with glassmorphism */}
      <div className="glass relative overflow-hidden rounded-3xl border border-foreground/10 bg-gradient-to-br from-foreground/5 to-foreground/[0.02] p-8 backdrop-blur-xl transition-all duration-200 hover:border-indigo-500/30">
        {/* Gradient orb effect - mais sutil */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-60" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-60" />

        {/* Category header */}
        <div className="relative mb-8">
          <motion.div
            className="mb-2 inline-block rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 px-4 py-1.5 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-xs font-bold uppercase tracking-wider text-transparent">
              {category}
            </span>
          </motion.div>
          <h3 className="text-2xl font-bold text-foreground">{category}</h3>
        </div>

        {/* Skills list */}
        <div className="relative space-y-3">
          {skills.map((skill, idx) => (
            <AnimatedSkillItem
              key={skill.name}
              name={skill.name}
              experience={skill.experience}
              delay={idx}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// Main Skills Section
export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden py-32"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-[100px]" />
        <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block"
          >
            <span className="inline-block rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 px-6 py-2 text-sm font-bold uppercase tracking-wider text-indigo-400 backdrop-blur-sm">
              Expertise
            </span>
          </motion.div>
          
          <h2 className="mb-4 text-5xl font-bold md:text-6xl">
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
              Minhas
            </span>{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Habilidades
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            Tecnologias e ferramentas que domino para criar experiências digitais excepcionais
          </motion.p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {skillsData.map((category, index) => (
            <SkillCard
              key={category.category}
              category={category.category}
              skills={category.skills}
              index={index}
            />
          ))}
        </div>

        {/* Soft Skills Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="glass mx-auto max-w-4xl rounded-2xl border border-foreground/10 bg-gradient-to-br from-foreground/5 to-foreground/[0.02] p-8 backdrop-blur-xl">
            <h3 className="mb-4 text-2xl font-bold text-foreground">Sobre Minhas Soft Skills</h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Além das habilidades técnicas, possuo forte capacidade de{' '}
              <span className="font-semibold text-indigo-400">resolução de problemas</span> e{' '}
              <span className="font-semibold text-purple-400">aprendizado rápido</span>, características
              desenvolvidas através da experiência em suporte técnico e desenvolvimento. Trabalho bem em equipe,
              com experiência em{' '}
              <span className="font-semibold text-pink-400">atendimento ao cliente</span> e comunicação efetiva
              com stakeholders. Sou movido pela curiosidade e pelo desejo constante de evoluir, sempre buscando
              expandir meus conhecimentos.
            </p>
          </div>
        </motion.div>

        {/* Overall expertise indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="glass mx-auto max-w-4xl rounded-2xl border border-foreground/10 bg-gradient-to-br from-foreground/5 to-foreground/[0.02] px-6 py-8 backdrop-blur-xl md:px-8">
            <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center">
              <motion.div 
                className="text-center md:text-left"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-1 text-sm font-medium text-muted-foreground">Overall Expertise</div>
                <div className="text-3xl font-bold text-foreground">Professional</div>
              </motion.div>
              <div className="hidden h-16 w-px bg-foreground/10 md:block" />
              <div className="h-px w-24 bg-foreground/10 md:hidden" />
              <motion.div 
                className="text-center md:text-left"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-1 text-sm font-medium text-muted-foreground">Years of Experience</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">5+</div>
              </motion.div>
              <div className="hidden h-16 w-px bg-foreground/10 md:block" />
              <div className="h-px w-24 bg-foreground/10 md:hidden" />
              <motion.div 
                className="text-center md:text-left"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-1 text-sm font-medium text-muted-foreground">Projects Completed</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">50+</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
