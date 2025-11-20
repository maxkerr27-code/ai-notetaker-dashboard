"use client";

interface JobSummaryProps {
  jobs: any[];
}

export default function JobSummary({ jobs }: JobSummaryProps) {
  const now = new Date();

  const todayCount = jobs.filter((j) => {
    const created = new Date(j.createdAt);
    return created.toDateString() === now.toDateString();
  }).length;

  const unassigned = jobs.filter(
    (j) => !j.technician || j.technician.trim() === ""
  ).length;

  const urgent = jobs.filter((j) => {
    if (!j.urgency) return false;
    return j.urgency.toLowerCase().includes("urgent");
  }).length;

  const pendingQuote = jobs.filter(
    (j) => !j.quote || j.quote.trim() === ""
  ).length;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div className="p-5 bg-sky-600 rounded-xl shadow text-center">
        <p className="text-sm font-semibold opacity-90">New Today</p>
        <p className="text-4xl font-extrabold mt-1">{todayCount}</p>
      </div>
      <div className="p-5 bg-violet-600 rounded-xl shadow text-center">
        <p className="text-sm font-semibold opacity-90">Unassigned</p>
        <p className="text-4xl font-extrabold mt-1">{unassigned}</p>
      </div>
      <div className="p-5 bg-red-600 rounded-xl shadow text-center">
        <p className="text-sm font-semibold opacity-90">Urgent</p>
        <p className="text-4xl font-extrabold mt-1">{urgent}</p>
      </div>
      <div className="p-5 bg-amber-600 rounded-xl shadow text-center">
        <p className="text-sm font-semibold opacity-90">Pending Quotes</p>
        <p className="text-4xl font-extrabold mt-1">{pendingQuote}</p>
      </div>
    </div>
  );
}
