import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionTitle({ title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary rounded-full" />
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg mt-6 max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
