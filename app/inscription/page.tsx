"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

export default function InscriptionPage() {
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
}
