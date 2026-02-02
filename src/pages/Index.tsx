import { motion } from "framer-motion";
import { Activity, HeartPulse, PersonStanding, ArrowRight, Baby } from "lucide-react";
import { Link } from "react-router-dom";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { AxeCard } from "@/components/sections/AxeCard";
import { BlogCard } from "@/components/sections/BlogCard";
import { TeamSection } from "@/components/sections/TeamSection";
import { Button } from "@/components/ui/button";

const axes = [
  {
    number: 1,
    title: "Douleurs et troubles musculosquelettiques",
    description: "Prise en charge des douleurs lombaires, cervicales, des épaules, hanches, genoux, chevilles et autres troubles musculosquelettiques, qu'ils soient récents ou installés.",
    icon: HeartPulse,
  },
  {
    number: 2,
    title: "Rééducation fonctionnelle & réathlétisation",
    description: "Suite à une blessure, une chirurgie ou une période d'arrêt, retrouvez progressivement mobilité, force et confiance dans le geste avec un travail spécifique adapté à votre discipline.",
    icon: Activity,
  },
  {
    number: 3,
    title: "Prévention en course à pied & reprise d'activité",
    description: "Des programmes individualisés pour progresser en limitant le risque de blessure, construits en fonction de votre niveau, vos objectifs et votre emploi du temps.",
    icon: PersonStanding,
  },
  {
    number: 4,
    title: "Périnatalité et pédiatrie",
    description: "Suite à une grossesse, la rééducation périnéale et abdominale vous aide à reprendre vos activités en toute confiance. Un bilan moteur pour votre enfant peut être prescrit par votre médecin, tout comme une prise en charge en cas de malpositions ou de troubles respiratoires.",
    icon: Baby,
  },
];

const blogArticles = [
  {
    tag: "Lombalgie",
    title: "La lombalgie : comprendre et agir",
    description: "Comprendre les mécanismes de la douleur lombaire et adopter une approche active pour favoriser la récupération.",
    content: "Qu'est-ce qu'une lombalgie ? • Causes et facteurs de risque • Pourquoi rester actif",
  },
  {
    tag: "Épaule",
    title: "L'épaule conflictuelle : 3 exercices",
    description: "Des exercices ciblés, progressifs et réguliers pour améliorer les symptômes et restaurer la fonction.",
    content: "Rotation externe • Mobilité scapulaire • Élévation contrôlée",
  },
  {
    tag: "Prévention",
    title: "Les bénéfices de l'activité physique",
    description: "L'activité physique régulière améliore la condition cardiovasculaire, la force musculaire et l'humeur.",
    content: "Bénéfices physiques et psychologiques • Recommandations OMS",
  },
  {
    tag: "Traumatologie",
    title: "L'entorse de cheville : banale mais à ne pas négliger",
    description: "L'entorse de cheville est l'une des blessures les plus fréquentes, souvent considérée comme bénigne.",
    content: "Anatomie et mécanisme • Gravité de l'entorse • Protocole POLICE • Rééducation et proprioception",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <Hero
        title="Cabinet de Kinésithérapie des Terres Neuves à Bordeaux Bègles"
        subtitle="Prise en charge des douleurs, rééducation fonctionnelle, périnéale et réathlétisation du sportif"
        showCta
      />

      {/* À qui s'adresse le cabinet */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 md:p-12 shadow-soft border border-border/50"
          >
            <SectionTitle title="À qui s'adresse le cabinet" />
            <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl">
              Vous souffrez de douleurs articulaires ou musculaires, vous êtes blessé dans votre pratique sportive, vous souhaitez vous remettre en mouvement dans un cadre sécurisé et encadré, ou vous recherchez une prise en charge spécialisée pour votre enfant ou votre nourrisson. Le cabinet de <strong className="text-foreground">Kinésithérapie des Terres Neuves</strong> vous accueille pour une prise en charge personnalisée, centrée sur le mouvement et l'éducation du patient.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Axes de prise en charge */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle 
            title="Axes de prise en charge" 
            subtitle="Une approche complète pour répondre à vos besoins, de la douleur à la performance"
          />
          
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {axes.map((axe, index) => (
              <AxeCard
                key={axe.number}
                number={axe.number}
                title={axe.title}
                description={axe.description}
                icon={axe.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* L'équipe */}
      <section id="equipe" className="scroll-mt-24">
        <TeamSection />
      </section>

      {/* Notre démarche */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <SectionTitle title="Notre démarche" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                La prise en charge repose sur une approche active : comprendre votre situation, expliquer les mécanismes de la douleur, vous redonner progressivement confiance dans le mouvement et vous rendre acteur de votre rééducation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Les séances combinent exercices spécifiques, conseils pratiques, adaptation de l'activité et, lorsque cela est indiqué, techniques manuelles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/30 p-1">
                <img
                  src="https://i.imgur.com/Pl1iv1e.jpeg"
                  alt="Notre démarche"
                  className="w-full h-full object-cover rounded-3xl" 
                  />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pour les différents publics */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 shadow-soft border border-border/50"
            >
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                Pour les personnes en reprise d'activité
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Après une période d'inactivité, une douleur ou une appréhension peut freiner le retour à l'activité physique. Des programmes progressifs permettent de retrouver mobilité, endurance et confiance, avec un suivi régulier.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 shadow-soft border border-border/50"
            >
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                Pour les patients sportifs
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Coureurs, pratiquants de sports collectifs, sports de raquette ou sports de force : la rééducation et la réathlétisation sont adaptées aux exigences de chaque discipline. Des tests ciblés et un suivi de la charge d'entraînement permettent une reprise progressive et sécurisée.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 shadow-soft border border-border/50"
            >
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                Pour les mamans et les nouveaux nés
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Après votre accouchement, nous sommes là pour vous accompagner dans la rééducation périnéale et abdominale. Pour votre nourrisson, nous proposons une prise en charge des troubles tels que les coliques, torticolis ou plagiocéphalie.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <SectionTitle 
              title="Ressources & Blog" 
              subtitle="Contenus pédagogiques sur la douleur, la rééducation et le mouvement"
            />
            <Button asChild variant="outline" className="rounded-full gap-2 self-start md:self-auto">
              <Link to="/blog">
                Voir tous les articles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogArticles.map((article, index) => (
              <BlogCard
                key={article.title}
                tag={article.tag}
                title={article.title}
                description={article.description}
                content={article.content}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
