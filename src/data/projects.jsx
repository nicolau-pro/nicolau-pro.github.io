async function API_GetProjects() {
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

async function API_GetProjectById(id) {
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

function FilterProjectsByCompanyId(projects, companyId) {
  return projects.filter((project) => project.companyId === companyId);
}

function CountProjectsByCompanyId(projects, companyId) {
  return projects.filter((project) => project.companyId === companyId).length;
}

function ProjectPath(project) {
  const slug = `${project.client} ${project.name}`
    .normalize("NFD") // decompose accented letters
    .replace(/[\u0300-\u036f]/g, "") // remove diacritic marks
    .toLowerCase()
    .replace(/['"]/g, "") // remove quotes
    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumerics with dashes
    .replace(/^-+|-+$/g, ""); // trim leading/trailing dashes

  return slug;
}

export {
  FilterProjectsByCompanyId,
  CountProjectsByCompanyId,
  ProjectPath,
  API_GetProjectById,
  API_GetProjects,
};
