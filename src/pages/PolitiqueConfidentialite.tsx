export default function PolitiqueConfidentialite() {
  return (
    <main className="container mx-auto px-4 lg:px-8 py-16">
      <h1 className="text-3xl font-semibold mb-6">Politique de confidentialité</h1>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <p>
          <strong>Dernière mise à jour :</strong> 02 février 2026.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">1) Responsable du traitement</h2>
          <p>
            Le site est édité par <strong>SCM Kiné Terres Neuves</strong> (“nous”).
            Pour toute question relative à vos données personnelles, vous pouvez nous contacter via les
            coordonnées figurant dans la page <strong>Mentions légales</strong>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">2) Données collectées</h2>
          <p>Selon votre usage du site, nous pouvons collecter :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Données de contact : nom/prénom, email, téléphone (si vous nous contactez).</li>
            <li>
              Données techniques et de navigation : adresse IP, données de navigation, informations sur votre
              terminal et votre navigateur (notamment via cookies/traceurs, si utilisés).
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">3) Finalités et bases légales</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Répondre à vos demandes et gérer la prise de contact (base légale : intérêt légitime et/ou mesures
              précontractuelles selon le contexte).
            </li>
            <li>
              Assurer la sécurité, le bon fonctionnement et l’amélioration du site (base légale : intérêt légitime).
            </li>
            <li>
              Mesure d’audience / cookies non essentiels : uniquement si vous y consentez lorsque la loi l’exige
              (base légale : consentement).
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">4) Destinataires</h2>
          <p>
            Vos données sont destinées aux personnes habilitées au sein de <strong>SCM Kiné Terres Neuves</strong>.
            Elles peuvent également être traitées par des prestataires techniques (hébergement, maintenance,
            outils nécessaires au fonctionnement du site), uniquement pour les finalités décrites ci-dessus.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">5) Durées de conservation</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Données liées aux demandes de contact : conservées le temps de traiter votre demande, puis, si
              nécessaire, archivées de manière limitée pour le suivi ou le respect d’obligations.
            </li>
            <li>
              Données techniques/cookies : conservées pour une durée limitée selon leur nature et vos choix.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">6) Cookies / traceurs</h2>
          <p>
            Le site peut utiliser des cookies/traceurs. Lorsque requis, votre consentement est recueilli avant le dépôt
            de cookies non essentiels. Vous pouvez modifier vos choix à tout moment (via le module cookies s’il est
            présent sur le site).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">7) Vos droits</h2>
          <p>Vous disposez notamment des droits suivants, dans les conditions prévues par la réglementation :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Droit d’accès.</li>
            <li>Droit de rectification.</li>
            <li>Droit à l’effacement.</li>
            <li>Droit d’opposition.</li>
            <li>Droit à la limitation du traitement.</li>
            <li>Droit à la portabilité (dans les cas applicables).</li>
            <li>Droit de retirer votre consentement à tout moment lorsque le traitement repose sur celui-ci.</li>
          </ul>
          <p>
            Pour exercer vos droits, contactez-nous via les coordonnées figurant dans la page <strong>Mentions légales</strong>.
            Nous répondons en principe dans un délai d’un mois.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">8) Réclamation</h2>
          <p>
            Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez introduire
            une réclamation auprès de la <strong>CNIL</strong>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">9) Mise à jour</h2>
          <p>
            Nous pouvons modifier la présente politique de confidentialité. La date de mise à jour figurera en haut
            de page.
          </p>
        </section>
      </div>
    </main>
  );
}
