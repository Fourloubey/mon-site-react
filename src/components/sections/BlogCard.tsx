import { motion } from "framer-motion";

interface BlogCardProps {
  tag: string;
  title: string;
  description: string;
  content: string;
  delay?: number;
}

export function BlogCard({ tag, title, description, content, delay = 0 }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group bg-card rounded-2xl overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 shadow-soft hover:shadow-lifted"
    >
      <div className="p-6">
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-4">
          {tag}
        </span>
        
        <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="text-xs text-muted-foreground/70">
          <strong>Au programme :</strong> {content}
        </div>
      </div>
    </motion.article>
  );
}
