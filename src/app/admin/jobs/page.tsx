"use client"

import { useState } from "react"
import { Plus, Search, Edit2, Trash2, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function JobsPage() {
  const [jobs] = useState([
    {
      id: 1,
      title: "Senior React Developer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      salary: "$120K - $150K",
      status: "Active",
      applicants: 24,
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "Creative Studio",
      location: "New York, NY",
      salary: "$90K - $120K",
      status: "Active",
      applicants: 18,
      posted: "1 week ago",
    },
    {
      id: 3,
      title: "Backend Engineer",
      company: "StartUp Inc",
      location: "Remote",
      salary: "$100K - $140K",
      status: "Draft",
      applicants: 0,
      posted: "3 days ago",
    },
    {
      id: 4,
      title: "Product Manager",
      company: "Scale Up",
      location: "Boston, MA",
      salary: "$110K - $160K",
      status: "Active",
      applicants: 32,
      posted: "1 day ago",
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "AI Solutions",
      location: "Remote",
      salary: "$130K - $170K",
      status: "Active",
      applicants: 42,
      posted: "5 days ago",
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
            Jobs
          </h1>
          <p className="text-[var(--text-body)]">
            Manage all job postings and applicants
          </p>
        </div>
        <Button className="bg-[var(--primary)] hover:bg-[#1D4ED8] text-white font-semibold w-full md:w-auto">
          <Plus className="w-4 h-4 mr-2" />
          Post New Job
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="bg-[var(--bg-card)] rounded-lg p-4 border border-[var(--border-default)]">
        <div className="relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-[var(--text-muted)]" />
          <Input
            placeholder="Search jobs by title or company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-[var(--border-default)] bg-[var(--bg-section)] text-[var(--text-heading)] placeholder:text-[var(--text-muted)]"
          />
        </div>
      </div>

      {/* Jobs Table */}
      <div className="bg-[var(--bg-card)] rounded-lg border border-[var(--border-default)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--border-default)] bg-[var(--bg-section)]">
                <th className="text-left py-4 px-6 font-semibold text-[var(--text-heading)]">
                  Job Title
                </th>
                <th className="text-left py-4 px-6 font-semibold text-[var(--text-heading)]">
                  Company
                </th>
                <th className="text-left py-4 px-6 font-semibold text-[var(--text-heading)]">
                  Location
                </th>
                <th className="text-left py-4 px-6 font-semibold text-[var(--text-heading)]">
                  Salary
                </th>
                <th className="text-left py-4 px-6 font-semibold text-[var(--text-heading)]">
                  Status
                </th>
                <th className="text-left py-4 px-6 font-semibold text-[var(--text-heading)]">
                  Applicants
                </th>
                <th className="text-left py-4 px-6 font-semibold text-[var(--text-heading)]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <tr
                    key={job.id}
                    className="border-b border-[var(--border-default)] hover:bg-[var(--bg-section)] transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-semibold text-[var(--text-heading)]">
                          {job.title}
                        </p>
                        <p className="text-xs text-[var(--text-muted)]">
                          Posted {job.posted}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-[var(--text-body)]">
                      {job.company}
                    </td>
                    <td className="py-4 px-6 text-[var(--text-body)]">
                      {job.location}
                    </td>
                    <td className="py-4 px-6 text-[var(--text-body)]">
                      {job.salary}
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                          job.status
                        )}`}
                      >
                        {job.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-semibold text-[var(--text-heading)]">
                        {job.applicants}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-blue-100 rounded-lg transition-colors text-blue-600">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-yellow-100 rounded-lg transition-colors text-yellow-600">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-red-100 rounded-lg transition-colors text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-[var(--text-muted)]">
                    No jobs found
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
