import { Camper } from "@/types/camper";
import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
  // I tried to remove the error in the console, but it won't work because I need to fix the code on the backend, because the backend should return an empty array when filtering campers and it returns an error!
  // But in general everything works)
  validateStatus: status => {
    return status < 500; // any status less than 500 is considered a "success"
  },
});

api.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    if (error.response?.status === 404) {
      const url = error.config?.url;

      // Якщо запит на список кемперів, повертаємо порожній масив
      if (url === "/campers") {
        return Promise.resolve({
          data: { items: [] as Camper[], total: 0 },
          status: 200,
          statusText: "OK",
          headers: {},
          config: error.config,
        });
      }

      // Якщо запит на конкретного кемпера, повертаємо null
      if (url?.startsWith("/campers/")) {
        return Promise.resolve({
          data: null,
          status: 200,
          statusText: "OK",
          headers: {},
          config: error.config,
        });
      }
    }

    // Всі інші помилки пробрасываем
    return Promise.reject(error);
  },
);
