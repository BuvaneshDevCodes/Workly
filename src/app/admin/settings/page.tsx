"use client"

import { useState } from "react"
import { Save, Bell, Lock, Globe, Palette, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    siteName: "Workly",
    siteEmail: "admin@workly.com",
    siteDomain: "workly.com",
    maxJobsPerMonth: "100",
  })

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    jobApplications: true,
    userRegistrations: true,
    systemUpdates: false,
  })

  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="space-y-6 animate-fadeInUp">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-[var(--text-heading)] mb-2">
          Settings
        </h1>
        <p className="text-[var(--text-body)]">
          Configure system settings and preferences
        </p>
      </div>

      {/* Success Message */}
      {saved && (
        <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-lg animate-fadeInUp">
          ✓ Settings saved successfully
        </div>
      )}

      {/* General Settings */}
      <Card className="border-[var(--border-default)] bg-[var(--bg-card)]">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-[var(--primary)]" />
            <div>
              <CardTitle className="text-[var(--text-heading)]">
                General Settings
              </CardTitle>
              <CardDescription className="text-[var(--text-body)]">
                Configure your platform settings
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-[var(--text-body)]">Platform Name</Label>
            <Input
              value={formData.siteName}
              onChange={(e) =>
                setFormData({ ...formData, siteName: e.target.value })
              }
              className="border-[var(--border-default)] bg-[var(--bg-section)] text-[var(--text-heading)] placeholder:text-[var(--text-muted)]"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-[var(--text-body)]">Email Address</Label>
            <Input
              type="email"
              value={formData.siteEmail}
              onChange={(e) =>
                setFormData({ ...formData, siteEmail: e.target.value })
              }
              className="border-[var(--border-default)] bg-[var(--bg-section)] text-[var(--text-heading)] placeholder:text-[var(--text-muted)]"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-[var(--text-body)]">Domain</Label>
            <Input
              value={formData.siteDomain}
              onChange={(e) =>
                setFormData({ ...formData, siteDomain: e.target.value })
              }
              className="border-[var(--border-default)] bg-[var(--bg-section)] text-[var(--text-heading)] placeholder:text-[var(--text-muted)]"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-[var(--text-body)]">
              Max Jobs Per Month
            </Label>
            <Input
              type="number"
              value={formData.maxJobsPerMonth}
              onChange={(e) =>
                setFormData({ ...formData, maxJobsPerMonth: e.target.value })
              }
              className="border-[var(--border-default)] bg-[var(--bg-section)] text-[var(--text-heading)] placeholder:text-[var(--text-muted)]"
            />
          </div>
          <Button
            onClick={handleSave}
            className="w-full bg-[var(--primary)] hover:bg-[#1D4ED8] text-white font-semibold mt-6"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </CardContent>
      </Card>

      {/* Email Notifications */}
      <Card className="border-[var(--border-default)] bg-[var(--bg-card)]">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-[var(--primary)]" />
            <div>
              <CardTitle className="text-[var(--text-heading)]">
                Notifications
              </CardTitle>
              <CardDescription className="text-[var(--text-body)]">
                Manage email notification preferences
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              id: "emailAlerts",
              label: "Email Alerts",
              description: "Receive email notifications for important events",
            },
            {
              id: "jobApplications",
              label: "Job Applications",
              description: "Get notified when new applications are received",
            },
            {
              id: "userRegistrations",
              label: "User Registrations",
              description: "Receive alerts for new user sign-ups",
            },
            {
              id: "systemUpdates",
              label: "System Updates",
              description: "Get notified about system maintenance and updates",
            },
          ].map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 rounded-lg bg-[var(--bg-section)]">
              <div>
                <p className="font-medium text-[var(--text-heading)]">
                  {item.label}
                </p>
                <p className="text-sm text-[var(--text-muted)]">
                  {item.description}
                </p>
              </div>
              <input
                type="checkbox"
                checked={notifications[item.id as keyof typeof notifications]}
                onChange={(e) =>
                  setNotifications({
                    ...notifications,
                    [item.id]: e.target.checked,
                  })
                }
                className="w-5 h-5 rounded cursor-pointer accent-[var(--primary)]"
              />
            </div>
          ))}
          <Button
            onClick={handleSave}
            variant="outline"
            className="w-full border-[var(--border-default)] text-[var(--text-heading)] hover:bg-[var(--bg-section)] font-semibold mt-6"
          >
            Update Notifications
          </Button>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card className="border-[var(--border-default)] bg-[var(--bg-card)]">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-[var(--primary)]" />
            <div>
              <CardTitle className="text-[var(--text-heading)]">
                Security
              </CardTitle>
              <CardDescription className="text-[var(--text-body)]">
                Manage security settings and access control
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            variant="outline"
            className="w-full border-[var(--border-default)] text-[var(--text-heading)] hover:bg-[var(--bg-section)] font-semibold"
          >
            Change Password
          </Button>
          <Button
            variant="outline"
            className="w-full border-[var(--border-default)] text-[var(--text-heading)] hover:bg-[var(--bg-section)] font-semibold"
          >
            Enable Two-Factor Authentication
          </Button>
          <Button
            variant="outline"
            className="w-full border-[var(--border-default)] text-[var(--text-heading)] hover:bg-[var(--bg-section)] font-semibold"
          >
            Manage API Keys
          </Button>
        </CardContent>
      </Card>

      {/* Backup & Database */}
      <Card className="border-[var(--border-default)] bg-[var(--bg-card)]">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-[var(--primary)]" />
            <div>
              <CardTitle className="text-[var(--text-heading)]">
                Database
              </CardTitle>
              <CardDescription className="text-[var(--text-body)]">
                Manage backups and database operations
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-[var(--bg-section)] rounded-lg border border-[var(--border-default)]">
            <p className="text-sm font-medium text-[var(--text-heading)] mb-2">
              Last Backup
            </p>
            <p className="text-sm text-[var(--text-muted)]">
              2 hours ago • Size: 2.4 GB
            </p>
          </div>
          <Button className="w-full bg-[var(--primary)] hover:bg-[#1D4ED8] text-white font-semibold">
            Create Backup
          </Button>
          <Button
            variant="outline"
            className="w-full border-[var(--border-default)] text-[var(--text-heading)] hover:bg-[var(--bg-section)] font-semibold"
          >
            Restore from Backup
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
