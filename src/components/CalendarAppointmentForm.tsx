import { UseAppointmentsContext, UseClientsContext } from "@/src/hooks/hooks";
import { THourSlot } from "@/src/lib/types";
import {
  appointmentsByDayConverter,
  minutesToIsoString,
} from "@/src/lib/utils";
import React, { useState } from "react";
import CalendarAppointmentFormSelect from "./CalendarAppointmentFormSelect";
import { Radio, RadioGroup } from "@nextui-org/radio";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
const Moment = require("moment");
const MomentRange = require("moment-range");

const moment = MomentRange.extendMoment(Moment);

export default function CalendarAppointmentForm(props: {
  hourKey: string;
  day: Date;
  hoursItems: THourSlot[];
  week: Date[];
}) {
  const appointmentsContext = UseAppointmentsContext();

  const clientsContext = UseClientsContext();

  const clients = clientsContext.clients;

  const appointmentsByDay = appointmentsByDayConverter(
    props.week,
    appointmentsContext
  );

  const [clientValue, setClientValue] = useState<string | null>();

  const [selected, setSelected] = useState<string>("lezione privata");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const start = props.hoursItems.find(
      (item) => item.key == formData.get("start")
    )?.startTime;

    const newAppointment = {
      startIso: start ? minutesToIsoString(props.day, start) : "",
      endIso: start ? minutesToIsoString(props.day, start + 60) : "",
      id: Math.random().toString(),
      clientOne: formData.get("clientOne") as string,
      clientTwo: formData.get("clientTwo") as string,
      color:
        formData.get("select") === "lezione privata"
          ? "bg-cyan-400"
          : "bg-amber-400",
    };

    const overlappingIds: string[] = [];

    appointmentsByDay[props.day.getDay()].map((app) => {
      const range1 = moment.range(new Date(app.startIso), new Date(app.endIso));
      const range2 = moment.range(
        new Date(newAppointment.startIso),
        new Date(newAppointment.endIso)
      );
      console.log(range1.overlaps(range2, { adjacent: false }));
      if (range1.overlaps(range2, { adjacent: false })) {
        overlappingIds.push(app.id);
      }
    });

    appointmentsContext.handleDeleteAppointment(overlappingIds);

    appointmentsContext.handleAddAppointment(newAppointment);
  };

  return (
    <form
      className="flex flex-col gap-4"
      id="addAppointment"
      onSubmit={handleSubmit}
    >
      <RadioGroup
        value={selected}
        onValueChange={setSelected}
        orientation="horizontal"
        name="select"
        className="mb-3"
      >
        <Radio value={"lezione privata"}>Lezione Privata</Radio>
        <Radio className="ml-6" value={"lezione a duetto"}>
          Lezione a Duetto
        </Radio>
      </RadioGroup>

      <Autocomplete
        defaultItems={clients}
        label="Cliente"
        name="clientOne"
        selectedKey={clientValue}
        onSelectionChange={(key) => setClientValue(key as string)}
      >
        {(client) => (
          <AutocompleteItem key={client.key}>
            {client.name}
          </AutocompleteItem>
        )}
      </Autocomplete>

      {selected === "lezione a duetto" ? (
        <Autocomplete
          defaultItems={clients}
          label="Cliente"
          className=""
          name="clientTwo"  
        >
          {(client) => (
            <AutocompleteItem key={client.key}>
              {client.name}
            </AutocompleteItem>
          )}
        </Autocomplete>
      ) : null}

      <CalendarAppointmentFormSelect
        hoursItems={props.hoursItems}
        hourKey={props.hourKey}
      />
    </form>
  );
}
