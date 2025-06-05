function FormatMonthYear(dateString) {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long" };
  return date.toLocaleDateString(undefined, options);
}

function getEarliestDate(dates) {
  if (!Array.isArray(dates) || dates.length === 0) return null;
  return new Date(Math.min(...dates.map((d) => d.getTime())));
}

function getLatestDate(dates) {
  if (!Array.isArray(dates) || dates.length === 0) return null;
  return new Date(Math.max(...dates.map((d) => d.getTime())));
}

function EmploymentPeriod(jobs, companyId) {
  const companyJobs = jobs.filter((item) => item.companyId === companyId);
  console.log(companyJobs, companyId);

  const fromDates = companyJobs.map((job) => new Date(job.dateFrom));
  const toDates = companyJobs.map((job) => new Date(job.dateTo));

  if (!companyJobs || companyJobs.length === 0) {
    return null;
  }

  return {
    from: getEarliestDate(fromDates),
    to: getLatestDate(toDates),
  };
}

function FilterListByIds(list, ids = []) {
  if (!Array.isArray(list) || !ids.length) return [];
  return list.filter((item) => ids.includes(item.id));
}

export { FormatMonthYear, EmploymentPeriod, FilterListByIds };
