import { useCampersStore } from "@/lib/store/campersStore";
import { Icon } from "../common/Icon/Icon";
import { FilterItem } from "../FilterItem/FilterItem";
import css from "./Filters.module.css";

export default function Filters() {
  const { filters, setTransmission, setLocation, toggleEquipment, setVehicleType, fetchCampers } = useCampersStore();
  const equipment = useCampersStore(s => s.filters.equipment);
  const vehicleType = useCampersStore(s => s.filters.vehicleType);

  return (
    <div className={css.filters}>
      <div className={css.block}>
        <label htmlFor="location" className={css.label}>
          Location
        </label>

        <div className={css.inputWrapper}>
          <input
            className={css.input}
            id="location"
            type="text"
            placeholder="City"
            onChange={e => setLocation(e.target.value)}
          />
          <Icon className={css.iconLocation} name="icon-map" />
        </div>
      </div>

      <p className={css.filtersTitle}>Filters</p>

      <div className={css.block}>
        <div className={css.subtitleWrapper}>
          <h3 className={css.subtitle}>Vehicle equipment</h3>
        </div>

        <ul className={css.grid}>
          <FilterItem
            icon="icon-ac"
            label="AC"
            active={equipment.includes("AC")}
            onClick={() => toggleEquipment("AC")}
          />
          <FilterItem
            icon="icon-automatic"
            label="Automatic"
            active={filters.transmission === "automatic"}
            onClick={() => setTransmission(filters.transmission === "automatic" ? undefined : "automatic")}
          />
          <FilterItem
            icon="icon-kitchen"
            label="Kitchen"
            active={equipment.includes("kitchen")}
            onClick={() => toggleEquipment("kitchen")}
          />
          <FilterItem
            icon="icon-tv"
            label="TV"
            active={equipment.includes("TV")}
            onClick={() => toggleEquipment("TV")}
          />
          <FilterItem
            icon="icon-bathroom"
            label="Bathroom"
            active={equipment.includes("bathroom")}
            onClick={() => toggleEquipment("bathroom")}
          />
        </ul>
      </div>

      <div className={css.block}>
        <div className={css.subtitleWrapper}>
          <h3 className={css.subtitle}>Vehicle type</h3>
        </div>

        <ul className={css.grid}>
          <FilterItem
            icon="icon-van"
            label="Van"
            active={vehicleType === "panelTruck"}
            onClick={() => setVehicleType(vehicleType === "panelTruck" ? "" : "panelTruck")}
          />
          <FilterItem
            icon="icon-fully-integrated"
            label="Fully Integrated"
            active={vehicleType === "fullyIntegrated"}
            onClick={() => setVehicleType(vehicleType === "fullyIntegrated" ? "" : "fullyIntegrated")}
          />
          <FilterItem
            icon="icon-alcove"
            label="Alcove"
            active={vehicleType === "alcove"}
            onClick={() => setVehicleType(vehicleType === "alcove" ? "" : "alcove")}
          />
        </ul>
      </div>

      <button type="button" className={css.searchButton} onClick={() => fetchCampers(true)}>
        Search
      </button>
    </div>
  );
}
