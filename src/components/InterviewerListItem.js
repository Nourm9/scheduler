import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  const { id, name, avatar, selected } = props;
  const interviewersClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });
  return (
    <li onClick={() => props.setInterviewer(id)} className={interviewersClass}>
      <img className="interviewers__item-image" src={avatar} alt={name} />
      {selected && name}
    </li>
  );
}
