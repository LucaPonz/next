import { hoursItems } from "@/app/lib/planner"
import { THourSlot } from "@/app/lib/types"
import { stringAppointmentHour } from "@/app/lib/utils"

export default function CalendarHoursColumn() {
    return(
        <div className="basis-24 flex flex-col pt-24">
            {hoursItems.map((item: THourSlot) => {
                return(
                    <div key={item.key} className="h-12 text-xs text-right pr-2 -top-2 relative">{stringAppointmentHour(item.startTime)}</div>
                )
            })}
        </div>
    )
}