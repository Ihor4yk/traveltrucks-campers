import { Camper, CampersResponse } from "@/types/camper";
import { api } from "./api";

interface GetCampersParams {
  page?: number;
  limit?: number;
  location?: string;
  vehicleType?: string;
  equipment?: string[];
}

export const getCampers = async ({
  page = 1,
  limit = 4,
  location,
  vehicleType,
  equipment,
}: GetCampersParams): Promise<{ items: Camper[]; total: number }> => {
  const baseParams = {
    page,
    limit,
    ...(location ? { location } : {}),
    ...(vehicleType ? { form: vehicleType } : {}),
  };

  const equipmentParams: Record<string, boolean> = {};
  if (equipment && equipment.length > 0) {
    equipment.forEach(eq => {
      equipmentParams[eq] = true;
    });
  }

  const params = { ...baseParams, ...equipmentParams };

  const { data = { items: [], total: 0 } } = await api.get<CampersResponse>("/campers", { params });

  return {
    items: data.items || [],
    total: data.total || 0,
  };
};
