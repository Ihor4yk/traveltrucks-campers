import { Camper, CampersResponse, GetCampersParams } from "@/types/camper";
import { api } from "./api";

export const getCampers = async ({
  page = 1,
  limit = 4,
  location,
  vehicleType,
  equipment,
  transmission,
}: GetCampersParams): Promise<{ items: Camper[]; total: number }> => {
  const baseParams = {
    page,
    limit,
    ...(location ? { location } : {}),
    ...(vehicleType ? { form: vehicleType } : {}),
    ...(transmission ? { transmission } : {}),
  };

  const equipmentParams: Record<string, boolean> = {};
  if (equipment?.length) {
    equipment.forEach(eq => {
      equipmentParams[eq] = true;
    });
  }

  const params = { ...baseParams, ...equipmentParams };

  const { data } = await api.get<CampersResponse>("/campers", { params });

  return {
    items: data.items || [],
    total: data.total || 0,
  };
};

export const getCamperById = async (id: string): Promise<Camper | null> => {
  const { data } = await api.get<Camper | null>(`/campers/${id}`);
  return data;
};
