"use client"

import { useState } from "react"
import {
  BarChart3,
  Users,
  Briefcase,
  TrendingUp,
  Eye,
  MousePointerClick,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AdminDashboard() {
  const [stats] = useState([
    {
      label: "Total Jobs",
      value: "2,543",
      change: "+12.5%",
      icon: Briefcase,
      color: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      label: "Active Users",
      value: "12,847",
      change: "+8.2%",
      icon: Users,
      color: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      label: "Total Views",
      value: "54,231",
      change: "+23.1%",
      icon: Eye,
      color: "bg-purple-100",
      textColor: "text-purple-600",
    },
    {
      label: "Conversions",
      value: "8,932",
      change: "+5.7%",
      icon: MousePointerClick,
      color: "bg-orange-100",
      textColor: "text-orange-600",
    },
  ])

  const [recentApplications] = useState([
    { id: 1, name: "Sarah Johnson", position: "Senior Developer", status: "Pending", date: "2 hours ago" },
    { id: 2, name: "Mike Chen", position: "Product Manager", status: "Reviewing", date: "5 hours ago" },
    { id: 3, name: "Emma Davis", position: "UI Designer", status: "Approved", date: "1 day ago" },
    { id: 4, name: "Alex Rodriguez", position: "Data Scientist", status: "Rejected", date: "2 days ago" },
    { id: 5, name: "Lisa Anderson", position: "Backend Engineer", status: "Pending", date: "3 days ago" },
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-700"
      case "Pending":
        return "bg-yellow-100 text-yellow-700"
      case "Reviewing":
        return "bg-blue-100 text-blue-700"
      case "Rejected":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="space-y-8 animate-fadeInUp">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-[var(--text-heading)] mb-2">
          Dashboard
        </h1>
        <p className="text-[var(--text-body)]">
          Welcome back! Here's your performance overview.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div
              key={index}
              className="animate-slideInLeft bg-[var(--bg-card)] rounded-lg p-6 border border-[var(--border-default)] hover:shadow-md transition-all"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <div
                  className={`${stat.color} p-3 rounded-lg`}
                >
                  <Icon className={`w-6 h-6 ${stat.textColor}`} />
                </div>
                <span className="text-green-600 text-sm font-semibold">
                  {stat.change}
                </span>
              </div>
              <p className="text-[var(--text-muted)] text-sm mb-1">
                {stat.label}
              </p>
              <p className="text-2xl font-bold text-[var(--text-heading)]">
                {stat.value}
              </p>
            </div>
          )
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Section */}
        <div className="lg:col-span-2 animate-slideInLeft bg-[var(--bg-card)] rounded-lg p-6 border border-[var(--border-default)]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-[var(--text-heading)]">
              Performance Overview
            </h2>
            <button className="text-[var(--text-muted)] hover:text-[var(--text-body)] transition-colors">
              <BarChart3 className="w-5 h-5" />
            </button>
          </div>

          {/* Chart Placeholder */}
          <div className="h-64 bg-[var(--bg-section)] rounded-lg flex items-center justify-center border border-dashed border-[var(--border-default)]">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-[var(--text-muted)] mx-auto mb-3" />
              <p className="text-[var(--text-muted)]">Chart visualization</p>
            </div>
          </div>

          {/* Chart Details */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            {[
              { label: "Week", value: "45.2K" },
              { label: "Month", value: "125.8K" },
              { label: "Year", value: "2.4M" },
            ].map((item, index) => (
              <div key={index} className="text-center p-3 bg-[var(--bg-section)] rounded-lg">
                <p className="text-[var(--text-muted)] text-sm mb-1">{item.label}</p>
                <p className="text-lg font-bold text-[var(--text-heading)]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="animate-slideInRight bg-[var(--bg-card)] rounded-lg p-6 border border-[var(--border-default)]">
          <h2 className="text-xl font-bold text-[var(--text-heading)] mb-4">
            Quick Actions
          </h2>

          <div className="space-y-3">
            <Button className="w-full bg-[var(--primary)] hover:bg-[#1D4ED8] text-white font-semibold transition-all">
              Post New Job
            </Button>
            <Button
              variant="outline"
              className="w-full border-[var(--border-default)] text-[var(--text-heading)] hover:bg-[var(--bg-section)] transition-all"
            >
              View All Users
            </Button>
            <Button
              variant="outline"
              className="w-full border-[var(--border-default)] text-[var(--text-heading)] hover:bg-[var(--bg-section)] transition-all"
            >
              Generate Report
            </Button>
            <Button
              variant="outline"
              className="w-full border-[var(--border-default)] text-[var(--text-heading)] hover:bg-[var(--bg-section)] transition-all"
            >
              Settings
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="mt-6 pt-6 border-t border-[var(--border-default)]">
            <h3 className="font-semibold text-[var(--text-heading)] mb-4">
              System Status
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-[var(--text-body)]">Server</span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs font-medium text-green-600">Operational</span>
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-[var(--text-body)]">Database</span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs font-medium text-green-600">Optimal</span>
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-[var(--text-body)]">API</span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs font-medium text-green-600">Active</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Applications */}
      <div className="animate-fadeInUp bg-[var(--bg-card)] rounded-lg p-6 border border-[var(--border-default)]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-[var(--text-heading)]">
            Recent Applications
          </h2>
          <Button
            variant="outline"
            className="border-[var(--border-default)] text-[var(--text-heading)] hover:bg-[var(--bg-section)] text-sm"
          >
            View All
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--border-default)]">
                <th className="text-left py-3 px-4 font-semibold text-[var(--text-heading)]">
                  Applicant
                </th>
                <th className="text-left py-3 px-4 font-semibold text-[var(--text-heading)]">
                  Position
                </th>
                <th className="text-left py-3 px-4 font-semibold text-[var(--text-heading)]">
                  Status
                </th>
                <th className="text-left py-3 px-4 font-semibold text-[var(--text-heading)]">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {recentApplications.map((app) => (
                <tr
                  key={app.id}
                  className="border-b border-[var(--border-default)] hover:bg-[var(--bg-section)] transition-colors"
                >
                  <td className="py-3 px-4">
                    <p className="font-medium text-[var(--text-heading)]">
                      {app.name}
                    </p>
                  </td>
                  <td className="py-3 px-4 text-[var(--text-body)]">
                    {app.position}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        app.status
                      )}`}
                    >
                      {app.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-[var(--text-muted)] text-sm">
                    {app.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
