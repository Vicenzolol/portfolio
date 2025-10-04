import { useRef } from "react";
import { useInView, type UseInViewOptions } from "framer-motion";

/**
 * Hook customizado para animações acionadas por scroll
 * @param options - Opções de configuração do useInView
 * @returns Objeto com ref para o elemento e estado isInView
 * 
 * @example
 * const { ref, isInView } = useScrollAnimation();
 * 
 * return (
 *   <motion.div
 *     ref={ref}
 *     initial={{ opacity: 0, y: 50 }}
 *     animate={isInView ? { opacity: 1, y: 0 } : {}}
 *   >
 *     Conteúdo animado
 *   </motion.div>
 * );
 */
export function useScrollAnimation(options: UseInViewOptions = {}) {
  const ref = useRef(null);
  const defaultOptions: UseInViewOptions = {
    once: true,
    margin: "-100px",
  };
  
  const isInView = useInView(ref, {
    ...defaultOptions,
    ...options,
  });

  return { ref, isInView };
}
