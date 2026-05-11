import type { Company, Id } from "@/interfaces";
import { apiPath } from "@/data/api";

async function API_GetCompanies(): Promise<Company[] | null> {
  try {
    const response = await fetch(apiPath("/companies"));
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

async function API_GetCompanyById(id: Id): Promise<Company | null> {
  try {
    const response = await fetch(apiPath(`/companies/${id}`));
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

function FindCompanyById(companies: Company[], companyId: Id): Company | undefined {
  const company = companies.find((company) => company.id === companyId);
  return company;
}

export { FindCompanyById, API_GetCompanies, API_GetCompanyById };
