import React from "react";
import "components/Appointments/styles.scss";
export default function Empty(props) {
  const { onAdd } = props;
  return (
    <main onClick={onAdd} className="appointment__add">
      <img className="appointment__add-button" src="images/add.png" alt="Add" />
    </main>
  );
}