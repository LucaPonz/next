"use client"
import React, { useState, useEffect } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarHoursGrid from "./CalendarHoursGrid";
import CalendarAppointmentsPlanner from "./CalendarAppointmentsPlanner";
import CalendarHoursColumn from "./CalendarHoursColumn";
import { today } from "@/src/lib/planner";
import { week } from "@/src/lib/planner";
import CalendarTopBar from "./CalendarTopBar";

export default function Calendar() {
  
  const [selectedDay, setSelectedDay] = useState<Date>(today);


  return (
    <div className="container mx-auto px-5">
      <div className="bg-white border-b border-gray-200 h-40 sticky top-0 w-full z-20">
        <CalendarTopBar selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
        <CalendarHeader week={week(selectedDay)} />
      </div>

      <div className="flex">

        <CalendarHoursColumn/>

        <div className="w-full">

          <CalendarAppointmentsPlanner
            week={week(selectedDay)}
          />

          <CalendarHoursGrid week={week(selectedDay)} />
        </div>

      </div>
    </div>
  );
}
