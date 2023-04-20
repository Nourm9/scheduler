import React from "react";
import Header from "./Header";
import "components/Appointments/styles.scss";
import Show from "./Show";
import Empty from "./Empty"
import Create from "./Create";
import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props) {
  
  const {  interview, time, interviewers, bookInterview } = props;
  
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE"
  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  );
  const onAdd = () =>{
    transition(CREATE);
  }

  const onCancel = () => {
    console.log("onCancel")
    transition(EMPTY)
  }  

  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer,
    };
    console.log("interview",interview)
  }
  return (<article className="appointment">
      <Header time={time} />
      
{mode === EMPTY && <Empty onAdd={onAdd} />}
{mode === CREATE && <Create  interviewers={interviewers} onSave={save} onCancel={onCancel} bookInterview={save}  /> }
{mode === SHOW && (
  <Show
    student={interview.student}
    interviewer={interview.interviewer}
  />
)} 
 
  </article>);
}
