import { Icon } from "../common/Icon/Icon";
import css from "./FilterItem.module.css";

type FilterItemProps = {
  icon: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

export const FilterItem = ({ icon, label, active = false, onClick }: FilterItemProps) => {
  return (
    <li>
      <button type="button" className={`${css.item} ${active ? css.active : ""}`} onClick={onClick}>
        <Icon name={icon} />
        <span className={css.label}>{label}</span>
      </button>
    </li>
  );
};
