"use client"

import Link from "next/link"
import { Home, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">WelcomEasy</h3>
            <p className="text-gray-600 text-sm">
              La solution simple pour créer vos livrets d'accueil digitaux.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Produit</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#fonctionnalites" className="text-gray-600 hover:text-gray-900 text-sm">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="text-gray-600 hover:text-gray-900 text-sm">
                  Tarifs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Légal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/mentions-legales" className="text-gray-600 hover:text-gray-900 text-sm">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="text-gray-600 hover:text-gray-900 text-sm">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/cgv" className="text-gray-600 hover:text-gray-900 text-sm">
                  CGV
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@welcomeasy.fr" className="text-gray-600 hover:text-gray-900 text-sm">
                  contact@welcomeasy.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} WelcomEasy. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
