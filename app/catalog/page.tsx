"use client";

import CamperCard from "@/components/CamperCard/CamperCard";
import Filters from "@/components/Filters/Filters";
import css from "./CatalogPage.module.css";
import { useCampersStore } from "@/lib/store/campersStore";

export default function CatalogPage() {
  const campers = useCampersStore(s => s.campers);
  const toggleFavorite = useCampersStore(s => s.toggleFavorite);
  const isFavorite = useCampersStore(s => s.isFavorite);

  return (
    <div className={css.container}>
      <Filters />

      <section className={css.section}>
        {campers.map(camper => (
          <CamperCard
            key={camper.id}
            camper={camper}
            isFavorite={isFavorite(camper.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </section>
    </div>
  );
}
