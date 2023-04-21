import DayList from "./DayList";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Appointment from "./Appointments/index";
import "components/Application.scss";
import {
  getAppointmentsForDay,
  getInterviewersForDay,
  getInterview,
} from "helpers/selector";

export default function Application(props) {
  const setDay = (day) => setState({ ...state, day });
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    // you may put the line below, but will have to remove/comment hardcoded appointments variable
    appointments: {},
    interviewers: {},
  });

  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const dailyInterviewers = getInterviewersForDay(state, state.day);

  const bookInterview = (id, interview) => {
    console.log("book id,interivew", id, interview);
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

   
    return axios
      .put(`http://localhost:8001/api/appointments/${id}`,{interview})
      .then((response) => {
        setState({
          ...state,
          appointments,
        });
      }).catch(error => {
        console.log("error", error);
        throw error
      })
  };
  

  const deleteInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .delete(`http://localhost:8001/api/appointments/${id}`)
      .then((response) => {
        setState({
          ...state,
          appointments,
        });
      })
      .catch((error) => {
        console.log("error", error);
        throw error;
      });
  };

  const listOfAppointments = dailyAppointments.map((appointment) => {
    return (
      <Appointment
        key={appointment.id}
        {...appointment}
        interview={getInterview(state, appointment.interview)}
        interviewers={dailyInterviewers}
        bookInterview={bookInterview}
        deleteInterview={deleteInterview}
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
      setState({
        ...state,
        days: response[0].data,
        appointments: response[1].data,
        interviewers: response[2].data,
      });
    });
  }, [setState]);
  console.log("state", state);

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
          <DayList days={state.days} day={state.day} onChange={setDay} value={state.day} />
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
