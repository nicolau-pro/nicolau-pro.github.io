async function API_GetTestimonials() {
  try {
    const response = await fetch(`http://localhost:3000/testimonials`);
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

async function API_GetTestimonialById(id) {
  try {
    const response = await fetch(`http://localhost:3000/testimonials/${id}`);
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

async function API_GetTestimonialsByCompanyId(companyId) {
  try {
    const response = await fetch(`http://localhost:3000/testimonials`);
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
