"use client"

import type React from "react"
import { useState, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function InscriptionForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const plan = searchParams.get("plan") || "gratuit"
  const { toast } = useToast()
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (password !== confirmPassword) {
      toast({
        title: "Erreur",
        description: "Les mots de passe ne correspondent pas.",
        variant: "destructive",
      })
      return
    }
    
    setIsLoading(true)

    try {
      // Simulation d'inscription
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast({
        title: "Compte créé avec succès",
        description: "Vous êtes maintenant inscrit et connecté.",
      })
      
      router.push("/dashboard/livrets")
    } catch (error) {
      toast({
        title: "Erreur d'inscription",
        description: "Un problème est survenu lors de la création de votre compte.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignup = async () => {
    setIsLoading(true)
    
    try {
      // Simulation d'inscription Google
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast({
        title: "Compte créé avec succès",
        description: "Vous êtes maintenant inscrit avec Google.",
      })
      
      router.push("/dashboard/livrets")
    } catch (error) {
      toast({
        title: "Erreur d'inscription",
        description: "Un problème est survenu avec l'inscription Google.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Inscription {plan === "pro" ? "Pro" : "Gratuite"}</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>
        
        <div>
          <Input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>
        
        <div>
          <Input
            type="password"
            placeholder="Confirmer le mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>
        
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Inscription en cours..." : "S'inscrire"}
        </Button>
      </form>
      
      <div className="mt-4">
        <Button
          variant="outline"
          onClick={handleGoogleSignup}
          className="w-full"
          disabled={isLoading}
        >
          Continuer avec Google
        </Button>
      </div>
    </div>
  )
}

export default function InscriptionPage() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <InscriptionForm />
    </Suspense>
  )
}
