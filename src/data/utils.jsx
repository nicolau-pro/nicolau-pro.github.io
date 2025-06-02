import { GetJobsByCompanyId } from "./jobs";

function MonthYear(monthYearObject) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${months[monthYearObject.month - 1]} ${monthYearObject.year}`;
}

function EmploymentPeriod(companyId) {
  const jobs = GetJobsByCompanyId(companyId);
  // console.log(jobs);

  if (!jobs || jobs.length === 0) {
    return null;
  }

  const jobDatesArray = jobs.map((job) => ({
    from: job.dates.from,
    to: job.dates.to,
  }));

  const earliestStart = jobDatesArray.reduce((earliest, current) => {
    const currentStart = new Date(current.from.year, current.from.month - 1);
    return currentStart < earliest ? currentStart : earliest;
  }, new Date(jobDatesArray[0].from.year, jobDatesArray[0].from.month - 1));

  const latestEnd = jobDatesArray.reduce((latest, current) => {
    const currentEnd = new Date(current.to.year, current.to.month - 1);
    return currentEnd > latest ? currentEnd : latest;
  }, new Date(jobDatesArray[0].to.year, jobDatesArray[0].to.month - 1));

  return {
    from: {
      month: earliestStart.getMonth() + 1,
      year: earliestStart.getFullYear(),
    },
    to: {
      month: latestEnd.getMonth() + 1,
      year: latestEnd.getFullYear(),
    },
  };
}

export { MonthYear, EmploymentPeriod };
