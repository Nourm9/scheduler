import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss"
import PropTypes from "prop-types";


export default function InterviewerList(props) {
  const { interviewers, onChange, interviewer } = props;
  console.log("interviewers list", interviewers);
  const listOfInterviewers = interviewers.map((interviewerProf) => (
    <InterviewerListItem
      key={interviewerProf.id}
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

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired,
};
