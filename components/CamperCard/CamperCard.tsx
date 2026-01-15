"use client";

import Link from "next/link";
import styles from "./CamperCard.module.css";
import { Camper } from "@/types/camper";
import { Icon } from "../common/Icon/Icon";

interface CamperCardProps {
  camper: Camper;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

export default function CamperCard({ camper, isFavorite, onToggleFavorite }: CamperCardProps) {
  const {
    id,
    name,
    price,
    rating,
    location,
    description,
    gallery,
    reviews,
    transmission,
    engine,
    AC,
    kitchen,
    TV,
    bathroom,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  } = camper;

  return (
    <article className={styles.card}>
      {/* IMAGE */}
      <img src={gallery?.[0]?.thumb || "/placeholder.jpg"} alt={name} className={styles.image} />

      <div className={styles.content}>
        {/* HEADER */}
        <header className={styles.header}>
          <h2 className={styles.title}>{name}</h2>

          <div className={styles.priceBox}>
            <span className={styles.price}>€{price.toFixed(2)}</span>

            <button
              type="button"
              onClick={() => onToggleFavorite(id)}
              className={`${styles.favorite} ${isFavorite ? styles.active : ""}`}
              aria-label="Add to favorites"
            >
              <Icon name={"icon-like"} className={styles.favoriteIcon} />
            </button>
          </div>
        </header>

        {/* META */}
        <div className={styles.meta}>
          <span className={styles.rating}>
            <Icon name="icon-rating" className={styles.ratingIcon} />
            {rating} ({reviews.length} Reviews)
          </span>

          <span className={styles.location}>
            <Icon name="icon-map" className={styles.mapIcon} />
            {location}
          </span>
        </div>

        {/* DESCRIPTION */}
        <p className={styles.description}>{description}</p>

        {/* FEATURES */}
        <ul className={styles.features}>
          {transmission && (
            <li className={styles.featureItem}>
              <Icon name="icon-automatic" className={styles.featureIcon} />
              {capitalize(transmission)}
            </li>
          )}

          {engine && (
            <li className={styles.featureItem}>
              <Icon name="icon-petrol" className={styles.featureIcon} />
              {capitalize(engine)}
            </li>
          )}

          {AC && (
            <li className={styles.featureItem}>
              <Icon name="icon-ac" className={styles.featureIcon} />
              AC
            </li>
          )}

          {bathroom && (
            <li className={styles.featureItem}>
              <Icon name="icon-bathroom" className={styles.featureIcon} />
              Bathroom
            </li>
          )}

          {kitchen && (
            <li className={styles.featureItem}>
              <Icon name="icon-kitchen" className={styles.featureIcon} />
              Kitchen
            </li>
          )}

          {TV && (
            <li className={styles.featureItem}>
              <Icon name="icon-tv" className={styles.featureIcon} />
              TV
            </li>
          )}

          {radio && (
            <li className={styles.featureItem}>
              <Icon name="icon-radio" className={styles.featureIcon} />
              Radio
            </li>
          )}

          {refrigerator && (
            <li className={styles.featureItem}>
              <Icon name="icon-refrigerator" className={styles.featureIcon} />
              Refrigerator
            </li>
          )}

          {microwave && (
            <li className={styles.featureItem}>
              <Icon name="icon-microwave" className={styles.featureIcon} />
              Microwave
            </li>
          )}

          {gas && (
            <li className={styles.featureItem}>
              <Icon name="icon-gas" className={styles.featureIcon} />
              Gas
            </li>
          )}

          {water && (
            <li className={styles.featureItem}>
              <Icon name="icon-water" className={styles.featureIcon} />
              Water
            </li>
          )}
        </ul>

        {/* ACTION */}
        <Link href={`/catalog/${id}`} className={styles.showMore}>
          Show more
        </Link>
      </div>
    </article>
  );
}
