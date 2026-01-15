"use client";

import React, { useEffect } from "react";
import CamperCard from "@/components/CamperCard/CamperCard";
import Filters from "@/components/Filters/Filters";
import { Camper } from "@/types/camper";
import css from "./CatalogPage.module.css";

// тимчасово — пізніше заміниш на Zustand
import { getCampers } from "@/services/campersApi";

export default function CatalogPage() {
  const [campers, setCampers] = React.useState<Camper[]>([]);
  const [favorites, setFavorites] = React.useState<string[]>([]);

  useEffect(() => {
    async function fetchCampers() {
      const data = await getCampers();
      setCampers(data.items);
    }

    fetchCampers();
  }, []);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => (prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]));
  };

  return (
    <div className={css.container}>
      <Filters />

      <section className={css.section}>
        {campers.map(camper => (
          <CamperCard
            key={camper.id}
            camper={camper}
            isFavorite={favorites.includes(camper.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </section>
    </div>
  );
}
