import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const navLinks = [
  { name: "Accueil", path: "/" },
  { name: "À propos", path: "/a-propos" },
  { name: "Consultations", path: "/consultations" },
  { name: "Sport & Course", path: "/sport" },
  { name: "Blog", path: "/blog" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-start gap-3 mb-6">
              <div className="shrink-0 w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-muted">
                <img
                  src="https://i.imgur.com/xdH8a9o.png"
                  alt="Logo Cabinet Kinésithérapie"
                  className="w-full h-full object-contain"
                />
              </div>
            
              <div className="min-w-0">
                <span className="font-display text-lg font-semibold text-background">
                  Cabinet Kinésithérapie Terres Neuves
                </span>
                <span className="block text-xs text-background/60">
                  Kiné du Sport - Bordeaux Bègles
                </span>
              </div>
            </div>

            <p className="text-background/70 text-sm leading-relaxed">
              Rééducation fonctionnelle, kinésithérapie du sportif et rééducation périnéale à Bordeaux Terres Neuves.
            </p>
          </div>

          {/* Contact & Accès - Optimisé SEO */}
          <section id="contact" className="scroll-mt-24">
            <h3 className="font-display text-lg font-semibold mb-6 text-primary">
              Contact & Accès
            </h3>
          
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="text-background/80 text-sm">
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=317+Boulevard+Jean+Jacques+Bosc+33800+Bordeaux" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors font-medium"
                  >
                    317 Bd Jean Jacques Bosc<br />33800 Bordeaux
                  </a>
                  <p className="mt-2 text-xs text-background/60 italic">
                    Tram C : Arrêt Terres Neuves (200m)
                  </p>
                </div>
              </li>
          
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="tel:0670902769"
                  className="text-background/80 text-sm hover:text-primary transition-colors"
                >
                  06 70 90 27 69
                </a>
              </li>
          
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="mailto:kineterresneuves@gmail.com"
                  className="text-background/80 text-sm hover:text-primary transition-colors"
                >
                  kineterresneuves@gmail.com
                </a>
              </li>
            </ul>
          </section>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-primary">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-background/80 text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-primary">
              Horaires
            </h3>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div className="text-background/80 text-sm">
                <p className="font-medium">Lundi au Vendredi</p>
                <p>8h00 - 20h00</p>
                <p className="mt-2 italic text-background/60 text-xs text-primary/80">Sur RDV uniquement</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-background/10 text-center">
          <p className="text-background/50 text-sm">
            © 2026 Kineos-digital - Fourloubey Gaétan - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
