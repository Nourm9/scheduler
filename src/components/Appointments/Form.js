import React, { useState } from "react";
import "components/Appointments/styles.scss"
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";


export default function Form(props) {
  const {  interviewers, onSave, onCancel } = props;
  
  const[error, setError] = useState("")
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  function reset() { 
    setInterviewer(null);
    setStudent("");
    setError("");
  }
  function cancelForm() {
    reset();
    onCancel();
  }

  function validate() {
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    }
    setError("");
    onSave(student, interviewer);
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form onSubmit={(event) => event.preventDefault()} autoComplete="off">
          <input
            value={student}
            onChange={(event) => {
              setStudent(event.target.value);
              setError("");
            }}
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            data-testid="student-name-input"
          />
          <p>{error}</p>
        </form>
        <InterviewerList
          interviewers={interviewers}
          interviewer={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancelForm}>
            Cancel
          </Button>
          <Button confirm onClick={validate}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}