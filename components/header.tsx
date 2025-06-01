"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              WelcomEasy
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#fonctionnalites" className="text-gray-600 hover:text-gray-900">
              Fonctionnalités
            </Link>
            <Link href="/tarifs" className="text-gray-600 hover:text-gray-900">
              Tarifs
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/connexion">Connexion</Link>
            </Button>
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/inscription">Inscription</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
