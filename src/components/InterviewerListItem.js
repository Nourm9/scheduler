import React from "react";

import "components/InterviewerListItem.scss";



export default function InterviewerListItem(props) {
  const { id, name, avatar, selected } = props;
 
  return (
    <li onChange={() => props.setInterviewer(id)} className="interviewers__item">
      <img className="interviewers__item-image" src={avatar} alt={name} />
      {selected && name}
    </li>
  );
}
