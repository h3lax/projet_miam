import { strapi } from '@/services/strapi';
import type { StrapiListResponse, Recette } from '@/types/strapi';

export function useRecettes() {
  const recettes = ref<StrapiListResponse<Recette> | null>(null);
  const loading = ref(true);
  const error = ref<unknown>(null);

  const fetchRecettes = async () => {
    try {
      console.log("on try ...")
      loading.value = true;
      recettes.value = await strapi.getRecettes();
      console.log("recttes récupérées : ", recettes.value)
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return {
    recettes,
    loading,
    error,
    fetchRecettes
  };
}
