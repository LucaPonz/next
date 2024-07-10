import { Appointment, TAppointmentsContext } from "./types";


export function appointmentsByDayConverter(week: Date[], appointmentsContext: TAppointmentsContext) {
  const appointmentsByDay: Appointment[][] = [];
  week.map((day: Date) => {
    appointmentsByDay[day.getDay()] = [];
    appointmentsContext.appointments.map((item: Appointment) => {
      if (new Date(item.start).getDay() === day.getDay()) {
        appointmentsByDay[day.getDay()].push(item);
      }
    });
  });
  return appointmentsByDay
}
