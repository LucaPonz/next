import { Appointment } from "@prisma/client";

function Hours(startTime: number) {
  return (Math.floor((startTime) / 60))
}

function Minutes(startTime: number) {
  return ((startTime) % 60)
}

export function appointmentsByDayConverter(week: Date[], appointments: Appointment[]) {
  const appointmentsByDay: Appointment[][] = [];
  week.map((day: Date) => {
    appointmentsByDay[day.getDay()] = [];
    appointments.map((item: Appointment) => {
      if (new Date(item.start).getDay() === day.getDay()) {
        appointmentsByDay[day.getDay()].push(item);
      }
    });
  });
  return appointmentsByDay
}

export function stringAppointmentHour(startTime: number) {
  return (
    String(Hours(startTime)).padStart(2, "0") + " : " + String(Minutes(startTime)).padStart(2, "0")
  );
}

export function minutesToIsoString( day: Date, minutes: number) {
  return new Date(day.setUTCHours( Hours(minutes) , Minutes(minutes), 0)).toISOString()
}

export function stringMonth( selectedDay: Date ) {
  const months = ["gennaio", "febraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"]
  const month = months[selectedDay.getMonth()]
  return month
}

export function stringYear( selectedDay: Date ) {
  const year = selectedDay.getFullYear().toString()
  return year
}


