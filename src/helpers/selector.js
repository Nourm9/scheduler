function getAppointmentsForDay(state, day) {
  if (state.days === []) {
    return [];
  }
  const filteredNames = state.days.filter((user) => user.name === day);
  if (filteredNames.length === 0) {
    return [];
  }
  const objList = filteredNames[0];
  const arrayList = objList.appointments;
  return arrayList.map((id) => state.appointments[id]);
}

export default getAppointmentsForDay;
