import { Icon } from "../common/Icon/Icon";
import { FilterItem } from "../FilterItem/FilterItem";
import css from "./Filters.module.css";

export default function Filters() {
  return (
    <div className={css.filters}>
      <div className={css.block}>
        <label htmlFor="location" className={css.label}>
          Location
        </label>

        <div className={css.inputWrapper}>
          <input className={css.input} id="location" type="text" placeholder="City" />
          <Icon className={css.iconLocation} name="icon-map" />
        </div>
      </div>

      <p className={css.filtersTitle}>Filters</p>

      <div className={css.block}>
        <div className={css.subtitleWrapper}>
          <h3 className={css.subtitle}>Vehicle equipment</h3>
        </div>

        <ul className={css.grid}>
          <FilterItem icon="icon-ac" label="AC" />
          <FilterItem icon="icon-automatic" label="Automatic" />
          <FilterItem icon="icon-kitchen" label="Kitchen" />
          <FilterItem icon="icon-tv" label="TV" />
          <FilterItem icon="icon-bathroom" label="Bathroom" />
        </ul>
      </div>

      <div className={css.block}>
        <div className={css.subtitleWrapper}>
          <h3 className={css.subtitle}>Vehicle type</h3>
        </div>

        <ul className={css.grid}>
          <FilterItem icon="icon-van" label="Van" />
          <FilterItem icon="icon-fully-integrated" label="Fully Integrated" />
          <FilterItem icon="icon-alcove" label="Alcove" />
        </ul>
      </div>

      <button type="button" className={css.searchButton}>
        Search
      </button>
    </div>
  );
}
