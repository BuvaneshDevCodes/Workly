"use client"

import { useState } from "react"
import { Plus, Search, Edit2, Trash2, Shield, Ban } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function UsersPage() {
  const [users] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      role: "Job Seeker",
      status: "Active",
      joinDate: "2 months ago",
      applications: 5,
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike@example.com",
      role: "Recruiter",
      status: "Active",
      joinDate: "3 months ago",
      applications: 12,
    },
    {
      id: 3,
      name: "Emma Davis",
      email: "emma@example.com",
      role: "Job Seeker",
      status: "Active",
      joinDate: "1 month ago",
      applications: 3,
    },
    {
      id: 4,
      name: "Alex Rodriguez",
      email: "alex@example.com",
      role: "Job Seeker",
      status: "Inactive",
      joinDate: "2 weeks ago",
      applications: 1,
    },
    {
      id: 5,
      name: "Lisa Anderson",
      email: "lisa@example.com",
      role: "Recruiter",
      status: "Active",
      joinDate: "1 week ago",
      applications: 8,
    },
    {
      id: 6,
      name: "John Williamson",
      email: "john@example.com",
      role: "Job Seeker",
      status: "Active",
      joinDate: "3 days ago",
      applications: 2,
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [filterRole, setFilterRole] = useState("All")

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = filterRole === "All" || user.role === filterRole
    return matchesSearch && matchesRole
  })

  const getRoleColor = (role: string) => {
    return role === "Recruiter"
      ? "bg-blue-100 text-blue-700"
      : "bg-green-100 text-green-700"
  }

  const getStatusColor = (status: string) => {
    return status === "Active"
      ? "bg-green-100 text-green-700"
      : "bg-gray-100 text-gray-700"
  }

  return (
    <div className="space-y-6 animate-fadeInUp">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[var(--text-heading)] mb-2">
            Users
          </h1>
          <p className="text-[var(--text-body)]">
            Manage user accounts and permissions
          </p>
        </div>
        <Button className="bg-[var(--primary)] hover:bg-[#1D4ED8] text-white font-semibold w-full md:w-auto">
          <Plus className="w-4 h-4 mr-2" />
          Add User
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[var(--bg-card)] rounded-lg p-4 border border-[var(--border-default)]">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-[var(--text-muted)]" />
            <Input
              placeholder="Search users by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-[var(--border-default)] bg-[var(--bg-section)] text-[var(--text-heading)] placeholder:text-[var(--text-muted)]"
            />
          </div>
        </div>

        <div className="bg-[var(--bg-card)] rounded-lg p-4 border border-[var(--border-default)]">
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="w-full px-4 py-2 border border-[var(--border-default)] rounded-lg bg-[var(--bg-section)] text-[var(--text-heading)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          >
            <option value="All">All Roles</option>
            <option value="Job Seeker">Job Seeker</option>
            <option value="Recruiter">Recruiter</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-[var(--bg-card)] rounded-lg border border-[var(--border-default)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--border-default)] bg-[var(--bg-section)]">
                <th className="text-left py-4 px-6 font-semibold text-[var(--text-heading)]">
                  Name
                </th>
                <th className="text-left py-4 px-6 font-semibold text-[var(--text-heading)]">
                  Email
                </th>
                <th className="text-left py-4 px-6 font-semibold text-[var(--text-heading)]">
                  Role
                </th>
                <th className="text-left py-4 px-6 font-semibold text-[var(--text-heading)]">
                  Status
                </th>
                <th className="text-left py-4 px-6 font-semibold text-[var(--text-heading)]">
                  Join Date
                </th>
                <th className="text-left py-4 px-6 font-semibold text-[var(--text-heading)]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-[var(--border-default)] hover:bg-[var(--bg-section)] transition-colors"
                  >
                    <td className="py-4 px-6">
                      <p className="font-semibold text-[var(--text-heading)]">
                        {user.name}
                      </p>
                    </td>
                    <td className="py-4 px-6 text-[var(--text-body)]">
                      {user.email}
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getRoleColor(
                          user.role
                        )}`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                          user.status
                        )}`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-[var(--text-body)]">
                      {user.joinDate}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-blue-100 rounded-lg transition-colors text-blue-600">
                          <Shield className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-yellow-100 rounded-lg transition-colors text-yellow-600">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-red-100 rounded-lg transition-colors text-red-600">
                          <Ban className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-[var(--text-muted)]">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
