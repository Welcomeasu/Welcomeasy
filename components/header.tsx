"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Home } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled 
        ? "bg-white/95 backdrop-blur-sm shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
          >
            <Home className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              WelcomEasy
            </span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="#fonctionnalites" 
              className="relative text-gray-600 hover:text-primary transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Fonctionnalités
            </Link>
            <Link 
              href="/tarifs" 
              className="relative text-gray-600 hover:text-primary transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Tarifs
            </Link>
            <Link 
              href="/contact" 
              className="relative text-gray-600 hover:text-primary transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Contact
            </Link>
            <Button 
              variant="outline" 
              className="hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/connexion">Connexion</Link>
            </Button>
          </nav>

          {/* Menu Mobile */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menu Mobile Ouvert */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        )}>
          <nav className="flex flex-col space-y-4 py-4">
            <Link 
              href="#fonctionnalites" 
              className="text-gray-600 hover:text-primary transition-colors pl-2 border-l-2 border-transparent hover:border-primary"
            >
              Fonctionnalités
            </Link>
            <Link 
              href="/tarifs" 
              className="text-gray-600 hover:text-primary transition-colors pl-2 border-l-2 border-transparent hover:border-primary"
            >
              Tarifs
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-600 hover:text-primary transition-colors pl-2 border-l-2 border-transparent hover:border-primary"
            >
              Contact
            </Link>
            <Button 
              variant="outline" 
              className="w-fit hover:bg-primary hover:text-white transition-all duration-300"
              asChild
            >
              <Link href="/connexion">Connexion</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
