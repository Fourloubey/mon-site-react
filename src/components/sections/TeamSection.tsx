import { useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

const teamMembers = [
  { 
    id: 1, 
    name: "Cécile", 
    role: "Kinésithérapeute", 
    image: "https://i.imgur.com/ELcln01.jpg",
    bio: "Spécialisée en périnatalité, je propose une prise en charge en rééducation périnéale ainsi que l’accompagnement des troubles du nourrisson. J’ai à cœur d’aider les mamans à reprendre leurs activités et leur pratique sportive en toute confiance, et de les rassurer dans leurs premiers pas de mère. J’accorde également une attention particulière aux troubles du nourrisson, afin de soutenir sa motricité et d’accompagner les parents avec des conseils clairs et concrets."
  },
  { 
    id: 2, 
    name: "Camille", 
    role: "Kinésithérapeute", 
    image: "https://i.imgur.com/N3w6elg.jpg",
    bio: "Diplômée en thérapie manuelle (ITMP) et spécialisée dans la prise en charge du cancer du sein, je suis également professeure de Pilates. J’ai fait du mouvement le cœur de mon métier, avec une ambition : vous aider à retrouver force, confiance et liberté de bouger, dans un cadre à la fois exigeant et bienveillant."
  },
  { 
    id: 3, 
    name: "Gaétan", 
    role: "Kinésithérapeute", 
    image: "https://i.imgur.com/LSqUHxt.jpeg",
    bio: "DU pathologies rachidiennes, formation McKenzie (lombaires et cervicales) et spécialisations récentes sur les tendinopathies et l’instabilité de l’épaule : j’appuie ma pratique sur des approches actuelles et validées. Coureur de trail, j’accompagne aussi les sportifs, avec un intérêt particulier pour les douleurs aiguës en course à pied, la prévention des blessures et la gestion de la charge d’entraînement."
  },
  { 
    id: 4, 
    name: "Elias", 
    role: "Kinésithérapeute", 
    image: "https://i.imgur.com/eFO878g.jpg",
    bio: "Orienté orthopédie, rhumatologie et traumatologie, j’accompagne enfants, adolescents et adultes souffrant de troubles musculosquelettiques. J’ai complété ma formation par l’enseignement MDT (McKenzie) et la formation « Épaule au top ». Curieux et engagé dans une démarche d’amélioration continue, je poursuis actuellement une formation en kinésithérapie du sport."
  },
];

export function TeamSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionTitle 
          title="L'équipe" 
          subtitle="Des professionnels passionnés à votre service"
        />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {teamMembers.map((member, index) => (
            <FlipCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FlipCardProps {
  member: typeof teamMembers[0];
  index: number;
}

function FlipCard({ member, index }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative aspect-[3/4]"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front face - Photo */}
        <div 
          className="absolute inset-0 rounded-3xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            border: "1px solid rgba(255,255,255,0.3)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.4)",
          }}
        >
          {/* Photo background */}
          <img 
            src={member.image} 
            alt={member.name}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />

          {/* Glass overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
            }}
          />

          {/* Animated gradient overlay */}
          <div 
            className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-500"
            style={{
              background: "linear-gradient(135deg, hsla(74, 79%, 68%, 0.3) 0%, hsla(258, 30%, 76%, 0.3) 50%, hsla(74, 79%, 68%, 0.2) 100%)",
            }}
          />
          
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)",
            }}
          />

          {/* Bottom info bar */}
          <div 
            className="absolute bottom-0 left-0 right-0 p-4"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
            }}
          >
            <h3 className="font-display text-lg font-semibold text-white text-center">
              {member.name}
            </h3>
            <p className="text-white/80 text-sm text-center">
              {member.role}
            </p>
          </div>

          {/* Floating bubbles effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                x: [0, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: index * 0.3,
              }}
              className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
              }}
            />
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                x: [0, -8, 0],
                scale: [1, 0.9, 1],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: index * 0.5,
              }}
              className="absolute bottom-1/3 right-1/4 w-12 h-12 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
              }}
            />
          </div>

          {/* Hint to flip */}
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
            Survolez ↻
          {/* 👆 Appuie mobile */}
            <div className="md:hidden absolute bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500/90 to-blue-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg border border-white/20 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-300 z-20 pointer-events-none select-none whitespace-nowrap">
        👆 Appuie
            </div>
          </div>
        </div>

        {/* Back face - Bio */}
        <div 
          className="absolute inset-0 rounded-3xl overflow-hidden flex flex-col justify-center p-6"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)",
            border: "1px solid rgba(255,255,255,0.3)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.4)",
          }}
        >
          {/* Glass effect on back */}
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)",
            }}
          />

          <div className="relative z-10">
            <h3 className="font-display text-xl font-bold text-primary-foreground text-center mb-2">
              {member.name}
            </h3>
            <p className="text-primary-foreground/80 text-sm text-center mb-4 font-medium">
              {member.role}
            </p>
            <p className="text-primary-foreground/90 text-sm leading-relaxed text-center">
              {member.bio}
            </p>
          </div>

          {/* Decorative bubbles on back */}
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
            }}
            className="absolute top-8 right-8 w-12 h-12 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
            }}
          />
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute bottom-8 left-8 w-8 h-8 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
