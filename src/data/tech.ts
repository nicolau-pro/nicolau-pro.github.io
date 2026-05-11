import type { Id, Tech } from "@/interfaces";
import { apiPath } from "@/data/api";

async function API_GetTech(): Promise<Tech[] | null> {
  try {
    const response = await fetch(apiPath("/tech"));
    if (!response.ok) {
      return null;
    }
    const techList = await response.json();
    return techList;
  } catch (error) {
    console.error("Error fetching tech list:", error);
    return null;
  }
}

async function API_GetTechById(id: Id): Promise<Tech | null> {
  try {
    const response = await fetch(apiPath(`/tech/${id}`));
    if (!response.ok) {
      return null;
    }
    const tech = await response.json();
    return tech;
  } catch (error) {
    console.error("Error fetching tech:", error);
    return null;
  }
}

export { API_GetTechById, API_GetTech };
