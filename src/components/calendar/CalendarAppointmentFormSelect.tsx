import { THourSlot } from "@/src/lib/types";
import { Select, SelectItem } from "@nextui-org/select";
import { useState } from "react";

export default function CalendarAppointmentFormSelect(props: {
    hoursItems : THourSlot[],
    hourKey : string,
}) {

    const [value, setValue] = useState(new Set([props.hourKey as string]));
    
    const handleEndHour = (value: Set<string>) => {
        const newSet : Set<string> = new Set()
        Array.from(value).map((val : string) => {
          const endValue = (parseInt(val)+2).toString()
          newSet.add(endValue)
        })
        return newSet
      }

    return(
        
        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">

        <Select
          selectedKeys={value}
          labelPlacement="outside"
          label="Start"
          className="basis-1/2"
          name="start"
          onSelectionChange={(keys) => setValue(keys as Set<string>)}
        >
          
          {props.hoursItems.map((item : THourSlot, index : number) => { return(
            <SelectItem key={index}>
              {item.label}
            </SelectItem>
          )
          })}
        </Select>
        
        <Select
          selectedKeys={handleEndHour(value)}
          labelPlacement="outside"
          label="End"
          className="basis-1/2"
          name="end"
          isDisabled
        >
          
          {props.hoursItems.map((item : THourSlot, index : number) => { return(
            <SelectItem key={index}>
              {item.label}
            </SelectItem>
          )
          })}
        </Select>

      </div>
    )
}