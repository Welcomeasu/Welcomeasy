"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Trash2, Wifi, MapPin, Coffee, Car, Utensils, Shield, Phone, ArrowLeft, Save, Eye } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

interface Section {
  id: string
  type: string
  titre: string
  contenu: string
  icone: any
}

const typesSections = [
  { value: "wifi", label: "WiFi", icone: Wifi },
  { value: "arrivee", label: "Instructions d'arrivée", icone: MapPin },
  { value: "reglement", label: "Règlement", icone: Shield },
  { value: "equipements", label: "Équipements", icone: Coffee },
  { value: "parking", label: "Parking", icone: Car },
  { value: "restaurants", label: "Bonnes adresses", icone: Utensils },
  { value: "urgence", label: "Contacts d'urgence", icone: Phone },
]

export default function NouveauLivretPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    nom: "",
    adresse: "",
    langue: "",
    instructionsArrivee: "",
    motBienvenue: "",
  })

  const [sections, setSections] = useState<Section[]>([])
  const [nouveauTypeSection, setNouveauTypeSection] = useState("")
  const [livretId, setLivretId] = useState<string | null>(null)

  const ajouterSection = () => {
    if (!nouveauTypeSection) return

    const typeSection = typesSections.find((t) => t.value === nouveauTypeSection)
    if (!typeSection) return

    const nouvelleSection: Section = {
      id: Date.now().toString(),
      type: nouveauTypeSection,
      titre: typeSection.label,
      contenu: "",
      icone: typeSection.icone,
    }

    setSections([...sections, nouvelleSection])
    setNouveauTypeSection("")
  }

  const supprimerSection = (id: string) => {
    setSections(sections.filter((s) => s.id !== id))
  }

  const modifierSection = (id: string, contenu: string) => {
    setSections(sections.map((s) => (s.id === id ? { ...s, contenu } : s)))
  }

  const enregistrerLivret = () => {
    if (!formData.nom || !formData.adresse) {
      toast.error("Veuillez remplir au moins le nom et l'adresse du bien.")
      return
    }

    // Simulation de l'enregistrement
    const id = Date.now().toString()
    const lienLivret = `https://welcomeasy.com/livret/${formData.nom.toLowerCase().replace(/\s+/g, "-")}-${id}`

    setLivretId(id)

    toast.success(`Votre livret est accessible à l'adresse : ${lienLivret}`)
  }

  const voirApercu = () => {
    if (!formData.nom || !formData.adresse) {
      toast.error("Veuillez remplir au moins le nom et l'adresse du bien avant de voir l'aperçu.")
      return
    }

    // Simuler la sauvegarde et rediriger vers l'aperçu
    const id = livretId || Date.now().toString()
    if (!livretId) setLivretId(id)

    // Rediriger vers la page d'aperçu
    router.push(`/livret/${id}`)
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/dashboard/livrets"
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour à mes livrets
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Créer un nouveau livret d'accueil</h1>
        <p className="text-gray-600">Remplissez les informations de votre bien et personnalisez votre livret</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Formulaire */}
        <div className="space-y-6">
          {/* Informations de base */}
          <Card>
            <CardHeader>
              <CardTitle>Informations du bien</CardTitle>
              <CardDescription>Les informations principales de votre logement</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="nom">Nom du bien *</Label>
                <Input
                  id="nom"
                  placeholder="Villa du Soleil"
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="adresse">Adresse du bien *</Label>
                <Input
                  id="adresse"
                  placeholder="123 Avenue de la Plage, Cannes"
                  value={formData.adresse}
                  onChange={(e) => setFormData({ ...formData, adresse: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="langue">Langue principale</Label>
                <Select value={formData.langue} onValueChange={(value) => setFormData({ ...formData, langue: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner une langue" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Contenu principal */}
          <Card>
            <CardHeader>
              <CardTitle>Contenu principal</CardTitle>
              <CardDescription>Le message d'accueil et les instructions essentielles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="bienvenue">Mot de bienvenue</Label>
                <Textarea
                  id="bienvenue"
                  placeholder="Bienvenue dans notre magnifique villa ! Nous espérons que vous passerez un séjour inoubliable..."
                  value={formData.motBienvenue}
                  onChange={(e) => setFormData({ ...formData, motBienvenue: e.target.value })}
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="arrivee">Instructions d'arrivée</Label>
                <Textarea
                  id="arrivee"
                  placeholder="Pour récupérer les clés, rendez-vous à l'accueil de la résidence..."
                  value={formData.instructionsArrivee}
                  onChange={(e) => setFormData({ ...formData, instructionsArrivee: e.target.value })}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Sections personnalisées */}
          <Card>
            <CardHeader>
              <CardTitle>Sections personnalisées</CardTitle>
              <CardDescription>Ajoutez des sections pour enrichir votre livret</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Ajouter une section */}
              <div className="flex gap-2 mb-4">
                <Select value={nouveauTypeSection} onValueChange={setNouveauTypeSection}>
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Choisir un type de section" />
                  </SelectTrigger>
                  <SelectContent>
                    {typesSections.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        <div className="flex items-center">
                          <type.icone className="h-4 w-4 mr-2" />
                          {type.label}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button onClick={ajouterSection} disabled={!nouveauTypeSection}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {/* Liste des sections */}
              <div className="space-y-4">
                {sections.map((section) => (
                  <div key={section.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <section.icone className="h-5 w-5 text-primary mr-2" />
                        <span className="font-medium">{section.titre}</span>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => supprimerSection(section.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <Textarea
                      placeholder={`Contenu pour ${section.titre.toLowerCase()}...`}
                      value={section.contenu}
                      onChange={(e) => modifierSection(section.id, e.target.value)}
                      rows={2}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex gap-4">
            <Button onClick={enregistrerLivret} className="flex-1 bg-primary hover:bg-primary/90">
              <Save className="h-4 w-4 mr-2" />
              Enregistrer et générer le lien
            </Button>
            <Button variant="outline" className="flex-1" onClick={voirApercu}>
              <Eye className="h-4 w-4 mr-2" />
              Aperçu
            </Button>
          </div>
        </div>

        {/* Aperçu live */}
        <div className="lg:sticky lg:top-6">
          <Card>
            <CardHeader>
              <CardTitle>Aperçu du livret</CardTitle>
              <CardDescription>Voici comment votre livret apparaîtra à vos voyageurs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 rounded-lg p-6 min-h-[500px]">
                {/* Mockup smartphone */}
                <div className="max-w-sm mx-auto">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Header du livret */}
                    <div
                      className="h-32 bg-gradient-to-br from-primary/20 to-secondary/20 relative"
                      style={{
                        backgroundImage: "url('/pool-villa.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute inset-0 bg-black/40" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-bold text-lg">{formData.nom || "Nom du bien"}</h3>
                        <p className="text-sm opacity-90">{formData.adresse || "Adresse du bien"}</p>
                      </div>
                    </div>

                    {/* Contenu du livret */}
                    <div className="p-4 space-y-4">
                      {formData.motBienvenue && (
                        <div className="bg-blue-50 rounded-lg p-3">
                          <h4 className="font-semibold text-blue-900 mb-2">Bienvenue</h4>
                          <p className="text-sm text-blue-800">{formData.motBienvenue}</p>
                        </div>
                      )}

                      {formData.instructionsArrivee && (
                        <div className="bg-green-50 rounded-lg p-3">
                          <h4 className="font-semibold text-green-900 mb-2 flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            Arrivée
                          </h4>
                          <p className="text-sm text-green-800">{formData.instructionsArrivee}</p>
                        </div>
                      )}

                      {sections.map((section) => (
                        <div key={section.id} className="bg-gray-50 rounded-lg p-3">
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <section.icone className="h-4 w-4 mr-1" />
                            {section.titre}
                          </h4>
                          {section.contenu && <p className="text-sm text-gray-700">{section.contenu}</p>}
                        </div>
                      ))}

                      {!formData.motBienvenue && !formData.instructionsArrivee && sections.length === 0 && (
                        <div className="text-center py-8 text-gray-500">
                          <p className="text-sm">Votre livret apparaîtra ici</p>
                          <p className="text-xs mt-1">Commencez par remplir les informations à gauche</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
