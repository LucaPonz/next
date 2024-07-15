import { hoursItems } from "@/src/lib/planner"
import { THourSlot } from "@/src/lib/types"
import { stringAppointmentHour } from "@/src/lib/utils"

export default function CalendarHoursColumn() {
    return(
        <div className="basis-24 flex flex-col -top-px relative flex-shrink-0">
            {hoursItems.map((item: THourSlot) => {
                return(
                    <div key={item.key} className="h-12 text-xs text-right pr-2 pt-1 relative border-gray-200 border-t text-gray-400">{stringAppointmentHour(item.startTime)}</div>
                )
            })}
        </div>
    )
}