"use client";

import { Appointment } from "@/app/lib/types";
import { UseAppointmentsContext } from "../app/hooks/hooks";
import CalendarAppointment from "./CalendarAppointment";
import { appointmentsByDayConverter } from "@/app/lib/utils";

export default function CalendarAppointmentsPlanner(props: { week: Date[] }) {
  
  const appointmentsContext = UseAppointmentsContext();

  const appointmentsByDay = appointmentsByDayConverter( props.week, appointmentsContext )

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
