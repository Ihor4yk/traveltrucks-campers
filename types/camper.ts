export interface CamperGalleryItem {
  thumb: string;
  original: string;
}

export interface CamperReview {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;

  // Details
  form: "alcove" | "fullyIntegrated" | "panelTruck";
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;

  // Features
  transmission: "automatic" | "manual";
  engine: "diesel" | "petrol" | "electric" | "hybrid";
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;

  gallery: CamperGalleryItem[];
  reviews: CamperReview[];
}

export interface CampersResponse {
  total: number;
  items: Camper[];
}
