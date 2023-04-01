import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss"


export default function InterviewerList(props) {
  const { interviewers, onChange } = props;
  const listOfInterviewers = interviewers.map((interviewer) => (
    <InterviewerListItem
      id={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      setInterviewer={onChange}
    />
  ));
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewers</h4>
      <ul className="interviewers__list">{listOfInterviewers}</ul>
    </section>  
  );
}
