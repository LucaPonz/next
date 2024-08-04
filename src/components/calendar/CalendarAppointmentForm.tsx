"use client"

import { UseAppointmentsContext, UseClientsContext } from "@/src/hooks/hooks";
import { THourSlot } from "@/src/lib/types";
import React, { useState } from "react";
import CalendarAppointmentFormSelect from "./CalendarAppointmentFormSelect";
import { Radio, RadioGroup } from "@nextui-org/radio";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { addAppointment, deleteAppointmentById } from "@/src/lib/actions";
const Moment = require("moment");
const MomentRange = require("moment-range");

const moment = MomentRange.extendMoment(Moment);

export default function CalendarAppointmentForm(props: {
  hourKey: string;
  day: Date;
  hoursItems: THourSlot[];
  week: Date[];
}) {
  const appointmentsOfTheWeek = UseAppointmentsContext().appointmentsOfTheWeek

  const clients = UseClientsContext().clients;

  const [clientValue, setClientValue] = useState<string | null>();

  const [selected, setSelected] = useState<string>("lezione privata");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    
    const start = props.hoursItems.find(
      (item) => item.key == formData.get("start")
    )?.startTime;

    const newAppointment = {
      start: start ? new Date(props.day.setUTCHours(Math.floor(start / 60), start % 60)) : new Date(), // da rivedere caso in cui start is undefined
      end: start ? new Date(props.day.setUTCHours(Math.floor(start / 60) + 1, start % 60)) : new Date(), // da rivedere caso in cui start is undefined
      color:
        formData.get("select") === "lezione privata"
          ? "bg-cyan-400"
          : "bg-amber-400",
    };

    // overlap

    const overlappingIds: string[] = [];

    appointmentsOfTheWeek[props.day.getDay()].map((app) => {
      const range1 = moment.range(app.start, app.end);
      const range2 = moment.range(
        new Date(newAppointment.start),
        new Date(newAppointment.end)
      );
      if (range1.overlaps(range2, { adjacent: false })) {
        overlappingIds.push(app.id);
      }
    });

    // end overlap

    overlappingIds.forEach( element => {
      deleteAppointmentById(element)
    })

    addAppointment(newAppointment, formData.get("clientOne") as string, formData.get("clientTwo") as string);

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
          <AutocompleteItem key={client.id}>
            {client.id}
          </AutocompleteItem>
        )}
      </Autocomplete>

      {selected === "lezione a duetto" ? (
        <Autocomplete
          defaultItems={clients}
          label="Cliente"
          name="clientTwo"
        >
          {(client) => (
            <AutocompleteItem key={client.id}>
              {client.id}
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
