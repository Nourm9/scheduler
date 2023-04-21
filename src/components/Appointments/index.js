import React from "react";
import Header from "./Header";
import "components/Appointments/styles.scss";
import Show from "./Show";
import Empty from "./Empty"
import Create from "./Create";
import Status from "./Status";
import Confirm from "./Confirm";
import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props) {
  
  const {  id, interview, time, interviewers, bookInterview, deleteInterview } = props;
  console.log('props Appointment', props)
  
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETE = "DELETE"
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";



  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  );
  const onAdd = () =>{
    transition(CREATE);
  }

 
  const onCancel = () => {
    transition(DELETE);
    deleteInterview(id).then(() => {transition(EMPTY)})
  }  

  const onConfirm = () => {
    transition(CONFIRM);
  }

  const onEdit = () => {
    
  }

  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer,
    };
    console.log("interview test", interview)
    transition(SAVING);
    bookInterview(id, interview)
      .then(() => {
      transition(SHOW)
    })
    
    // const doSomething = new Promise(function (resolve, reject) {
    //   setTimeout(function () {
    //     resolve(transition(SHOW));
    //   }, 1000);
    // });
    
    // return doSomething.then(transition(SAVING));
  }
  return (
    <article className="appointment">
      <Header time={time} />

      {mode === EMPTY && <Empty onAdd={onAdd} />}
      {mode === CREATE && (
        <Create interviewers={interviewers} onSave={save} onCancel={onCancel} />
      )}
      {mode === SAVING && <Status message={"Saving"} />}
      {mode === DELETE && <Status message={"Deleting"} />}
      {mode === CONFIRM && <Confirm message={"Are you sure you want to delete?"} onConfirm={onCancel} onCancel={()=>transition(SHOW)} />}
      {mode === SHOW && (
        <Show student={interview.student} interviewer={interview.interviewer} onDelete={onConfirm} />
      )}
    </article>
  );
}
