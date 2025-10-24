"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 60, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -60, filter: "blur(6px)" }}
        transition={{
          duration: 0.45,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="min-h-screen"
        style={{ willChange: "transform, opacity, filter" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
