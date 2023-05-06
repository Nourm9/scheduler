import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { value, days, onChange } = props;
  const listOfDays = days.map((dayItem) => (
    <DayListItem
      key={dayItem.id}
      name={dayItem.name}
      spots={dayItem.spots}
      selected={dayItem.name === value}
      onChange={onChange}
    />
  ));
  return <ul>{listOfDays}</ul>;
}
