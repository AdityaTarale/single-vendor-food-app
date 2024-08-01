import {
  persist,
  createJSONStorage,
  create,
  zustandStorage,
} from '../../core/storageManager';
import {StrapiCategory} from '../../types/category';

export interface CategoryState {
  category: StrapiCategory[];
  setCategory: (categoryData: StrapiCategory[]) => void;
  clearCategory: () => void;
}

export const useCategoryStore = create<CategoryState>()(
  persist(
    set => ({
      category: [] as StrapiCategory[],
      setCategory: categoryData => set({category: categoryData}),
      clearCategory: () => set({category: [] as StrapiCategory[]}),
    }),
    {
      name: 'category',
      storage: createJSONStorage(() => zustandStorage), // Assuming `zustandStorage` is just `localStorage`
    },
  ),
);

// Usage example:
// const { category, setCategory, clearCategory } = useCategoryStore();
