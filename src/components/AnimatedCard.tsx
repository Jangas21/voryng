// components/AnimatedCard.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export function AnimatedCard({ icon, title, description, badge, href }) {
  const content = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="rounded-2xl border border-border/60 bg-card/70 p-6 cursor-pointer hover:border-accent/70"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-accent">{icon}</div>
        {badge && (
          <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/30">
            {badge}
          </span>
        )}
      </div>
      <h3 className="text-lg font-medium mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
