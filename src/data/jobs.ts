import type { Id, Job } from "@/interfaces";
import { apiPath } from "@/data/api";

async function API_GetJobById(id: Id): Promise<Job | null> {
  try {
    const response = await fetch(apiPath(`/jobs/${id}`));
    if (!response.ok) {
      return null;
    }
    const job = await response.json();
    return job;
  } catch (error) {
    console.error("Error fetching job:", error);
    return null;
  }
}

async function API_GetJobs(): Promise<Job[] | null> {
  try {
    const response = await fetch(apiPath("/jobs"));
    if (!response.ok) {
      return null;
    }
    const jobs = await response.json();
    return jobs;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return null;
  }
}

async function API_GetJobsByCompanyId(companyId: Id): Promise<Job[] | null> {
  try {
    const response = await fetch(apiPath("/jobs"));
    if (!response.ok) {
      return null;
    }
    const jobs = await response.json();
    const companyJobs = jobs.filter((job) => job.companyId === companyId);
    return companyJobs;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return null;
  }
}

export { API_GetJobs, API_GetJobById, API_GetJobsByCompanyId };
