import { UseAppointmentsContext } from "@/app/hooks/hooks";
import { THourSlot } from "@/app/lib/types";
import { appointmentsByDayConverter, minutesToIsoString } from "@/app/lib/utils";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import React, { useState } from "react";
import { areIntervalsOverlapping } from "date-fns";
import { AppointmentsContext } from "@/contexts/AppointmentsContextProvider";

export default function CalendarAppointmentForm(props: {
  hourKey: string;
  day: Date;
  hoursItems: THourSlot[];
  week: Date[]
}) {

  const appointmentsContext = UseAppointmentsContext();

  const appointmentsByDay = appointmentsByDayConverter( props.week, appointmentsContext )

  const [value, setValue] = useState(new Set([props.hourKey as string]));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const k = formData.get("start") as string
    const start = props.hoursItems.find((item) => item.key == k)?.startTime

    const newAppointment = {
      startIso: start ? minutesToIsoString(props.day, start) : "",
      endIso: start ? minutesToIsoString(props.day, start + 60) : "",
      id: Math.random().toString() as string,
      title: formData.get("clientOne") as string,
    };

    appointmentsByDay[props.day.getDay()].map((app) => {
      console.log(areIntervalsOverlapping({start:new Date(app.startIso), end:new Date(app.endIso)},{start:new Date(newAppointment.startIso), end:new Date(newAppointment.endIso)}))
      console.log({start:new Date(app.startIso), end:new Date(app.endIso)},{start:new Date(newAppointment.startIso), end:new Date(newAppointment.endIso)})
      if(areIntervalsOverlapping({start:new Date(app.startIso), end:new Date(app.endIso)},{start:new Date(newAppointment.startIso), end:new Date(newAppointment.endIso)}))
        appointmentsContext.handleDeleteAppointment(app.id);
    })
    
    appointmentsContext.handleAddAppointment(newAppointment);
  };

  return (
    <form
      className="flex flex-col gap-4"
      id="addAppointment"
      onSubmit={handleSubmit}
    >
      <Input
        key="clientOne"
        type="text"
        label="Cliente"
        labelPlacement="outside"
        name="clientOne"
        placeholder="Cliente"
        isRequired
      />

      <Input
        key="clientTwo"
        type="text"
        label="Cliente"
        labelPlacement="outside"
        name="clientTwo"
        placeholder="Cliente"
        isRequired
      />

      <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">

        <Select
          selectedKeys={value}
          labelPlacement="outside"
          label="Start"
          className="basis-1/2"
          name="start"
          onSelectionChange={(keys) => setValue(keys as Set<string>)}
          isRequired
        >
          
          {props.hoursItems.map((item : THourSlot) => { return(
            <SelectItem key={item.key}>
              {item.label}
            </SelectItem>
          )
          })}

        </Select>

        <Input
            className="basis-1/2"
            // value={}
            labelPlacement="outside"
            label="End"
            name="end"
            >
          </Input>

      </div>
    </form>
  );
}
