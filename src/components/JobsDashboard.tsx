"use client";

import { useState } from "react";
import JobSummary from "@/components/JobSummary";

export default function JobsDashboard({ jobs }: { jobs: any[] }) {
  const [menu, setMenu] = useState("jobs");

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-50">

      {/* 🔹 Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6 space-y-6">
        <h2 className="text-2xl font-bold mb-6 tracking-tight">AI Notetaker</h2>

        <nav className="space-y-3">
          {["dashboard", "jobs", "technicians", "calendar", "billing", "settings"].map((item) => (
            <button
              key={item}
              className={`block w-full text-left px-3 py-2 rounded-lg transition ${
                menu === item ? "bg-slate-700 font-semibold" : "hover:bg-slate-800"
              }`}
              onClick={() => setMenu(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </nav>
      </aside>

      {/* 🔹 Main content */}
      <main className="flex-1 p-10">
        {/* Top bar */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight">
            {menu.charAt(0).toUpperCase() + menu.slice(1)}
          </h1>

          <div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center cursor-pointer hover:bg-slate-500">
            MK
          </div>
        </div>

        {/* ➡️ Dashboard (JobSummary cards) */}
        {menu === "dashboard" && (
          <div>
            <JobSummary jobs={jobs} />
            <p className="mt-6 text-slate-400 text-lg">Welcome back — here’s what needs attention today.</p>
          </div>
        )}

        {/* ➡️ Jobs (professional card list) */}
        {menu === "jobs" && (
          <div>
            <JobSummary jobs={jobs} />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-slate-600 transition cursor-pointer"
                >
                  <h3 className="font-semibold text-xl mb-2">{job.customerName}</h3>
                  <p className="text-slate-400 text-sm mb-4">{job.service}</p>

                  <div className="space-y-1 text-sm text-slate-300">
                    <p>📞 {job.phone}</p>
                    <p>📍 {job.address}</p>
                    <p>⏰ {job.preferredTime}</p>
                  </div>

                  <div className="mt-4 flex justify-between text-sm">
                    <span className="bg-slate-800 px-3 py-1 rounded-lg">
                      {job.technician || "Unassigned"}
                    </span>
                    <span className="bg-slate-800 px-3 py-1 rounded-lg">
                      {job.quote ? `$${job.quote}` : "No Quote"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ➡️ Placeholder pages for now */}
        {menu !== "dashboard" && menu !== "jobs" && (
          <div className="text-slate-400 text-lg">
            {menu.charAt(0).toUpperCase() + menu.slice(1)} page coming soon.
          </div>
        )}
      </main>
    </div>
  );
}
