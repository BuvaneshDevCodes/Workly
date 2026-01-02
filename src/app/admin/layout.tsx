import type { Metadata } from "next"
import { Sidebar } from "@/components/sidebar/sidebar"
import "../globals.css"

export const metadata: Metadata = {
  title: "Admin Dashboard - Workly",
  description: "Manage your job listings and user accounts",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-[var(--bg-main)]">
      <Sidebar />
      <main className="flex-1 overflow-auto md:ml-64">
        <div className="p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
