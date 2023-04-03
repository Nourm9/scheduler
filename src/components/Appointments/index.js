import React, { Fragment } from "react";
import Header from "./Header";
import "components/Appointments/styles.scss";
import Show from "./Show";
export default function Appointment(props) {
  const { id, interview, student, time } = props;
  console.log({interview})
  return (<article className="appointment">
      <Header time={time} />
    {interview && <Show
    
      interviewer={interview.interviewer.name} 
      student={interview.student} />} 
    

  </article>);
}
