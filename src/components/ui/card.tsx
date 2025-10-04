import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "glass" | "gradient";
  className?: string;
  animate?: boolean;
  delay?: number;
}

const variants = {
  default: "bg-card border border-border",
  glass: "glass border border-foreground/10",
  gradient: "bg-gradient-to-br from-foreground/5 to-foreground/[0.02] border border-foreground/10",
};

/**
 * Componente Card reutilizável com variantes de estilo
 * @param children - Conteúdo do card
 * @param variant - Estilo do card: default, glass ou gradient
 * @param className - Classes Tailwind adicionais
 * @param animate - Se deve animar na entrada (padrão: true)
 * @param delay - Delay da animação em segundos (padrão: 0)
 * 
 * @example
 * <Card variant="glass" className="p-8">
 *   <h3>Título</h3>
 *   <p>Conteúdo</p>
 * </Card>
 */
export function Card({
  children,
  variant = "default",
  className,
  animate = true,
  delay = 0,
}: CardProps) {
  const Component = animate ? motion.div : "div";

  const animationProps = animate
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.4, delay },
      }
    : {};

  return (
    <Component
      className={cn(
        "rounded-3xl transition-all",
        variants[variant],
        className
      )}
      {...animationProps}
    >
      {children}
    </Component>
  );
}
