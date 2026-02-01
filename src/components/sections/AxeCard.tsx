import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AxeCardProps {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export function AxeCard({ number, title, description, icon: Icon, delay = 0 }: AxeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-lifted transition-all duration-300 border border-border/50 overflow-hidden"
    >
      {/* Background gradient on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "var(--gradient-card)" }}
      />

      <div className="relative z-10">
        {/* Number badge */}
        <div className="flex items-center gap-4 mb-6">
          <motion.div 
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300"
          >
            {number}
          </motion.div>
          <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
        </div>

        <h3 className="font-display text-xl font-semibold text-foreground mb-4 group-hover:text-foreground/90 transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground leading-relaxed text-sm">
          {description}
        </p>
      </div>

      {/* Shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </motion.div>
  );
}
