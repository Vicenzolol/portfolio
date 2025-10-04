"use client";

import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import MagneticButton from "@/components/magnetic-button";
import Parallax from "@/components/parallax";

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const handleSmoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const lenis = window.lenis;
      if (lenis) {
        lenis.scrollTo(targetElement, {
          offset: -80,
          duration: 1.5,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: "power4.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10" />
      
      {/* Animated Orbs with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <Parallax speed={0.5} direction="up">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-40 -left-40 w-80 h-80 bg-indigo-500/20 dark:bg-indigo-500/30 rounded-full blur-3xl"
          />
        </Parallax>
        <Parallax speed={0.3} direction="down">
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-3xl"
          />
        </Parallax>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          {/* Title */}
          <div ref={titleRef}>
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-bold font-grotesk"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Vicenzo Prucoli
              </span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <div ref={subtitleRef}>
            <motion.p
              className="text-2xl md:text-4xl font-light font-jakarta text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Desenvolvedor <span className="font-semibold text-foreground">Full Stack</span>
            </motion.p>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Criando experiências digitais modernas e sofisticadas com tecnologias de ponta
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center items-center"
          >
            <MagneticButton
              className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow-lg hover:shadow-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              onClick={() => handleSmoothScroll('projects')}
            >
              Ver Projetos
            </MagneticButton>
            <MagneticButton
              className="px-8 py-4 rounded-full glass font-medium hover:bg-black/5 dark:hover:bg-white/10 transition-all border border-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              onClick={() => handleSmoothScroll('contact')}
            >
              Entre em Contato
            </MagneticButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-6 justify-center items-center pt-8"
          >
            {[
              { icon: Github, href: "https://github.com/Vicenzolol", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/vicenzo-almeida/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:vicenzo.alp@gmail.com", label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full glass hover:bg-black/5 dark:hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-foreground" aria-hidden="true" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => handleSmoothScroll('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg p-2"
        aria-label="Rolar para baixo"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-sm">Scroll</span>
          <ChevronDown className="w-6 h-6" aria-hidden="true" />
        </motion.div>
      </motion.button>
    </section>
  );
}
