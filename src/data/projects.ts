import type { Id, Project } from "../types";

async function API_GetProjects(): Promise<Project[] | null> {
  try {
    const response = await fetch(`http://localhost:3000/projects`);
    if (!response.ok) {
      return null;
    }
    const projectList = await response.json();
    return projectList;
  } catch (error) {
    console.error("Error fetching project list:", error);
    return null;
  }
}

async function API_GetProjectById(id: Id): Promise<Project | null> {
  try {
    const response = await fetch(`http://localhost:3000/projects/${id}`);
    if (!response.ok) {
      return null;
    }
    const project = await response.json();
    return project;
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}

function FilterProjectsByCompanyId(projects: Project[], companyId: Id): Project[] {
  return projects.filter((project) => project.companyId === companyId);
}

function CountProjectsByCompanyId(projects: Project[], companyId: Id): number {
  return projects.filter((project) => project.companyId === companyId).length;
}

function ProjectPath(project: Project): string {
  const slug = `${project.client} ${project.name}`
    .normalize("NFD") // decompose accented letters
    .replace(/[\u0300-\u036f]/g, "") // remove diacritic marks
    .toLowerCase()
    .replace(/['"]/g, "") // remove quotes
    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumerics with dashes
    .replace(/^-+|-+$/g, ""); // trim leading/trailing dashes

  return slug;
}

function FilterProjectsFirstWithCompanyId(items: Project[]): Project[] {
  const seen = new Set();

  return items.filter((item) => {
    if (seen.has(item.companyId)) {
      return false;
    }
    seen.add(item.companyId);
    return true;
  });
}

function FindProjectById(projects: Project[], projectId: Id): Project | undefined {
  const project = projects.find((project) => project.id === projectId);
  return project;
}

export {
  FilterProjectsFirstWithCompanyId,
  FilterProjectsByCompanyId,
  FindProjectById,
  CountProjectsByCompanyId,
  ProjectPath,
  API_GetProjectById,
  API_GetProjects,
};
