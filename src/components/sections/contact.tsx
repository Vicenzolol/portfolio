"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "vicenzo.alp@gmail.com", href: "mailto:vicenzo.alp@gmail.com" },
  { icon: MapPin, label: "Localização", value: "Muqui, Espírito Santo", href: null },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/vicenzo-almeida", href: "https://linkedin.com/in/vicenzo-almeida/" },
  { icon: Github, label: "GitHub", value: "github.com/Vicenzolol", href: "https://github.com/Vicenzolol" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Send className="w-8 h-8 text-indigo-500" />
            <h2 className="text-5xl md:text-6xl font-bold font-grotesk text-center">
              Entre em <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Contato</span>
            </h2>
          </div>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Vamos conversar sobre seu próximo projeto? Estou sempre aberto a novas oportunidades e desafios
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  whileHover={contact.href ? { 
                    scale: 1.03,
                    y: -5,
                    transition: { duration: 0.2 }
                  } : {
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  {contact.href ? (
                    <a
                      href={contact.href}
                      target={contact.href.startsWith('http') ? "_blank" : undefined}
                      rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="glass p-6 rounded-2xl flex items-start gap-4 card-hover group cursor-pointer"
                    >
                      <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl group-hover:scale-110 transition-transform">
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                        <p className="font-medium group-hover:text-indigo-500 transition-colors">{contact.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="glass p-6 rounded-2xl flex items-start gap-4 cursor-default">
                      <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl">
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                        <p className="font-medium">{contact.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="glass p-8 md:p-12 rounded-3xl text-center mt-12"
            >
              <h3 className="text-3xl font-bold font-grotesk mb-4">
                Pronto para começar seu projeto?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Desenvolvo soluções web modernas e escaláveis, focadas em performance e experiência do usuário. 
                Vamos transformar sua ideia em realidade!
              </p>
              <motion.a
                href="mailto:vicenzo.alp@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow-lg hover:shadow-xl transition-all"
              >
                <Mail className="w-5 h-5" />
                Enviar Email
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-20 pt-8 border-t border-border text-center text-muted-foreground"
      >
        <p>&copy; {new Date().getFullYear()} Vicenzo Prucoli. Todos os direitos reservados.</p>
        <p className="mt-2 text-sm">Desenvolvido com Next.js, TypeScript e Framer Motion</p>
      </motion.footer>
    </section>
  );
}
