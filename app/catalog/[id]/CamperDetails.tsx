"use client";

import { useState } from "react";
import Image from "next/image";
import { Camper } from "@/types/camper";
import css from "./CamperDetails.module.css";
import { Icon } from "../../../components/common/Icon/Icon";
import Tabs from "@/components/Tabs/Tabs";
import Features from "@/components/Features/Features";
import Reviews from "@/components/Reviews/Reviews";

interface CamperDetailsProps {
  camper: Camper | null;
}

export default function CamperDetails({ camper }: CamperDetailsProps) {
  const [activeTab, setActiveTab] = useState<"features" | "reviews">("features");

  if (!camper) return <p>Camper not found</p>;

  const { name, rating = 0, reviews = [], price = 0, gallery = [], description = "", location } = camper;

  return (
    <div className={css.container}>
      <div className={css.block}>
        <h2 className={css.title}>{name}</h2>

        <div className={css.meta}>
          <div className={css.rating}>
            <Icon name="icon-rating" className={css.ratingIcon} />
            <p className={css.ratingText}>
              {rating} ({reviews.length} Reviews)
            </p>
          </div>
          <div className={css.location}>
            <Icon name="icon-map" className={css.mapIcon} />
            <p className={css.locationText}>{location}</p>
          </div>
        </div>

        <p className={css.price}>€{price.toFixed(2)}</p>
      </div>
      <section className={css.gallery}>
        {gallery.length ? (
          gallery.map((img, idx) => (
            <div key={idx} className={css.imageWrapper}>
              <Image
                src={img.original || img.thumb || "/placeholder.jpg"}
                alt={`${name} ${idx + 1}`}
                fill
                className={css.image}
              />
            </div>
          ))
        ) : (
          <Image src="/placeholder.jpg" alt="No image" width={292} height={312} />
        )}
      </section>
      <p className={css.description}>{description}</p>

      <Tabs activeTab={activeTab} onChange={setActiveTab} />
      {activeTab === "features" && <Features camper={camper} />}
      {activeTab === "reviews" && <Reviews reviews={reviews} />}
    </div>
  );
}
