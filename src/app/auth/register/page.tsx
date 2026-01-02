"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Lock, User } from "lucide-react"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters")
      return
    }

    setIsLoading(true)
    // Handle registration logic here
    setTimeout(() => setIsLoading(false), 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-main)] p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[var(--text-heading)] mb-2">Workly</h1>
          <p className="text-[var(--text-muted)]">Your job search platform</p>
        </div>

        <Card className="border-[var(--border-default)] bg-[var(--bg-card)] shadow-lg">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl text-[var(--text-heading)]">Create Account</CardTitle>
            <CardDescription className="text-[var(--text-body)]">
              Join Workly and start your job search journey
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[var(--text-body)]">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-5 w-5 text-[var(--text-muted)]" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10 border-[var(--border-input)] bg-[var(--bg-section)] text-[var(--text-heading)] placeholder:text-[var(--text-muted)] focus-visible:ring-[var(--primary)]"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[var(--text-body)]">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-[var(--text-muted)]" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 border-[var(--border-input)] bg-[var(--bg-section)] text-[var(--text-heading)] placeholder:text-[var(--text-muted)] focus-visible:ring-[var(--primary)]"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-[var(--text-body)]">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-[var(--text-muted)]" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10 border-[var(--border-input)] bg-[var(--bg-section)] text-[var(--text-heading)] placeholder:text-[var(--text-muted)] focus-visible:ring-[var(--primary)]"
                    required
                  />
                </div>
                <p className="text-xs text-[var(--text-muted)]">
                  Must be at least 8 characters
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-[var(--text-body)]">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-[var(--text-muted)]" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="pl-10 border-[var(--border-input)] bg-[var(--bg-section)] text-[var(--text-heading)] placeholder:text-[var(--text-muted)] focus-visible:ring-[var(--primary)]"
                    required
                  />
                </div>
              </div>

              {error && (
                <div className="p-3 bg-[var(--error)]/20 border border-[var(--error)]/50 rounded-md text-[var(--error)] text-sm">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-semibold h-10"
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>

            <div className="mt-6 space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[var(--border-default)]"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-[var(--bg-card)] text-[var(--text-muted)]">
                    Already have an account?
                  </span>
                </div>
              </div>

              <Link href="/auth/login">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-[var(--border-default)] text-[var(--text-heading)] hover:bg-[var(--bg-section)]"
                >
                  Sign In
                </Button>
              </Link>
            </div>

            <p className="text-center text-xs text-[var(--text-muted)] mt-4">
              By creating an account, you agree to our{" "}
              <a href="#" className="text-[var(--primary)] hover:text-[var(--primary-hover)]">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-[var(--primary)] hover:text-[var(--primary-hover)]">
                Privacy Policy
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
