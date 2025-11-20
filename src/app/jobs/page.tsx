import JobDrawer from "@/components/JobDrawer";

async function fetchJobs() {
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  if (!apiBase) throw new Error("Missing NEXT_PUBLIC_API_BASE_URL");
  if (!apiKey) throw new Error("Missing NEXT_PUBLIC_API_KEY");

  const res = await fetch(`${apiBase}/jobs`, {
    cache: "no-store",
    headers: {
      "x-api-key": apiKey,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch jobs");

  const data = await res.json();
  return Array.isArray(data.jobs) ? data.jobs : data;
}

function mapRowToJob(row: any[]) {
  return {
    id: row[0],
    customerName: row[2],
    phone: row[3],
    address: row[4],
    email: row[5],
    service: row[6],
    problem: row[7],
    urgency: row[8],
    preferredTime: row[9],
    technician: row[10],
    quote: row[11],
    notes: row[12],
    audioUrl: row[13],
    createdAt: row[14],
    transcript: row[15],
  };
}

export default async function JobsPage() {
  const jobs = (await fetchJobs()).map(mapRowToJob);
  return <JobDrawer jobs={jobs} />;
}
