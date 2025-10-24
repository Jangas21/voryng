"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type AnimatedCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  badge: string;
  href: string;          // Si quieres poder omitirla: pon href?: string
  className?: string;
};

export function AnimatedCard({
  icon,
  title,
  description,
  badge,
  href,
  className,
}: AnimatedCardProps) {
  const content = (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={`rounded-2xl border border-border/60 bg-card/80 p-5 shadow-sm hover:shadow-md ${className ?? ""}`}
    >
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 grid place-items-center rounded-xl bg-background/60 border border-border">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{title}</h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-background/60 border border-border text-muted-foreground">
              {badge}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
      </div>
    </motion.div>
  );

  // Si la tarjeta debe ser clicable
  return (
    <Link href={href} className="block">
      {content}
    </Link>
  );
}
