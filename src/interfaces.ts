import type {
  ComponentPropsWithoutRef,
  Dispatch,
  ReactNode,
  SetStateAction,
} from "react";

export type Id = number;

export type LooseRecord = Record<string, any>;

export interface AppChildren {
  children?: ReactNode;
}

export interface AppState {
  HeaderReady: boolean;
  setHeaderReady: Dispatch<SetStateAction<boolean>>;
  OutletReady: boolean;
  setOutletReady: Dispatch<SetStateAction<any>>;
  FooterReady: boolean;
  setFooterReady: Dispatch<SetStateAction<boolean>>;
  CurrentPath: string | null;
  setCurrentPath: Dispatch<SetStateAction<string | null>>;
}

export interface RouteChangeListenerProps {
  onPathChange: (_path: string) => void;
}

export interface MetaTagsProps {
  section: string;
  description: string;
  image: string;
  url: string;
}

export interface ProjectPageProps {
  projectId: Id;
}

export interface CompanyPageProps {
  companyId: Id;
}

export interface IconProps {
  children: ReactNode;
  className?: string;
}

export type DivProps = ComponentPropsWithoutRef<"div">;

export type SectionProps = ComponentPropsWithoutRef<"section">;

export interface Company extends LooseRecord {
  id: Id;
  name?: string;
  theme?: string;
}

export interface Project extends LooseRecord {
  id: Id;
  companyId?: Id;
  client?: string;
  name?: string;
}

export interface Award extends LooseRecord {
  id: Id;
  companyId?: Id;
  projectId?: Id;
}

export interface AwardComponentProps extends DivProps {
  Award: Award;
  Company?: Company;
  Project?: Project;
  links?: LooseRecord;
  companyButton?: boolean;
  projectButton?: boolean;
}

export interface Job extends LooseRecord {
  id: Id;
  companyId?: Id;
  dateFrom?: string;
  dateTo?: string;
}

export interface Tech extends LooseRecord {
  id: Id;
}

export interface Testimonial extends LooseRecord {
  id: Id;
  companyId?: Id;
}
