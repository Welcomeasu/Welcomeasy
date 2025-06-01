"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, ExternalLink, Copy, Edit, Trash2, Eye, Calendar, MapPin, BookOpen } from "lucide-react"
import { toast } from "sonner"

// Données d'exemple
const livrets = [
  {
    id: "1",
    nom: "Villa du Soleil",
    adresse: "Cannes, France",
    lien: "https://welcomeasy.com/livret/villa-du-soleil-abc123",
    derniereModification: "2024-01-15",
    statut: "Actif",
    vues: 45,
  },
  {
    id: "2",
    nom: "Appartement Centre-ville",
    adresse: "Nice, France",
    lien: "https://welcomeasy.com/livret/appart-nice-def456",
    derniereModification: "2024-01-10",
    statut: "Actif",
    vues: 23,
  },
  {
    id: "3",
    nom: "Maison de Campagne",
    adresse: "Provence, France",
    lien: "https://welcomeasy.com/livret/maison-provence-ghi789",
    derniereModification: "2024-01-08",
    statut: "Brouillon",
    vues: 0,
  },
]

export default function LivretsPage() {
  const [livretsList, setLivretsList] = useState(livrets)

  const copierLien = (lien: string) => {
    navigator.clipboard.writeText(lien)
    toast.success("Le lien a été copié dans votre presse-papiers.")
  }

  const supprimerLivret = (id: string) => {
    setLivretsList(livretsList.filter((livret) => livret.id !== id))
    toast.success("Le livret a été supprimé avec succès.")
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mes livrets</h1>
          <p className="text-gray-600">Gérez vos livrets d'accueil et partagez-les avec vos voyageurs</p>
        </div>
        <Button className="mt-4 sm:mt-0 bg-primary hover:bg-primary/90" asChild>
          <Link href="/dashboard/livrets/nouveau">
            <Plus className="h-4 w-4 mr-2" />
            Créer un nouveau livret
          </Link>
        </Button>
      </div>

      {/* Stats rapides */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total livrets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{livretsList.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Vues ce mois</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {livretsList.reduce((total, livret) => total + livret.vues, 0)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Livrets actifs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {livretsList.filter((livret) => livret.statut === "Actif").length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Liste des livrets */}
      {livretsList.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Aucun livret créé</h3>
            <p className="text-gray-600 mb-6">
              Créez votre premier livret d'accueil pour commencer à accueillir vos voyageurs.
            </p>
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/dashboard/livrets/nouveau">
                <Plus className="h-4 w-4 mr-2" />
                Créer mon premier livret
              </Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {livretsList.map((livret) => (
            <Card key={livret.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{livret.nom}</CardTitle>
                    <CardDescription className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {livret.adresse}
                    </CardDescription>
                  </div>
                  <Badge
                    variant={livret.statut === "Actif" ? "default" : "secondary"}
                    className={livret.statut === "Actif" ? "bg-green-100 text-green-800" : ""}
                  >
                    {livret.statut}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Lien de partage */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Lien de partage</label>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 p-2 bg-gray-50 rounded text-sm text-gray-600 truncate">{livret.lien}</div>
                    <Button size="sm" variant="outline" onClick={() => copierLien(livret.lien)}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Métadonnées */}
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Modifié le {new Date(livret.derniereModification).toLocaleDateString("fr-FR")}
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {livret.vues} vues
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-2 pt-2">
                  <Button size="sm" variant="outline" asChild className="flex-1">
                    <Link href={`/livret/${livret.id}`}>
                      <Eye className="h-4 w-4 mr-1" />
                      Voir
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild className="flex-1">
                    <Link href={`/dashboard/livrets/${livret.id}/modifier`}>
                      <Edit className="h-4 w-4 mr-1" />
                      Modifier
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => window.open(livret.lien, "_blank")}>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => supprimerLivret(livret.id)}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
