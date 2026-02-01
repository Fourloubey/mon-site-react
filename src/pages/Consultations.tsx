import { motion } from "framer-motion";
import { ClipboardCheck, Clock, Stethoscope, Phone, Baby, Bone, ShieldCheck } from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Button } from "@/components/ui/button";

const consultationSections = [
  {
    icon: ClipboardCheck,
    title: "Le bilan initial",
    content: "Nous débutons chaque prise en charge par un bilan individuel, moment privilégié où nous sommes à votre écoute. Il permet de réaliser un diagnostic kinésithérapique précis, de déterminer les déficits fonctionnels, posturaux ou musculaires, de proposer des objectifs réalistes et de mettre en place les moyens thérapeutiques nécessaires.",
  },
  {
    icon: Clock,
    title: "Durée et déroulement des séances",
    content: "Les séances de rééducation durent entre 30 et 45 minutes, voire davantage si cela est adapté et nécessaire à votre situation. Chaque séance permet d'évaluer la progression, d'ajuster les exercices et, le cas échéant, de réorienter le traitement en fonction de votre réponse thérapeutique.",
  },
  {
    icon: Stethoscope,
    title: "Approche thérapeutique",
    content: "Nous utilisons des techniques basées sur les preuves scientifiques (evidence-based practice), privilégiant les exercices actifs, l'éducation thérapeutique et les techniques manuelles lorsque cela est indiqué. L'objectif est de vous aider à retrouver autonomie, mobilité et confiance dans le mouvement.",
  },
];

const domaines = [
  {
    icon: Bone,
    title: "Pathologies rachidiennes",
    description: "Lombalgie, cervicalgie, dorsalgie - Prise en charge selon la méthode McKenzie et approches contemporaines.",
  },
  {
    icon: ShieldCheck,
    title: "Pathologies de l'épaule",
    description: "Tendinopathies, conflits sous-acromiaux, instabilités, capsulites rétractiles, rééducation post-opératoire.",
  },
  {
    icon: Bone,
    title: "Pathologies des membres inférieurs",
    description: "Entorses, tendinopathies, douleurs de genou, rééducation de hanche, troubles musculo-squelettiques.",
  },
  {
    icon: Baby,
    title: "Périnatalité",
    description: "Rééducation périnéale et abdominale post-partum, accompagnement dans la reprise d'activité.",
  },
  {
    icon: Baby,
    title: "Pédiatrie",
    description: "Bilan moteur, prise en charge des torticolis, plagiocéphalies, coliques et troubles respiratoires du nourrisson.",
  },
];

export default function Consultations() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Hero
        title="Consultations & Prise en charge"
        subtitle="Une prise en charge individualisée, centrée sur vos objectifs"
      />

      {/* Sections principales */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {consultationSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-3xl p-8 shadow-soft border border-border/50"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <section.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  {section.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Domaines de prise en charge */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle 
            title="Domaines de prise en charge"
            subtitle="Une expertise adaptée à vos besoins spécifiques"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {domaines.map((domaine, index) => (
              <motion.div
                key={domaine.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all shadow-soft hover:shadow-lifted"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <domaine.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                  {domaine.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {domaine.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-br from-primary/10 to-secondary/20 rounded-3xl p-12"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Prêt à prendre rendez-vous ?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Contactez-nous pour planifier votre première consultation et commencer votre parcours de rééducation.
            </p>
            <Button asChild size="lg" className="rounded-full gap-2 shadow-glow">
              <a href="tel:0670902769">
                <Phone className="w-5 h-5" />
                Appeler le cabinet
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
