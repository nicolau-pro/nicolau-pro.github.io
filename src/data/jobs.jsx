async function API_GetJobById(id) {
  try {
    const response = await fetch(`http://localhost:3000/jobs/${id}`);
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

async function API_GetJobs() {
  try {
    const response = await fetch(`http://localhost:3000/jobs`);
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

async function API_GetJobsByCompanyId(companyId) {
  try {
    const response = await fetch(`http://localhost:3000/jobs`);
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
