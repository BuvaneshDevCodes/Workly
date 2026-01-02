"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Lock } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call and then redirect to admin dashboard
    setTimeout(() => {
      setIsLoading(false)
      router.push("/admin")
    }, 1500)
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
            <CardTitle className="text-2xl text-[var(--text-heading)]">Welcome Back</CardTitle>
            <CardDescription className="text-[var(--text-body)]">
              Sign in to your account to continue
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[var(--text-body)]">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-[var(--text-muted)]" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 border-[var(--border-input)] bg-[var(--bg-section)] text-[var(--text-heading)] placeholder:text-[var(--text-muted)] focus-visible:ring-[var(--primary)]"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-semibold h-10"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[var(--border-default)]"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-[var(--bg-card)] text-[var(--text-muted)]">
                    Don't have an account?
                  </span>
                </div>
              </div>

              <Link href="/auth/register">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-[var(--border-default)] text-[var(--text-heading)] hover:bg-[var(--bg-section)]"
                >
                  Create Account
                </Button>
              </Link>
            </div>

            <p className="text-center text-sm text-[var(--text-muted)] mt-4">
              <a href="#" className="text-[var(--primary)] hover:text-[var(--primary-hover)]">
                Forgot password?
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
