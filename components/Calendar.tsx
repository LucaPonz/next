"use client"
import React, { useState, useEffect } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarHoursGrid from "./CalendarHoursGrid";
import CalendarAppointmentsPlanner from "./CalendarAppointmentsPlanner";
import CalendarHoursColumn from "./CalendarHoursColumn";
import { today } from "@/app/lib/planner";
import { week } from "@/app/lib/planner";

export default function Calendar() {
  
  const [selectedDay, setSelectedDay] = useState<Date>(today);

  // Bottoni prev/next week

  const nextWeek = () => {
    const newSelectedDate = new Date(selectedDay);
    newSelectedDate.setDate(selectedDay.getDate() + 7);
    setSelectedDay(newSelectedDate);
  };
  const prevWeek = () => {
    const newSelectedDate = new Date(selectedDay);
    newSelectedDate.setDate(selectedDay.getDate() - 7);
    setSelectedDay(newSelectedDate);
  };

  return (
    <>
      <button onClick={prevWeek}>Prev</button>
      <button onClick={nextWeek}>Next</button>

      <div className="flex">

        <CalendarHoursColumn/>

        <div className="w-full">

          <div className="w-full">
            <CalendarHeader week={week(selectedDay)} />
          </div>
          
          <CalendarAppointmentsPlanner
            week={week(selectedDay)}
          />

          <CalendarHoursGrid week={week(selectedDay)} />
        </div>

      </div>
    </>
  );
}
