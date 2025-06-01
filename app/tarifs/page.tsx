import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check, ArrowLeft } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TarifsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à l'accueil
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Des tarifs simples, sans surprise</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choisissez la formule qui correspond à vos besoins. Changez ou annulez à tout moment.
            </p>
          </div>

          {/* Plans de tarification */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Plan Gratuit */}
            <Card className="relative">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Gratuit</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mb-2">0€</div>
                <CardDescription className="text-base">Parfait pour découvrir WelcomEasy</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>1 livret d'accueil</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>3 sections maximum</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>1 langue disponible</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Lien de partage</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Support par email</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" size="lg">
                  Commencer gratuitement
                </Button>
              </CardContent>
            </Card>

            {/* Plan Starter */}
            <Card className="relative border-primary shadow-xl scale-105">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1">
                Le plus populaire
              </Badge>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Starter</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  5€<span className="text-xl text-gray-600 font-normal">/mois</span>
                </div>
                <CardDescription className="text-base">Idéal pour les propriétaires</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Jusqu'à 3 livrets</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>10 sections par livret</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>QR code automatique</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Support multilingue</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Mise à jour temps réel</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Support prioritaire</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Choisir cette formule
                </Button>
              </CardContent>
            </Card>

            {/* Plan Pro */}
            <Card className="relative">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Pro</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  20€<span className="text-xl text-gray-600 font-normal">/mois</span>
                </div>
                <CardDescription className="text-base">Pour les professionnels de l'immobilier</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Livrets illimités</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Sections illimitées</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Branding personnalisé</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Statistiques d'accès</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Export PDF</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Support téléphonique</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" size="lg">
                  Choisir cette formule
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Tarifs */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">FAQ Tarifs</h2>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">Puis-je changer de formule à tout moment ?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Oui, vous pouvez passer d'une formule à l'autre à tout moment depuis votre tableau de bord. Les
                  changements prennent effet immédiatement et la facturation est ajustée au prorata.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">Y a-t-il des frais cachés ou d'engagement ?</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Aucun frais caché, aucun engagement. Vous payez uniquement votre abonnement mensuel et pouvez annuler
                  à tout moment. Pas de frais de résiliation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Que se passe-t-il si je dépasse les limites de mon plan ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Nous vous préviendrons avant d'atteindre les limites. Vous pourrez alors passer au plan supérieur ou
                  supprimer des livrets pour rester dans votre plan actuel.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Proposez-vous des réductions pour les abonnements annuels ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Oui ! En choisissant un abonnement annuel, vous bénéficiez de 2 mois gratuits (soit 16% de réduction).
                  Contactez-nous pour en savoir plus.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Acceptez-vous les paiements par virement ou chèque ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Pour le moment, nous acceptons uniquement les paiements par carte bancaire via Stripe. C'est plus
                  sécurisé et permet une gestion automatique de votre abonnement.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* CTA Final */}
          <div className="text-center mt-16">
            <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Prêt à commencer ?</h3>
              <p className="text-gray-600 mb-6">
                Créez votre premier livret d'accueil en quelques minutes. Aucune carte bancaire requise pour commencer.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/dashboard/livrets/nouveau">Créer mon premier livret</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
