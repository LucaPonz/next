"use client"

import { UseAppointmentsContext, UseCurrentDayContext } from "@/src/hooks/hooks";
import CalendarHeaderDayCell from "./CalendarHeaderDayCell";
import { week } from "@/src/lib/planner";

export default function CalendarHeader() {
  const currentDay = UseCurrentDayContext().currentDay

  const weekMap = week(currentDay)

  const weekDatesCells = 
    weekMap.map((day: Date) => {
      return <CalendarHeaderDayCell day={day} key={day.getDay()}></CalendarHeaderDayCell>
    })

  return (
    <div className="w-full bg-gray-50 border-b border-gray-200">
        <div className="ml-24 h-24 flex">
          {weekDatesCells}
        </div>
    </div>
  )
}
