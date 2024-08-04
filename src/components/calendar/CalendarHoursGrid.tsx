"use client"

import { THourSlot } from "@/src/lib/types"
import Cell from "./Cell"
import { hoursItems, week } from "@/src/lib/planner"
import { UseAppointmentsContext, UseCurrentDayContext } from "@/src/hooks/hooks"

export default function CalendarHoursGrid() {

  const currentDay = UseCurrentDayContext().currentDay

  const weekMap = week(currentDay)
    
    const weekHoursRows = 
    weekMap.map((day: Date) => {
        return (
          <div className="flex flex-col basis-[14.285%]" key={day.getDay()}>
            {hoursItems.map((item: THourSlot) => {
              return <Cell day={day} hourKey={item.key} hoursItems={hoursItems} key={item.key} week={weekMap}></Cell>
            })}
          </div>
        )
    })

    return(
        <div className="flex">
          {weekHoursRows}
        </div>
    )
}