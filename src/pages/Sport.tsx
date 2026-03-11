import { motion } from "framer-motion";
import { Users, Activity, Zap, Target, TrendingUp } from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SectionTitle } from "@/components/sections/SectionTitle";

const sportSections = [
  {
    icon: Users,
    title: "Kiné du sport pour tous à Bordeaux Bègles", // Ajout localisation
    content: "Que vous soyez marathonien, pratiquant de crossfit aux Terres Neuves ou coureur débutant, nous adaptons votre rééducation à votre pratique. Nous accompagnons la reprise du sport après blessure pour une activité durable.",
  },
  {
    icon: Activity,
    title: "Gestion de la récupération",
    content: "Nous vous accompagnons dans la gestion de votre récupération entre les séances et dans l'optimisation de vos performances par un suivi de la charge d'entraînement, des conseils sur la progressivité et l'adaptation de vos volumes et intensités.",
  },
 {
    icon: Zap,
    title: "Expertise en Course à pied", // Terme fort
    content: "Spécialisés dans les blessures du coureur, nous réalisons une analyse clinique complète de votre foulée et de votre historique d'entraînement pour traiter la cause réelle de vos douleurs.",
  },
  {
    icon: Target,
    title: "Programme personnalisé",
    content: "Nous développons un programme d'exercices personnalisé pour chaque coureur, basé sur l'évaluation des déficits musculaires, posturaux et fonctionnels. Ce programme intègre renforcement, gainage, mobilité, pliométrie et critères de retour progressif.",
  },
  {
    icon: TrendingUp,
    title: "Réathlétisation après chirurgie et retour au sport",
    content: "Suivi post-opératoire : ligamentoplastie (LCA), ménisques ou tendons. La réathlétisation structure le retour à l'activité sportive par étapes validées : critères de douleur, tests de force, tests fonctionnels, progression de la charge. L'objectif est de revenir au niveau souhaité en minimisant le risque de récidive.",
  },
];

export default function Sport() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Hero
        title="Sport & Course à pied"
        subtitle="Accompagnement du sportif : de la blessure à la performance"
        variant="reverse"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionTitle 
              title="Un accompagnement complet"
              subtitle="De la prévention à la réathlétisation, chaque étape est pensée pour vous permettre de retrouver votre pratique sportive en toute confiance."
            />

            <div className="space-y-8 mt-12">
              {sportSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <section.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {section.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blessures courantes */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 md:p-12 shadow-soft border border-border/50 max-w-4xl mx-auto"
          >
            <SectionTitle title="Blessures courantes du coureur" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nous vous expliquons les différentes stratégies thérapeutiques disponibles pour traiter les blessures courantes chez les coureurs :
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Tendinopathies d'Achille",
                "Périostites tibiales",
                "Syndrome fémoro-patellaire",
                "Syndromes de friction (bandelette)",
                "Douleurs de hanche du coureur",
                "Fasciite plantaire",
              ].map((blessure) => (
                <div 
                  key={blessure}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/50"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground text-sm">{blessure}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
