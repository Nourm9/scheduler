import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss"


export default function InterviewerList(props) {
  const { interviewers, onChange, interviewer } = props;
  const listOfInterviewers = interviewers.map((interviewerProf) => (
    <InterviewerListItem
      id={interviewerProf.id}
      name={interviewerProf.name}
      avatar={interviewerProf.avatar}
      selected={interviewer === interviewerProf.id}
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
