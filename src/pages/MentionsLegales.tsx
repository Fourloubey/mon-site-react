export default function MentionsLegales() {
  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Mentions légales</h1>

      <section className="space-y-3 text-muted-foreground leading-relaxed">
        <p><strong>Éditeur du site :</strong> [Nom / Raison sociale]</p>
        <p><strong>Adresse :</strong> [Adresse complète]</p>
        <p><strong>Email :</strong> [Email]</p>
        <p><strong>Téléphone :</strong> [Téléphone]</p>
        <p><strong>SIRET :</strong> [SIRET] (si applicable)</p>
        <p><strong>Directeur de publication :</strong> [Nom]</p>
        <p><strong>Hébergeur :</strong> [Nom, adresse, téléphone]</p>
      </section>
    </main>
  );
}
