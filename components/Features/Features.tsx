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
            <Icon className={css.featureIcon} name="icon-microwave" /> Microwave
          </li>
        )}
        {gas && (
          <li className={css.featureItem}>
            <Icon className={css.featureIcon} name="icon-gas" /> Gas
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
            <p className={css.label}>Form:</p>
            <p className={css.value}>{form}</p>
          </li>
        )}
        {length && (
          <li className={css.specsItem}>
            <p className={css.label}>Length:</p>
            <p className={css.value}>{length}</p>
          </li>
        )}
        {width && (
          <li className={css.specsItem}>
            <p className={css.label}>Width:</p>
            <p className={css.value}>{width}</p>
          </li>
        )}
        {height && (
          <li className={css.specsItem}>
            <p className={css.label}>Height:</p>
            <p className={css.value}>{height}</p>
          </li>
        )}
        {tank && (
          <li className={css.specsItem}>
            <p className={css.label}>Tank:</p>
            <p className={css.value}>{tank}</p>
          </li>
        )}
        {consumption && (
          <li className={css.specsItem}>
            <p className={css.label}>Consumption:</p>
            <p className={css.value}>{consumption}</p>
          </li>
        )}
      </ul>
    </div>
  );
}
