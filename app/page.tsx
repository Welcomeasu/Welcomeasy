import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Smartphone,
  QrCode,
  RefreshCw,
  Globe,
  Star,
  Check,
  ArrowRight,
  Wifi,
  MapPin,
  Coffee,
  Utensils,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-bg relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/pool-villa.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Votre livret d'accueil digital en <span className="text-primary">3 minutes</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Proposez un accueil professionnel et sans papier. Simple à créer. Accessible par lien ou QR code.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/dashboard/livrets/nouveau">
                    Créer mon livret maintenant
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#demo">Voir la démo</Link>
                </Button>
              </div>
            </div>

            {/* Mockup smartphone */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-[500px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: "url('/pool-villa.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute inset-0 bg-black/40" />
                    </div>
                    <div className="relative z-10 p-6 text-white">
                      <div className="text-center mb-6">
                        <h3 className="text-lg font-bold">Villa du Soleil</h3>
                        <p className="text-sm opacity-90">Cannes, France</p>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                          <div className="flex items-center space-x-2">
                            <Wifi className="h-4 w-4" />
                            <span className="text-sm">WiFi: VillaSoleil2024</span>
                          </div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">Check-in: 16h / Check-out: 11h</span>
                          </div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                          <div className="flex items-center space-x-2">
                            <Coffee className="h-4 w-4" />
                            <span className="text-sm">Café offert</span>
                          </div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                          <div className="flex items-center space-x-2">
                            <Utensils className="h-4 w-4" />
                            <span className="text-sm">Bonnes adresses à proximité</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités */}
      <section id="fonctionnalites" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tout ce dont vous avez besoin</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des fonctionnalités pensées pour les propriétaires qui veulent offrir la meilleure expérience à leurs
              voyageurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Lien personnalisé</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Un lien unique pour chaque bien, facile à partager avec vos voyageurs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <QrCode className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">QR code automatique</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Généré automatiquement pour un accès instantané depuis n'importe quel smartphone.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <RefreshCw className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Mise à jour temps réel</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Modifiez vos informations à tout moment, elles sont mises à jour instantanément.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Multilingue</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Français, anglais, espagnol... Accueillez vos voyageurs dans leur langue.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ils nous font confiance</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "Mes voyageurs adorent ! Plus besoin d'imprimer des dizaines de pages. Tout est accessible en un clic
                  et toujours à jour."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">MC</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Propriétaire</div>
                    <div className="text-sm text-gray-600">Nice</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "Interface super simple, résultat professionnel. J'ai créé mes 3 livrets en moins de 15 minutes.
                  Parfait !"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">JM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Propriétaire</div>
                    <div className="text-sm text-gray-600">Lyon</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Tarifs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Des tarifs simples, sans surprise</h2>
            <p className="text-xl text-gray-600">Choisissez la formule qui correspond à vos besoins</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Plan Gratuit */}
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Gratuit</CardTitle>
                <div className="text-3xl font-bold text-gray-900 mt-2">0€</div>
                <CardDescription>Pour commencer</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>1 livret</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>3 sections max</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>1 langue</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline" asChild>
                  <Link href="/inscription?plan=gratuit">Commencer gratuitement</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Plan Starter */}
            <Card className="relative border-primary shadow-lg">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">Populaire</Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Starter</CardTitle>
                <div className="text-3xl font-bold text-gray-900 mt-2">
                  5€<span className="text-lg text-gray-600">/mois</span>
                </div>
                <CardDescription>Pour les propriétaires</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Jusqu'à 3 livrets</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>10 sections</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>QR code</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Multilingue</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90" asChild>
                  <Link href="/inscription?plan=starter">Choisir Starter</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Plan Pro */}
            <Card className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Pro</CardTitle>
                <div className="text-3xl font-bold text-gray-900 mt-2">
                  20€<span className="text-lg text-gray-600">/mois</span>
                </div>
                <CardDescription>Pour les professionnels</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Livrets illimités</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Sections illimitées</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Branding personnalisé</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Statistiques d'accès</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline" asChild>
                  <Link href="/inscription?plan=pro">Choisir Pro</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Comment créer mon premier livret ?</AccordionTrigger>
                <AccordionContent>
                  C'est très simple ! Cliquez sur "Créer mon livret maintenant", remplissez les informations de votre
                  bien et ajoutez les sections que vous souhaitez. Votre livret sera prêt en quelques minutes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Puis-je modifier mon livret après création ?</AccordionTrigger>
                <AccordionContent>
                  Absolument ! Vous pouvez modifier votre livret à tout moment depuis votre tableau de bord. Les
                  modifications sont appliquées instantanément.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Le QR code est-il inclus dans tous les plans ?</AccordionTrigger>
                <AccordionContent>
                  Le QR code est inclus à partir du plan Starter (5€/mois). Il permet à vos voyageurs d'accéder
                  instantanément au livret en scannant le code.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Puis-je annuler mon abonnement à tout moment ?</AccordionTrigger>
                <AccordionContent>
                  Oui, vous pouvez annuler votre abonnement à tout moment depuis votre espace personnel. Aucun
                  engagement, aucune pénalité.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
