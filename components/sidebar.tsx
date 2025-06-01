"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, BookOpen, CreditCard, LogOut, User, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

const navigation = [
  {
    name: "Accueil",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "Mes livrets",
    href: "/dashboard/livrets",
    icon: BookOpen,
  },
  {
    name: "Mon abonnement",
    href: "/dashboard/abonnement",
    icon: CreditCard,
  },
  {
    name: "Mon profil",
    href: "/dashboard/profil",
    icon: User,
  },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col w-64 bg-white/80 backdrop-blur-lg border-r border-gray-200 shadow-lg">
      <div className="flex items-center h-16 px-6 border-b border-gray-200">
        <Link 
          href="/" 
          className="flex items-center space-x-2 group transition-transform hover:scale-105"
        >
          <Home className="h-8 w-8 text-primary transition-colors group-hover:text-primary/80" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            WelcomEasy
          </span>
        </Link>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center px-3 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 relative overflow-hidden",
                isActive 
                  ? "bg-primary text-white shadow-md" 
                  : "text-gray-600 hover:bg-gray-50 hover:text-primary hover:shadow-sm"
              )}
            >
              <motion.div
                initial={false}
                animate={{
                  backgroundColor: isActive ? "var(--primary)" : "transparent",
                  opacity: isActive ? 0.15 : 0,
                }}
                className="absolute inset-0"
              />
              <item.icon className={cn(
                "h-5 w-5 mr-3 transition-transform duration-300 group-hover:scale-110",
                isActive ? "text-white" : "text-gray-400 group-hover:text-primary"
              )} />
              <span className="flex-1">{item.name}</span>
              {isActive && (
                <ChevronRight className="h-4 w-4 text-white animate-pulse" />
              )}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center w-full px-3 py-2.5 text-sm font-medium text-gray-600 rounded-xl hover:bg-red-50 hover:text-red-600 transition-all duration-300 group">
          <LogOut className="h-5 w-5 mr-3 text-gray-400 group-hover:text-red-500 transition-transform group-hover:scale-110 group-hover:-translate-x-1" />
          <span className="flex-1">Déconnexion</span>
        </button>
      </div>
    </div>
  )
}
