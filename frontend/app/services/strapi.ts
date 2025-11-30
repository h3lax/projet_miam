import type { Recette, StrapiListResponse } from '@/types/strapi';

export const strapi = {
  async getRecettes(): Promise<StrapiListResponse<Recette>> {
    const config = useRuntimeConfig(); // ✅ call inside function
    const apiUrl = config.public.strapiBaseUrl;
    
    console.log("Using Strapi API URL:", apiUrl);

    return await $fetch(`${apiUrl}/api/recettes`, { // note /api prefix for Strapi v4
      params: { populate: '*' }
    });
  },

  async getRecette(id: number) {
    const config = useRuntimeConfig();
    const apiUrl = config.public.strapiBaseUrl;

    return await $fetch(`${apiUrl}/api/recettes/${id}`, {
      params: { populate: '*' }
    });
  }
};
