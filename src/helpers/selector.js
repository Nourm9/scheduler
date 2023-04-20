export function getAppointmentsForDay(state, day) {
  if (state.days === []) {
    return [];
  }
  const filteredNames = state.days.filter(
    (appointment) => appointment.name === day
  );
  if (filteredNames.length === 0) {
    return [];
  }
  const objList = filteredNames[0];
  const arrayList = objList.appointments;
  
  return arrayList.map((id) => state.appointments[id]);
}

export function getInterviewersForDay(state, day) {
  if (state.days === []) {
    return [];
  }
  const filteredNames = state.days.filter(
    (interviewer) => interviewer.name === day
  );
  if (filteredNames.length === 0) {
    return [];
  }
  const objList = filteredNames[0];
  console.log("filternames",filteredNames)
  const arrayList = objList.interviewers;
  console.log("state test", state)
  return arrayList.map((id) => state.interviewers[id-1]);
};


export function getInterview(state, interview) {
  // console.log(interview);
  if (!interview) {
    return null;
  }

  return {
    ...interview,
    interviewer: state.interviewers[interview.interviewer]
  };
}
