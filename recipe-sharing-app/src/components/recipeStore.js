import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  searchQuery: '',
  recommendations: [],

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { ...recipe, id: Date.now().toString() }],
    })),

  updateRecipe: (id, updated) =>
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === id ? { ...r, ...updated } : r)),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  setSearchQuery: (query) => set({ searchQuery: query }),

  toggleFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.includes(id)
        ? state.favorites.filter((favId) => favId !== id)
        : [...state.favorites, id],
    })),

  generateRecommendations: () =>
    set((state) => ({
      recommendations: state.recipes
        .filter((r) => !state.favorites.includes(r.id))
        .slice(0, 3),
    })),
}));
