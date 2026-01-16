"use client";

import CamperCard from "@/components/CamperCard/CamperCard";
import Filters from "@/components/Filters/Filters";
import css from "./CatalogPage.module.css";
import { useCampersStore } from "@/lib/store/campersStore";
import React from "react";

export default function CatalogPage() {
  const campers = useCampersStore(s => s.campers ?? []);
  // const campers = useCampersStore(s => s.campers);
  const fetchCampers = useCampersStore(s => s.fetchCampers);
  const toggleFavorite = useCampersStore(s => s.toggleFavorite);
  const isFavorite = useCampersStore(s => s.isFavorite);
  const isLoading = useCampersStore(s => s.isLoading);
  const total = useCampersStore(s => s.total);

  React.useEffect(() => {
    fetchCampers(true);
  }, [fetchCampers]);

  return (
    <div className={css.container}>
      <Filters />

      <div className={css.cardsWrapper}>
        {campers.length === 0 && isLoading ? (
          <div className={css.loaderWrapper}>
            <div className={css.loader}></div>
          </div>
        ) : (
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
        )}

        {campers.length > 0 && campers.length < total && (
          <div className={css.loadMoreWrapper}>
            {isLoading ? (
              <div className={css.loader}></div>
            ) : (
              <button className={css.loadMoreButton} onClick={() => fetchCampers(false)}>
                Load More
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
