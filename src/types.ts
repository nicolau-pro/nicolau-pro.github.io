import type { ReactNode } from "react";

export type Id = number | string;

export type AppChildren = {
  children?: ReactNode;
};

export type LooseRecord = Record<string, any>;

export type Company = LooseRecord & {
  id: Id;
  name?: string;
  theme?: string;
};

export type Project = LooseRecord & {
  id: Id;
  companyId?: Id;
  client?: string;
  name?: string;
};

export type Award = LooseRecord & {
  id: Id;
  companyId?: Id;
  projectId?: Id;
};

export type Job = LooseRecord & {
  id: Id;
  companyId?: Id;
  dateFrom?: string;
  dateTo?: string;
};

export type Tech = LooseRecord & {
  id: Id;
};

export type Testimonial = LooseRecord & {
  id: Id;
  companyId?: Id;
};
