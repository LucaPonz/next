import { THourSlot } from "@/src/lib/types"
import Cell from "./Cell"
import { hoursItems } from "@/src/lib/planner"

export default function CalendarHoursGrid(props: {week: Date[]}) {
    
    const weekHoursRows = 
    props.week.map((day: Date) => {
        return (
          <div className="flex flex-col basis-[14.285%]" key={day.getDay()}>
            {hoursItems.map((item: THourSlot) => {
              return <Cell day={day} hourKey={item.key} hoursItems={hoursItems} key={item.key} week={props.week}></Cell>
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