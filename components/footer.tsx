import Link from "next/link"
import { Home, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-2 group w-fit">
              <Home className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                WelcomEasy
              </span>
            </Link>
            <p className="text-gray-600 leading-relaxed">
              Créez des livrets d'accueil professionnels pour vos locations courte durée en quelques minutes.
              Simplifiez l'expérience de vos voyageurs.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="#" 
                className="text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link 
                href="#" 
                className="text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link 
                href="#" 
                className="text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Liens légaux */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 text-lg">Légal</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/mentions-legales" 
                  className="text-gray-600 hover:text-primary transition-colors inline-flex items-center group"
                >
                  <span className="relative">
                    Mentions légales
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/confidentialite" 
                  className="text-gray-600 hover:text-primary transition-colors inline-flex items-center group"
                >
                  <span className="relative">
                    Confidentialité
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/cgu" 
                  className="text-gray-600 hover:text-primary transition-colors inline-flex items-center group"
                >
                  <span className="relative">
                    CGU
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 text-lg">Contact</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-600 hover:text-primary transition-all duration-300 flex items-center space-x-2 group"
                >
                  <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
                  <span className="relative">
                    Nous contacter
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/aide" 
                  className="text-gray-600 hover:text-primary transition-all duration-300 flex items-center space-x-2 group"
                >
                  <Phone className="h-4 w-4 transition-transform group-hover:scale-110" />
                  <span className="relative">
                    Centre d'aide
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Button 
                  variant="outline" 
                  className="mt-4 w-full hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Démarrer gratuitement
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} WelcomEasy. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
