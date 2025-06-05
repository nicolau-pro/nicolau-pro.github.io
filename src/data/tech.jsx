async function API_GetTech() {
  try {
    const response = await fetch(`http://localhost:3000/tech`);
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

async function API_GetTechById(id) {
  try {
    const response = await fetch(`http://localhost:3000/tech/${id}`);
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
