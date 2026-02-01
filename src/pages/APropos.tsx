import { motion } from "framer-motion";
import { GraduationCap, Heart, Target, Users } from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SectionTitle } from "@/components/sections/SectionTitle";

const sections = [
  {
    icon: Users,
    title: "Histoire du cabinet",
    paragraphs: [
      "Le cabinet de kinésithérapie des Terres Neuves a été fondé avec l'ambition de proposer une prise en charge de qualité, alliant expertise technique et approche humaine. Situé à Bordeaux Bègles, nous accueillons une patientèle variée : sportifs, personnes en reprise d'activité, mamans et nourrissons.",
      "Notre équipe de quatre kinésithérapeutes partage une vision commune : rendre chaque patient acteur de sa rééducation grâce à l'éducation thérapeutique et des exercices personnalisés.",
    ],
  },
  {
    icon: Heart,
    title: "Sport et influences",
    paragraphs: [
      "Notre pratique assidue de la course à pied et du trail influence directement notre approche professionnelle. Coureurs réguliers, nous avons étudié en profondeur les douleurs aiguës en course à pied, la prévention des blessures, la récupération et l'évaluation de la charge d'entraînement.",
      "Cette expérience terrain nourrit notre compréhension des contraintes spécifiques du coureur et nous permet d'adapter nos prises en charge aux réalités de l'entraînement.",
    ],
  },
  {
    icon: GraduationCap,
    title: "Formations et spécialisations",
    paragraphs: [
      "L'équipe cumule des formations complémentaires : DU pathologies rachidiennes, méthode McKenzie, thérapie manuelle ITMP, prise en charge du cancer du sein, périnatalité et troubles du nourrisson, tendinopathies et instabilités de l'épaule.",
      "Ces spécialisations nous permettent de proposer une prise en charge adaptée à chaque situation, du sportif blessé au nourrisson présentant un torticolis.",
    ],
  },
  {
    icon: Target,
    title: "Approche et philosophie",
    paragraphs: [
      "Notre démarche repose sur une pratique fondée sur les preuves scientifiques (evidence-based practice), combinant techniques manuelles lorsque cela est indiqué, exercices thérapeutiques progressifs et éducation du patient.",
      "L'objectif est de vous rendre acteur de votre rééducation, de vous accompagner dans la compréhension de vos symptômes et de construire avec vous un plan de traitement adapté à votre quotidien, vos contraintes et vos objectifs.",
    ],
  },
];

export default function APropos() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Hero
        title="Le cabinet des Terres Neuves"
        subtitle="Une équipe de kinésithérapeutes passionnés à votre service"
        variant="reverse"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-3xl p-8 md:p-12 shadow-soft border border-border/50"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <SectionTitle title={section.title} />
                </div>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
