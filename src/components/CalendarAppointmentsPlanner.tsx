"use client";

import { TAppointment } from "@/src/lib/types";
import { UseAppointmentsContext } from "../hooks/hooks";
import CalendarAppointment from "./CalendarAppointment";
import { appointmentsByDayConverter } from "@/src/lib/utils";

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
              appointmentsOfTheDay.map((appointment: TAppointment) =>
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
