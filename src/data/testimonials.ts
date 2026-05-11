import type { Id, Testimonial } from "@/interfaces";
import { apiPath } from "@/data/api";

async function API_GetTestimonials(): Promise<Testimonial[] | null> {
  try {
    const response = await fetch(apiPath("/testimonials"));
    if (!response.ok) {
      return null;
    }
    const testimonialsList = await response.json();
    return testimonialsList;
  } catch (error) {
    console.error("Error fetching testimonials list:", error);
    return null;
  }
}

async function API_GetTestimonialById(id: Id): Promise<Testimonial | null> {
  try {
    const response = await fetch(apiPath(`/testimonials/${id}`));
    if (!response.ok) {
      return null;
    }
    const testimonial = await response.json();
    return testimonial;
  } catch (error) {
    console.error("Error fetching testimonial:", error);
    return null;
  }
}

async function API_GetTestimonialsByCompanyId(companyId: Id): Promise<Testimonial[] | null> {
  try {
    const response = await fetch(apiPath("/testimonials"));
    if (!response.ok) {
      return null;
    }
    const testimonials = await response.json();
    const companyTestimonials = testimonials.filter(
      (t) => t.companyId === companyId
    );
    return companyTestimonials;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return null;
  }
}

export {
  API_GetTestimonials,
  API_GetTestimonialById,
  API_GetTestimonialsByCompanyId,
};
