import { GetJobsByCompanyId } from "./jobs";

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

function EmploymentPeriod(companyId) {
  console.log(companyId);

  const jobs = GetJobsByCompanyId(companyId);
  console.log(jobs);

  const fromDates = jobs.map((job) => new Date(job.dateFrom));
  console.log(fromDates);

  const toDates = jobs.map((job) => new Date(job.dateTo));
  console.log(toDates);

  if (!jobs || jobs.length === 0) {
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
