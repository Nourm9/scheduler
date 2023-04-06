import React from "react";
import Header from "./Header";
import "components/Appointments/styles.scss";
import Show from "./Show";
import Empty from "./Empty"

export default function Appointment(props) {
  const {  interview, time } = props;
  const onAdd = () =>{
    
  }
 
  console.log({interview})
  return (<article className="appointment">
      <Header time={time} />
      
    {interview ? <Show
    
      interviewer={interview.interviewer.name}
      student={interview.student} /> : <Empty 
      onAdd={onAdd} />} 
 
    

  </article>);
}
