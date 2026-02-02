import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  subtitle: string;
  showCta?: boolean;
  variant?: "default" | "reverse";
}

export function Hero({ title, subtitle, showCta = false, variant = "default" }: HeroProps) {
  return (
    <section 
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://i.imgur.com/MOrvgJc.jpeg"
          alt="Cabinet de kinésithérapie"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: variant === "default" 
              ? "linear-gradient(135deg, hsla(74, 79%, 40%, 0.85) 0%, hsla(258, 30%, 50%, 0.85) 100%)"
              : "linear-gradient(135deg, hsla(258, 30%, 50%, 0.85) 0%, hsla(74, 79%, 40%, 0.85) 100%)"
          }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-card/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-card/20 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6 leading-tight"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-card/90 mb-10 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>

          {showCta && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  asChild 
                  size="lg"
                  className="rounded-full gap-2 bg-card text-foreground hover:bg-card shadow-lifted text-base px-8 py-6 transition-shadow hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)]"
                >
                  <a href="tel:0670902769">
                    <Phone className="w-5 h-5" />
                    Prendre rendez-vous
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  asChild 
                  variant="outline"
                  size="lg"
                  className="rounded-full gap-2 border-2 border-foreground/80 text-foreground bg-foreground/10 hover:bg-foreground/20 backdrop-blur-md text-base px-8 py-6 font-semibold transition-shadow hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)]"
                >
                  <Link to="/consultations">
                    Découvrir les consultations
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  asChild 
                  variant="outline"
                  size="lg"
                  className="rounded-full gap-2 border-2 border-foreground/80 text-foreground bg-foreground/10 hover:bg-foreground/20 backdrop-blur-md text-base px-8 py-6 font-semibold transition-shadow hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)]"
                >
                  <Link to="/#equipe">
                    L'équipe
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
