import React from "react";
import Header from "./Header";
import "components/Appointments/styles.scss";
import Show from "./Show";
import Empty from "./Empty"
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error"
import {useVisualMode} from "hooks/useVisualMode";

export default function Appointment(props) {
  
  const {  id, interview, time, interviewers, bookInterview, cancelInterview,  } = props;

  
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETE = "DELETE"
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT"
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";



  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  );
  const onAdd = () =>{
    transition(CREATE);
  }

 
  const onDelete = () => {
    transition(DELETE, true)
    cancelInterview(id)
      .then(() => {
        transition(EMPTY);
      })
      .catch((error) => transition(ERROR_DELETE), true);
  }  

  const onConfirm = () => {
    transition(CONFIRM);
  }

  const editAppointment = () => {
    cancelInterview(id)
      .then(() => {
        transition(CREATE);
      });
  };

  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer,
    };
    console.log("interview save", interview)
    transition(SAVING);
    bookInterview(id, interview)
  .then(() => transition(SHOW))
    .catch(error => transition(ERROR_SAVE), true);;
    
    // const doSomething = new Promise(function (resolve, reject) {
    //   setTimeout(function () {
    //     resolve(transition(SHOW));
    //   }, 1000);
    // });
    
    // return doSomething.then(transition(SAVING));
  }
  
  return (
    <article className="appointment" data-testid="appointment">
      <Header time={time} />

      {mode === EMPTY && <Empty onAdd={onAdd} />}
      {mode === CREATE && (
        <Form
          interviewers={interviewers}
          onSave={save}
          onCancel={() => {
            transition(EMPTY);
          }}
        />
      )}
      {mode === SAVING && <Status message={"Saving"} />}
      {mode === DELETE && <Status message={"Deleting"} />}
      {mode === ERROR_DELETE && (
        <Error
          message="Error: Could not delete appointment"
          onClose={() => transition(SHOW)}
        />
      )}
      {mode === ERROR_SAVE && (
        <Error
          message="Error: Could not save appointment"
          onClose={() => transition(SHOW)}
        />
      )}
      {mode === CONFIRM && (
        <Confirm
          message={"Are you sure you want to delete?"}
          onConfirm={onDelete}
          onCancel={() => transition(SHOW)}
        />
      )}

      {mode === EDIT && (
        <Form
          student={interview.student}
          interviewer={interview.interviewer.id}
          interviewers={interviewers}
          onSave={save}
          onCancel={back}
        />

      )}

      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
          onDelete={onConfirm}
          onEdit={() => transition(EDIT)}
        />
      )}
    </article>
  );
}
