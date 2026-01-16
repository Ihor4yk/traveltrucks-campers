import { create } from "zustand";
import { Camper } from "@/types/camper";
import { getCampers } from "@/services/campersApi";

type EquipmentKey = keyof Pick<
  Camper,
  "AC" | "kitchen" | "TV" | "bathroom" | "radio" | "refrigerator" | "microwave" | "gas" | "water"
>;

type Filters = {
  location: string;
  equipment: EquipmentKey[];
  vehicleType: Camper["form"] | "";
};

type CampersStore = {
  campers: Camper[];
  filters: Filters;
  page: number;
  isLoading: boolean;
  total: number;
  favorites: string[];

  setLocation: (value: string) => void;
  toggleEquipment: (value: EquipmentKey) => void;
  setVehicleType: (value: Camper["form"] | "") => void;

  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;

  fetchCampers: (reset?: boolean) => Promise<void>;
};

export const useCampersStore = create<CampersStore>((set, get) => ({
  campers: [],
  page: 1,
  isLoading: false,
  total: 0,

  filters: {
    location: "",
    equipment: [],
    vehicleType: "",
  },

  favorites: typeof window !== "undefined" ? JSON.parse(localStorage.getItem("favorites") || "[]") : [],

  setLocation: value => set(state => ({ filters: { ...state.filters, location: value } })),
  toggleEquipment: value =>
    set(state => {
      const exists = state.filters.equipment.includes(value);
      return {
        filters: {
          ...state.filters,
          equipment: exists ? state.filters.equipment.filter(v => v !== value) : [...state.filters.equipment, value],
        },
      };
    }),
  setVehicleType: value => set(state => ({ filters: { ...state.filters, vehicleType: value } })),

  toggleFavorite: id => {
    set(state => {
      const updated = state.favorites.includes(id)
        ? state.favorites.filter(favId => favId !== id)
        : [...state.favorites, id];
      localStorage.setItem("favorites", JSON.stringify(updated));
      return { favorites: updated };
    });
  },
  isFavorite: id => get().favorites.includes(id),

  fetchCampers: async (reset = false) => {
    const { filters, page } = get();
    set({ isLoading: true });

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
    }));
  },
}));
