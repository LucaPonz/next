import { Appointment } from "@prisma/client";
import { UseAppointmentsContext } from "../../hooks/hooks";
import CalendarAppointment from "./CalendarAppointment";
import { appointmentsByDayConverter } from "@/src/lib/utils";

export default function CalendarAppointmentsPlanner(props: { week: Date[] }) {
  
  const appointments = UseAppointmentsContext();

  const appointmentsByDay = appointmentsByDayConverter( props.week, appointments.appointments )

  return (
    <div className="w-full flex">
      {props.week.map((day: Date) => {
        const appointmentsOfTheDay = appointmentsByDay[day.getDay()];
        return (
          <div key={day.getDay()} className="basis-[14.285%] relative">
            {appointmentsOfTheDay ? (
              appointmentsOfTheDay.map((appointment: Appointment) =>
                <CalendarAppointment item={appointment} key={appointment.id}></CalendarAppointment>
              )
            ) : (
              <div className="" key={day.getDay()}></div>
            )}
          </div>
        );
      })}
    </div>
  );
}
