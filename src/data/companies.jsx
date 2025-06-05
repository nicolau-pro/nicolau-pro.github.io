async function API_GetCompanyById(id) {
  try {
    const response = await fetch(`http://localhost:3000/companies/${id}`);
    if (!response.ok) {
      return null;
    }
    const company = await response.json();
    return company;
  } catch (error) {
    console.error("Error fetching company:", error);
    return null;
  }
}

async function API_GetCompanies() {
  try {
    const response = await fetch(`http://localhost:3000/companies`);
    if (!response.ok) {
      return null;
    }
    const company = await response.json();
    return company;
  } catch (error) {
    console.error("Error fetching companies:", error);
    return null;
  }
}

export { API_GetCompanyById, API_GetCompanies };
