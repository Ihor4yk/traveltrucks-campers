import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Camper } from "@/types/camper";
import { getCampers } from "@/services/campersApi";

type EquipmentKey = keyof Pick<
  Camper,
  "AC" | "kitchen" | "TV" | "bathroom" | "radio" | "refrigerator" | "microwave" | "gas" | "water"
>;

interface Filters {
  location: string;
  equipment: EquipmentKey[];
  vehicleType: Camper["form"] | "";
}

interface CampersStore {
  campers: Camper[];
  filters: Filters;
  page: number;
  total: number;
  favorites: string[];
  isLoading: boolean;
  isLoadingMore: boolean;
  hasSearched: boolean;

  setLocation: (value: string) => void;
  toggleEquipment: (value: EquipmentKey) => void;
  setVehicleType: (value: Camper["form"] | "") => void;

  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;

  fetchCampers: (reset?: boolean) => Promise<void>;
}

export const useCampersStore = create<CampersStore>()(
  persist(
    (set, get) => ({
      campers: [],
      page: 1,
      total: 0,
      isLoading: false,
      isLoadingMore: false,
      hasSearched: false,

      filters: {
        location: "",
        equipment: [],
        vehicleType: "",
      },

      favorites: [],

      setLocation: value => set(state => ({ filters: { ...state.filters, location: value } })),

      toggleEquipment: value =>
        set(state => {
          const exists = state.filters.equipment.includes(value);
          return {
            filters: {
              ...state.filters,
              equipment: exists
                ? state.filters.equipment.filter(v => v !== value)
                : [...state.filters.equipment, value],
            },
          };
        }),

      setVehicleType: value => set(state => ({ filters: { ...state.filters, vehicleType: value } })),

      toggleFavorite: id =>
        set(state => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter(favId => favId !== id)
            : [...state.favorites, id],
        })),

      isFavorite: id => get().favorites.includes(id),

      fetchCampers: async (reset = false) => {
        const { filters, page } = get();

        if (reset) {
          set({ isLoading: true });
        } else {
          set({ isLoadingMore: true });
        }

        const nextPage = reset ? 1 : page;

        const data = await getCampers({
          page: nextPage,
          limit: 4,
          location: filters.location,
          vehicleType: filters.vehicleType,
          equipment: filters.equipment,
        });

        set(state => ({
          campers: reset ? data.items : [...state.campers, ...data.items],
          page: nextPage + 1,
          total: data.total,
          isLoading: false,
          isLoadingMore: false,
          hasSearched: reset && data.items.length === 0,
        }));
      },
    }),
    {
      name: "campers-store",
      partialize: state => ({ favorites: state.favorites }),
    },
  ),
);
