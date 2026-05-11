import type { Id, Job, LooseRecord } from "@/interfaces";

function FormatMonthYear(dateInput: string | Date | null): string {
  if (!dateInput) return "";

  const date = dateInput instanceof Date ? dateInput : new Date(dateInput);
  const now = new Date();

  if (date > now) {
    return "Present";
  }

  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long" };
  return date.toLocaleDateString(undefined, options);
}

function getEarliestDate(dates: Date[]): Date | null {
  if (!Array.isArray(dates) || dates.length === 0) return null;
  return new Date(Math.min(...dates.map((d) => d.getTime())));
}

function getLatestDate(dates: Date[]): Date | null {
  if (!Array.isArray(dates) || dates.length === 0) return null;
  return new Date(Math.max(...dates.map((d) => d.getTime())));
}

function EmploymentPeriod(jobs: Job[], companyId: Id): { from: Date | null; to: Date | null } | null {
  const companyJobs = jobs.filter((item) => item.companyId === companyId);

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

function FilterListByIds<T extends LooseRecord>(list: T[], ids: Id[] = []): T[] {
  if (!Array.isArray(list) || !ids.length) return [];
  return list.filter((item) => ids.includes(item.id));
}

export { FormatMonthYear, EmploymentPeriod, FilterListByIds };
