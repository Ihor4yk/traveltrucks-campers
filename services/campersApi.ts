import axios from "axios";
import { Camper, CampersResponse } from "@/types/camper";

const api = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

type GetCampersParams = {
  page?: number;
  limit?: number;
  location?: string;
  vehicleType?: string;
  equipment?: string[]; // масив рядків
};

type CampersQueryParams = {
  page: number;
  limit: number;
  location?: string;
  form?: string; // для vehicleType
} & Record<string, boolean>; // для equipment

export const getCampers = async ({
  page = 1,
  limit = 4,
  location,
  vehicleType,
  equipment,
}: GetCampersParams): Promise<{ items: Camper[]; total: number }> => {
  // Основні параметри
  const baseParams = {
    page,
    limit,
    ...(location ? { location } : {}),
    ...(vehicleType ? { form: vehicleType } : {}),
  };

  // Параметри для equipment
  const equipmentParams: Record<string, boolean> = {};
  if (equipment && equipment.length > 0) {
    equipment.forEach(eq => {
      equipmentParams[eq] = true;
    });
  }

  const params = { ...baseParams, ...equipmentParams };

  const { data } = await api.get<CampersResponse>("/campers", { params });

  return {
    items: data.items,
    total: data.total,
  };
};
