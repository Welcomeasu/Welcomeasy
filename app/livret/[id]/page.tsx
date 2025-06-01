"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  Wifi,
  MapPin,
  Coffee,
  Car,
  Utensils,
  Shield,
  Phone,
  Share2,
  ArrowUp,
  Globe,
  Clock,
  Key,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Données d'exemple pour le livret
const livretData = {
  nom: "Villa du Soleil",
  adresse: "Cannes, France",
  langue: "fr",
  motBienvenue:
    "Bienvenue dans notre magnifique villa ! Nous espérons que vous passerez un séjour inoubliable dans ce petit coin de paradis. La villa dispose de tout le confort moderne et d'une vue imprenable sur la mer.",
  sections: [
    {
      id: "1",
      type: "arrivee",
      titre: "Instructions d'arrivée",
      icone: MapPin,
      contenu:
        "Check-in : 16h00 - Check-out : 11h00. Les clés vous seront remises par notre conciergerie située au rez-de-chaussée de la résidence. Présentez-vous avec votre pièce d'identité et votre confirmation de réservation.",
    },
    {
      id: "2",
      type: "wifi",
      titre: "WiFi",
      icone: Wifi,
      contenu:
        "Réseau : VillaSoleil_5G\nMot de passe : Soleil2024!\n\nLe WiFi est gratuit et illimité. En cas de problème, redémarrez la box située dans le salon.",
    },
    {
      id: "3",
      type: "equipements",
      titre: "Équipements",
      icone: Coffee,
      contenu:
        '• Machine à café Nespresso (capsules fournies)\n• Lave-vaisselle et lave-linge\n• Climatisation dans toutes les pièces\n• Télévision 55" avec Netflix\n• Piscine privée chauffée\n• Barbecue sur la terrasse',
    },
    {
      id: "4",
      type: "parking",
      titre: "Parking",
      icone: Car,
      contenu:
        "Une place de parking privée est incluse dans la location. Elle se trouve au niveau -1 du garage, place n°15. L'accès se fait avec la télécommande fournie avec les clés.",
    },
    {
      id: "5",
      type: "restaurants",
      titre: "Bonnes adresses à proximité",
      icone: Utensils,
      contenu:
        "🍽️ Restaurant La Palme d'Or (gastronomique) - 5 min à pied\n🍕 Pizzeria Chez Marco (familial) - 2 min à pied",
    },
    {
      id: "6",
      type: "reglement",
      titre: "Règlement",
      icone: Shield,
      contenu:
        "• Respect du voisinage (silence après 22h)\n• Interdiction de fumer à l'intérieur\n• Maximum 6 personnes\n• Pas d'animaux\n• Fêtes interdites\n• Merci de laisser la villa propre",
    },
    {
      id: "7",
      type: "urgence",
      titre: "Contacts d'urgence",
      icone: Phone,
      contenu:
        "🏠 Conciergerie : +33 4 93 XX XX XX\n👨‍💼 Propriétaire : +33 6 XX XX XX XX\n🚨 Urgences : 15 (SAMU) / 18 (Pompiers)\n🚓 Police : 17\n🔧 Dépannage : +33 4 93 XX XX XX",
    },
  ],
}

export default function LivretPage() {
  const { toast } = useToast()
  const [langueActive, setLangueActive] = useState("fr")

  const partagerLien = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url)
    toast({
      title: "Lien copié !",
      description: "Le lien du livret a été copié dans votre presse-papiers.",
    })
  }

  const retourHaut = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header fixe */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Home className="h-6 w-6 text-primary" />
              <span className="text-sm text-gray-600">WelcomEasy</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button size="sm" variant="outline" onClick={partagerLien}>
                <Share2 className="h-4 w-4 mr-1" />
                Partager
              </Button>
              <Button size="sm" variant="outline">
                <Globe className="h-4 w-4 mr-1" />
                FR
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero section avec image de fond */}
      <section
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: "url('/pool-villa.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex items-end pb-8">
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{livretData.nom}</h1>
            <p className="text-lg opacity-90 flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              {livretData.adresse}
            </p>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Message de bienvenue */}
        <Card className="mb-8 border-l-4 border-l-primary">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
              <Coffee className="h-5 w-5 mr-2 text-primary" />
              Bienvenue
            </h2>
            <p className="text-gray-700 leading-relaxed">{livretData.motBienvenue}</p>
          </CardContent>
        </Card>

        {/* Informations importantes en haut */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <div className="flex items-center mb-2">
                <Clock className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-semibold text-blue-900">Horaires</span>
              </div>
              <p className="text-blue-800 text-sm">Check-in : 16h00 • Check-out : 11h00</p>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-4">
              <div className="flex items-center mb-2">
                <Key className="h-5 w-5 text-green-600 mr-2" />
                <span className="font-semibold text-green-900">Accès</span>
              </div>
              <p className="text-green-800 text-sm">Conciergerie au rez-de-chaussée</p>
            </CardContent>
          </Card>
        </div>

        {/* Sections du livret */}
        <div className="space-y-6">
          {livretData.sections.map((section, index) => (
            <Card key={section.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <section.icone className="h-5 w-5 mr-3 text-primary" />
                  {section.titre}
                </h3>
                <div className="text-gray-700 whitespace-pre-line leading-relaxed">{section.contenu}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer du livret */}
        <div className="mt-12 text-center">
          <Card className="bg-gray-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Passez un excellent séjour !</h3>
              <p className="text-gray-600 mb-4">N'hésitez pas à nous contacter si vous avez des questions.</p>
              <Badge variant="outline" className="text-xs">
                Livret créé avec WelcomEasy
              </Badge>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Bouton retour en haut */}
      <Button
        className="fixed bottom-6 right-6 rounded-full w-12 h-12 shadow-lg bg-primary hover:bg-primary/90"
        onClick={retourHaut}
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  )
}
