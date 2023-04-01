import React from "react";
import DayListItem from "./DayListItem";


export default function DayList(props) {
  const { value, days, onChange } = props;
  const listOfDays = days.map((dayItem) => 
        <DayListItem 
        id={dayItem.id}
        name={dayItem.day} 
        spots={dayItem.spots} 
        selected={dayItem.name === value}
        setDay={onChange}  
      />
  )
  return (
    <ul>{listOfDays}</ul>
 )
}
