"use client"
import React, { useState, useEffect } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarHoursGrid from "./CalendarHoursGrid";
import CalendarAppointmentsPlanner from "./CalendarAppointmentsPlanner";
import CalendarHoursColumn from "./CalendarHoursColumn";

export default function Calendar() {
  const weekDays = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thurday",
    "friday",
    "saturday",
  ];

  const today = new Date();
  const [selectedDay, setSelectedDay] = useState<Date>(today);

  const hours = 24

  const hoursItems : number[] = []
  for(let i=0; i<=hours; i++){
    hoursItems.push(i)
  }

  const week = (selectedDay: Date) => {
    const week = [];
    const day = selectedDay.getDay();
    for (let i = day; i >= 0; i--) {
      const prevDay = new Date(selectedDay);
      prevDay.setDate(selectedDay.getDate() - i);
      week.push(prevDay);
    }
    for (let i = 1; i <= 7 - (day + 1); i++) {
      const nextDay = new Date(selectedDay);
      nextDay.setDate(selectedDay.getDate() + i);
      week.push(nextDay);
    }
    console.log(week);
    return week;
  };

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

        <CalendarHoursColumn hoursItems={hoursItems}/>

        <div className="w-full">
          <div className="w-full">
            <CalendarHeader week={week(selectedDay)} />
          </div>
          <CalendarAppointmentsPlanner
            week={week(selectedDay)}
          />
          <CalendarHoursGrid hoursItems={hoursItems} week={week(selectedDay)} />
        </div>

      </div>
    </>
  );
}
