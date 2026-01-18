"use client";

import CamperCard from "@/components/CamperCard/CamperCard";
import Filters from "@/components/Filters/Filters";
import css from "./CatalogPage.module.css";
import { useCampersStore } from "@/lib/store/campersStore";
import React from "react";

export default function CatalogPage() {
  const { campers, fetchCampers, toggleFavorite, total, isLoading, isLoadingMore, hasSearched, favorites } =
    useCampersStore(state => state);

  React.useEffect(() => {
    fetchCampers(true);
  }, [fetchCampers]);

  return (
    <div className={css.container}>
      {/* Show only loader during initial loading */}
      {isLoading ? (
        <div className={css.loaderWrapper}>
          <div className={css.loader}></div>
        </div>
      ) : (
        <>
          <Filters />

          <div className={css.cardsWrapper}>
            {/* Empty state */}
            {hasSearched && campers.length === 0 && (
              <div className={css.emptyState}>
                <h3>No campers found</h3>
                <p>Try changing your filters</p>
              </div>
            )}

            {/* Cards */}
            {campers.length > 0 && (
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
            )}

            {/* Load More */}
            {campers.length > 0 && campers.length < total && (
              <div className={css.loadMoreWrapper}>
                {isLoadingMore ? (
                  <div className={css.loader}></div>
                ) : (
                  <button className={css.loadMoreButton} onClick={() => fetchCampers(false)}>
                    Load More
                  </button>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
