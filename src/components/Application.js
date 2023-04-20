import DayList from "./DayList";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Appointment from "./Appointments/index";
import "components/Application.scss";
import { getAppointmentsForDay } from "helpers/selector";
import { getInterviewersForDay } from "helpers/selector";

// const appointments = {
//   1: {
//     id: 1,
//     time: "12pm",
//   },
//   2: {
//     id: 2,
//     time: "1pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer: {
//         id: 3,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       },
//     },
//   },
//   3: {
//     id: 3,
//     time: "2pm",
//   },
//   4: {
//     id: 4,
//     time: "3pm",
//     interview: {
//       student: "Archie Andrews",
//       interviewer: {
//         id: 4,
//         name: "Cohana Roy",
//         avatar: "https://i.imgur.com/FK8V841.jpg",
//       },
//     },
//   },
//   5: {
//     id: 5,
//     time: "4pm",
//   },
// };

// const days = [
//   {
//     id: 1,
//     name: "Monday",
//     spots: 2,
//   },
//   {
//     id: 2,
//     name: "Tuesday",
//     spots: 5,
//   },
//   {
//     id: 3,
//     name: "Wednesday",
//     spots: 0,
//   },
// ];

const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" },
];

const converObjectToArray = (obj) => {
  let output = [];
  for (let key in obj) {
    output.push(obj[key]);
  }
  console.log("output", output)
  return output
}

export default function Application(props) {
  const setDay = (day) => setState({ ...state, day }); 
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    // you may put the line below, but will have to remove/comment hardcoded appointments variable
    appointments: {},
    interviewers: {
      "1": {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      },
    },
  });

  const dailyAppointments = getAppointmentsForDay(state, state.day);

  const bookInterview = (id, interview) => {
    console.log("id,interivew", id, interview);
  };

  const listOfAppointments = dailyAppointments.map((appointment) => {
    return (
      <Appointment
      
      key={appointment.id}
      {...appointment}
        interviewer={appointment.interviewer}
        interviewers={getInterviewersForDay(state, state.day)}
        bookInterview={bookInterview}
      />
      );
  });

    

    
    
    
  // CALL TO API USING useEFFECT
  useEffect(() => { 
      Promise.all([
        axios.get("http://localhost:8001/api/days"),
        axios.get("http://localhost:8001/api/appointments"),
        axios.get("http://localhost:8001/api/interviewers"),
      ]).then((response) => {
        console.log("response", response)
        const storeCoverObjToArray = converObjectToArray(response[2].data);
        console.log("store...", storeCoverObjToArray)
        setState({
          ...state,
          days: response[0].data,
          appointments: response[1].data,
          interviewers: storeCoverObjToArray,
        });
      })
    }, [setState]);

    
  //XTML returned frontend code.
    return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} day={state.day}  onChange={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">{listOfAppointments}</section>
    </main>
  );
}
