import { create } from "zustand";
import { Camper } from "@/types/camper";
import { getCampers } from "@/services/campersApi";

type Filters = {
  location: string;
  equipment: string[];
  vehicleType: string;
};

type CampersStore = {
  campers: Camper[];
  filters: Filters;
  page: number;
  isLoading: boolean;

  favorites: string[];

  setLocation: (value: string) => void;
  toggleEquipment: (value: string) => void;
  setVehicleType: (value: string) => void;

  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;

  fetchCampers: (reset?: boolean) => Promise<void>;
};

export const useCampersStore = create<CampersStore>((set, get) => ({
  campers: [],
  page: 1,
  isLoading: false,

  filters: {
    location: "",
    equipment: [],
    vehicleType: "",
  },

  favorites: typeof window !== "undefined" ? JSON.parse(localStorage.getItem("favorites") || "[]") : [],

  setLocation: value =>
    set(state => ({
      filters: { ...state.filters, location: value },
    })),

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

  setVehicleType: value =>
    set(state => ({
      filters: { ...state.filters, vehicleType: value },
    })),

  toggleFavorite: id =>
    set(state => {
      const updated = state.favorites.includes(id)
        ? state.favorites.filter(favId => favId !== id)
        : [...state.favorites, id];

      localStorage.setItem("favorites", JSON.stringify(updated));

      return { favorites: updated };
    }),

  isFavorite: id => get().favorites.includes(id),

  fetchCampers: async (reset = false) => {
    const { filters, page } = get();

    set({ isLoading: true });

    const data = await getCampers({
      location: filters.location,
      vehicleType: filters.vehicleType,
      equipment: filters.equipment,
      page: reset ? 1 : page,
    });

    set(state => ({
      campers: reset ? data.items : [...state.campers, ...data.items],
      page: reset ? 2 : state.page + 1,
      isLoading: false,
    }));
  },
}));
