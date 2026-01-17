import { Camper } from "@/types/camper";
import css from "./Features.module.css";
import { Icon } from "../common/Icon/Icon";

interface FeaturesProps {
  camper: Camper;
}

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

export default function Features({ camper }: FeaturesProps) {
  const {
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
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = camper;

  return (
    <div className={css.featuresContainer}>
      <ul className={css.amenitiesList}>
        {transmission && (
          <li className={css.featureItem}>
            <Icon className={css.featureIcon} name="icon-automatic" /> {capitalize(transmission)}
          </li>
        )}
        {engine && (
          <li className={css.featureItem}>
            <Icon className={css.featureIcon} name="icon-petrol" /> {capitalize(engine)}
          </li>
        )}
        {AC && (
          <li className={css.featureItem}>
            <Icon className={css.featureIcon} name="icon-ac" /> AC
          </li>
        )}
        {bathroom && (
          <li className={css.featureItem}>
            <Icon className={css.featureIcon} name="icon-bathroom" /> Bathroom
          </li>
        )}
        {kitchen && (
          <li className={css.featureItem}>
            <Icon className={css.featureIcon} name="icon-kitchen" /> Kitchen
          </li>
        )}
        {TV && (
          <li className={css.featureItem}>
            <Icon className={css.featureIcon} name="icon-tv" /> TV
          </li>
        )}
        {radio && (
          <li className={css.featureItem}>
            <Icon className={css.featureIcon} name="icon-radio" /> Radio
          </li>
        )}
        {refrigerator && (
          <li className={css.featureItem}>
            <Icon className={css.featureIcon} name="icon-refrigerator" /> Refrigerator
          </li>
        )}
        {microwave && (
          <li className={css.featureItem}>
            <Icon name="icon-microwave" /> Microwave
          </li>
        )}
        {gas && (
          <li className={css.featureItem}>
            <Icon name="icon-gas" /> Gas
          </li>
        )}
        {water && (
          <li className={css.featureItem}>
            <Icon className={css.featureIcon} name="icon-water" /> Water
          </li>
        )}
      </ul>

      <h3 className={css.title}>Vehicle details</h3>
      <div className={css.line} />

      <ul className={css.specsList}>
        {form && (
          <li className={css.specsItem}>
            <span className={css.label}>Form:</span>
            <span className={css.value}>{form}</span>
          </li>
        )}
        {length && (
          <li className={css.specsItem}>
            <span className={css.label}>Length:</span>
            <span className={css.value}>{length}</span>
          </li>
        )}
        {width && (
          <li className={css.specsItem}>
            <span className={css.label}>Width:</span>
            <span className={css.value}>{width}</span>
          </li>
        )}
        {height && (
          <li className={css.specsItem}>
            <span className={css.label}>Height:</span>
            <span className={css.value}>{height}</span>
          </li>
        )}
        {tank && (
          <li className={css.specsItem}>
            <span className={css.label}>Tank:</span>
            <span className={css.value}>{tank}</span>
          </li>
        )}
        {consumption && (
          <li className={css.specsItem}>
            <span className={css.label}>Consumption:</span>
            <span className={css.value}>{consumption}</span>
          </li>
        )}
      </ul>
    </div>
  );
}
