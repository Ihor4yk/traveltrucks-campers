import axios from "axios";
import { CampersResponse } from "@/types/camper";

const api = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

export async function getCampers(): Promise<CampersResponse> {
  const { data } = await api.get<CampersResponse>("/campers");
  return data;
}
