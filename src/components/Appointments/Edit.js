import React, { useState } from "react";
import "components/Appointments/styles.scss";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";

export default function Create(props) {
  const { interviewers, onSave, onCancel } = props;

  const [student, setStudent] = useState(props.student || "Nour Mohamoud");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  function reset() {
    setInterviewer(null);
    setStudent("");
  }
  function cancelForm() {
    reset();
    return onCancel;
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form onSubmit={(event) => event.preventDefault()} autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder={student}
            disabled
          />
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
          <Button confirm onClick={onSave}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}