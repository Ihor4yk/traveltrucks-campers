"use client";

import Link from "next/link";
import css from "./CamperCard.module.css";
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
    <article className={css.card}>
      <img src={gallery?.[0]?.thumb || "/placeholder.jpg"} alt={name} className={css.image} />

      <div className={css.content}>
        <header className={css.header}>
          <h2 className={css.title}>{name}</h2>

          <div className={css.priceBox}>
            <span className={css.price}>€{price.toFixed(2)}</span>

            <button
              type="button"
              onClick={() => onToggleFavorite(id)}
              className={`${css.favorite} ${isFavorite ? css.active : ""}`}
              aria-label="Add to favorites"
            >
              <Icon name={"icon-like"} className={css.favoriteIcon} />
            </button>
          </div>
        </header>

        <div className={css.meta}>
          <span className={css.rating}>
            <Icon name="icon-rating" className={css.ratingIcon} />
            {rating} ({reviews.length} Reviews)
          </span>

          <span className={css.location}>
            <Icon name="icon-map" className={css.mapIcon} />
            {location}
          </span>
        </div>

        <p className={css.description}>{description}</p>

        <ul className={css.features}>
          {transmission && (
            <li className={css.featureItem}>
              <Icon name="icon-automatic" className={css.featureIcon} />
              {capitalize(transmission)}
            </li>
          )}

          {engine && (
            <li className={css.featureItem}>
              <Icon name="icon-petrol" className={css.featureIcon} />
              {capitalize(engine)}
            </li>
          )}

          {AC && (
            <li className={css.featureItem}>
              <Icon name="icon-ac" className={css.featureIcon} />
              AC
            </li>
          )}

          {bathroom && (
            <li className={css.featureItem}>
              <Icon name="icon-bathroom" className={css.featureIcon} />
              Bathroom
            </li>
          )}

          {kitchen && (
            <li className={css.featureItem}>
              <Icon name="icon-kitchen" className={css.featureIcon} />
              Kitchen
            </li>
          )}

          {TV && (
            <li className={css.featureItem}>
              <Icon name="icon-tv" className={css.featureIcon} />
              TV
            </li>
          )}

          {radio && (
            <li className={css.featureItem}>
              <Icon name="icon-radio" className={css.featureIcon} />
              Radio
            </li>
          )}

          {refrigerator && (
            <li className={css.featureItem}>
              <Icon name="icon-refrigerator" className={css.featureIcon} />
              Refrigerator
            </li>
          )}

          {microwave && (
            <li className={css.featureItem}>
              <Icon name="icon-microwave" className={css.featureIcon} />
              Microwave
            </li>
          )}

          {gas && (
            <li className={css.featureItem}>
              <Icon name="icon-gas" className={css.featureIcon} />
              Gas
            </li>
          )}

          {water && (
            <li className={css.featureItem}>
              <Icon name="icon-water" className={css.featureIcon} />
              Water
            </li>
          )}
        </ul>

        <Link href={`/catalog/${id}`} className={css.showMore}>
          Show more
        </Link>
      </div>
    </article>
  );
}
