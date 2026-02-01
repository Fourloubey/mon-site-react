import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { BlogCard } from "@/components/sections/BlogCard";

const blogArticles = [
  {
    tag: "Lombalgie",
    title: "La lombalgie : comprendre et agir",
    description: "La lombalgie touche une majorité de personnes au cours de leur vie. Comprendre les mécanismes de la douleur lombaire et adopter une approche active sont des clés pour favoriser la récupération et éviter la chronicisation.",
    content: "Qu'est-ce qu'une lombalgie ? • Causes et facteurs de risque • Pourquoi rester actif • La méthode McKenzie • Quand consulter • Conseils pratiques",
  },
  {
    tag: "Épaule",
    title: "L'épaule conflictuelle : 3 exercices",
    description: "Le conflit sous-acromial est une cause fréquente de douleur d'épaule. Des exercices ciblés, progressifs et réguliers peuvent améliorer les symptômes et restaurer la fonction de l'épaule.",
    content: "Qu'est-ce qu'un conflit sous-acromial ? • Exercice 1 : Rotation externe • Exercice 2 : Mobilité scapulaire • Exercice 3 : Élévation contrôlée • Conseils de progression",
  },
  {
    tag: "Prévention",
    title: "Les bénéfices de l'activité physique",
    description: "L'activité physique régulière est l'un des piliers de la santé. Elle améliore la condition cardiovasculaire, la force musculaire, la densité osseuse, l'humeur et réduit le risque de nombreuses pathologies chroniques.",
    content: "Bénéfices physiques et psychologiques • Recommandations OMS • Comment reprendre après une pause • Le rôle du kinésithérapeute",
  },
  {
    tag: "Traumatologie",
    title: "L'entorse de cheville : banale mais à ne pas négliger",
    description: "L'entorse de cheville est l'une des blessures les plus fréquentes, souvent considérée comme bénigne. Pourtant, une prise en charge inadaptée peut entraîner instabilité chronique, douleurs résiduelles et récidives.",
    content: "Anatomie et mécanisme • Gravité de l'entorse • Protocole POLICE • Rééducation et proprioception • Prévention des récidives",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Hero
        title="Blog & Ressources"
        subtitle="Contenus pédagogiques sur la douleur, la rééducation et le mouvement"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
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
