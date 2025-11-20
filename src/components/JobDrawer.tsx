"use client";
import { useState } from "react";

export default function JobDrawer({ jobs }: { jobs: any[] }) {
  const [selectedJob, setSelectedJob] = useState<any | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 p-8">
      <h1 className="text-3xl font-bold mb-8">AI Notetaker — Jobs</h1>

      {jobs.length === 0 ? (
        <p>No jobs found yet.</p>
      ) : (
        <table className="w-full border border-slate-800 text-sm">
          <thead className="bg-slate-900 text-slate-400">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Service</th>
              <th className="p-3">Preferred Time</th>
              <th className="p-3">Tech</th>
              <th className="p-3">Quote</th>
              <th className="p-3">Created</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr
                key={job.id}
                onClick={() => setSelectedJob(job)}
                className="border-b border-slate-800 hover:bg-slate-800 cursor-pointer"
              >
                <td className="p-3">{job.id}</td>
                <td className="p-3">{job.customerName}</td>
                <td className="p-3">{job.phone}</td>
                <td className="p-3">{job.service}</td>
                <td className="p-3">{job.preferredTime}</td>
                <td className="p-3">{job.technician}</td>
                <td className="p-3">{job.quote}</td>
                <td className="p-3 text-xs">{job.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {selectedJob && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center p-6">
          <div className="bg-slate-900 p-8 rounded-xl shadow-xl w-full max-w-xl">
            <h2 className="text-2xl font-bold mb-6">
              Job #{selectedJob.id} — {selectedJob.customerName}
            </h2>

            <div className="space-y-3 text-slate-300">
              <p><span className="font-semibold text-slate-200">Phone:</span> {selectedJob.phone}</p>
              <p><span className="font-semibold text-slate-200">Address:</span> {selectedJob.address}</p>
              <p><span className="font-semibold text-slate-200">Email:</span> {selectedJob.email}</p>
              <p><span className="font-semibold text-slate-200">Service:</span> {selectedJob.service}</p>
              <p><span className="font-semibold text-slate-200">Problem:</span> {selectedJob.problem}</p>
              <p><span className="font-semibold text-slate-200">Urgency:</span> {selectedJob.urgency}</p>
              <p><span className="font-semibold text-slate-200">Preferred Time:</span> {selectedJob.preferredTime}</p>
              <p><span className="font-semibold text-slate-200">Technician:</span> {selectedJob.technician || "Unassigned"}</p>
              <p><span className="font-semibold text-slate-200">Quote:</span> {selectedJob.quote}</p>
              <p><span className="font-semibold text-slate-200">Notes:</span> {selectedJob.notes}</p>
              <p><span className="font-semibold text-slate-200">Created:</span> {selectedJob.createdAt}</p>

              {selectedJob.audioUrl && (
                <audio controls className="w-full mt-2">
                  <source src={selectedJob.audioUrl} type="audio/mpeg" />
                </audio>
              )}

              {selectedJob.transcript && (
                <div className="mt-4 p-3 bg-slate-800 rounded-lg text-sm text-slate-200 max-h-60 overflow-y-auto">
                  <p className="font-semibold text-slate-100 mb-2">Transcript:</p>
                  {selectedJob.transcript}
                </div>
              )}
            </div>

            <button
              onClick={() => setSelectedJob(null)}
              className="mt-6 w-full bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
