import React, { useEffect, useState } from "react";
import axios from "axios";

export function useApplicationData(initial) {
  const setDay = (day) => setState({ ...state, day });

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    // you may put the line below, but will have to remove/comment hardcoded appointments variable
    appointments: {},
    interviewers: {},
  });

  // CALL TO API USING useEFFECT
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((response) => {
      setState({
        ...state,
        days: response[0].data,
        appointments: response[1].data,
        interviewers: response[2].data,
      });
    });
  }, []);

  // Helper Func; will update spots remaining after booking/canceling interview
  const updateSpots = (state, days) => {
    const currentDay = days.find((day) => {
      return day.name === state.day;
    });
    let spots = 0;
    for (const aptId of currentDay.appointments) {
      if (!state.appointments[aptId].interview) {
        spots++;
      }
    }
    const copyOfDays = [...state.days];
    const updatedDay = { ...currentDay, spots };
    copyOfDays[currentDay.id - 1] = updatedDay;
    return copyOfDays;
  };

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .put(`http://localhost:8001/api/appointments/${id}`, { interview })
      .then((response) => {
        const newState = { ...state, appointments };
        const days = updateSpots(newState, state.days);
        setState({
          ...newState,
          days,
        });
      })
      .catch((error) => {
        throw error;
      });
  }

  function cancelInterview(id) {
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
        const newState = { ...state, appointments };
        const days = updateSpots(newState, state.days);
        setState({
          ...newState,
          days,
        });
      });
  }
  return { bookInterview, cancelInterview, state, setDay, updateSpots };
}
