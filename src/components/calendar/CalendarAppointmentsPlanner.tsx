"use client"

import { Appointment } from "@prisma/client";
import CalendarAppointment from "./CalendarAppointment";
import { UseAppointmentsContext } from "@/src/hooks/hooks";

export default function CalendarAppointmentsPlanner() {
  
  const appointmentsOfTheWeek = UseAppointmentsContext().appointmentsOfTheWeek

  return (
    <div className="w-full flex">
      {appointmentsOfTheWeek.map((appointmentsOfTheDay: Appointment[], index: number) => {
        return (
          <div key={index} className="basis-[14.285%] relative">
            {appointmentsOfTheDay ? (
              appointmentsOfTheDay.map((appointment: Appointment, index: number  ) =>
                <CalendarAppointment item={appointment} key={index}></CalendarAppointment>
              )
            ) : (
              <div className="" key={index}></div>
            )}
          </div>
        );
      })}
    </div>
  );
}
