import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss"

export default function DayListItem(props) {
  
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
  });
  const formatSpots = (value) => { 
    if (value >1) {
    return `${value} spots remaining`
    };
    if (value===1) {
      return `1 spot remaining`
    }
    return `no spots remaining`
  }
  const { name, spots, onChange } = props;
  return (
    <li onChange={onChange} className={dayClass}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots(spots)}</h3>
    </li>
  );
}
