import type { Award, Id } from "@/interfaces";

async function API_GetAwards(): Promise<Award[] | null> {
  try {
    const response = await fetch(`http://localhost:3000/awards`);
    if (!response.ok) {
      return null;
    }
    const awards = await response.json();
    return awards;
  } catch (error) {
    console.error("Error fetching awards:", error);
    return null;
  }
}

async function API_GetAwardById(id: Id): Promise<Award | null> {
  try {
    const response = await fetch(`http://localhost:3000/awards/${id}`);
    if (!response.ok) {
      return null;
    }
    const award = await response.json();
    return award;
  } catch (error) {
    console.error("Error fetching award:", error);
    return null;
  }
}

async function API_GetAwardsByCompanyId(companyId: Id): Promise<Award[] | null> {
  try {
    const response = await fetch(`http://localhost:3000/awards`);
    if (!response.ok) {
      return null;
    }
    const awards = await response.json();
    const companyAwards = awards.filter(
      (award) => award.companyId === companyId
    );
    return companyAwards;
  } catch (error) {
    console.error("Error fetching awards:", error);
    return null;
  }
}

async function API_GetAwardsByProjectId(projectId: Id): Promise<Award[] | null> {
  try {
    const response = await fetch(`http://localhost:3000/awards`);
    if (!response.ok) {
      return null;
    }
    const awards = await response.json();
    const projectAwards = awards.filter(
      (award) => award.projectId === projectId
    );
    return projectAwards;
  } catch (error) {
    console.error("Error fetching awards:", error);
    return null;
  }
}

function FilterAwardsByCompanyId(awards: Award[], companyId: Id): Award[] {
  const companyAwards = awards.filter((award) => award.companyId === companyId);
  return companyAwards;
}

function CountAwardsByCompanyId(awards: Award[], companyId: Id): number {
  const companyAwards = awards.filter((award) => award.companyId === companyId);
  return companyAwards.length;
}

function FilterAwardsByProjectId(awards: Award[], projectId: Id): Award[] {
  const projectAwards = awards.filter((award) => award.projectId === projectId);
  return projectAwards;
}

function CountAwardsByProjectId(awards: Award[], projectId: Id): number {
  const projectAwards = awards.filter((award) => award.projectId === projectId);
  return projectAwards.length;
}

export {
  FilterAwardsByCompanyId,
  CountAwardsByCompanyId,
  FilterAwardsByProjectId,
  CountAwardsByProjectId,
  API_GetAwards,
  API_GetAwardById,
  API_GetAwardsByCompanyId,
  API_GetAwardsByProjectId,
};
