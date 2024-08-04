"use client"

import { UseAppointmentsContext, UseCurrentDayContext } from "@/src/hooks/hooks";
import { stringMonth, stringYear } from "@/src/lib/utils";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function CalendarTopBar() {

  const currentDay = UseCurrentDayContext().currentDay
  const handleChangeCurrentDay = UseCurrentDayContext().handleChangeCurrentDay

  const monthString = currentDay.getMonth()

  // Bottoni prev/next week

  const nextWeek = () => {
    const newSelectedDate = new Date(currentDay);
    newSelectedDate.setDate(currentDay.getDate() + 7);
    handleChangeCurrentDay(newSelectedDate);
  };
  const prevWeek = () => {
    const newSelectedDate = new Date(currentDay);
    newSelectedDate.setDate(currentDay.getDate() - 7);
    handleChangeCurrentDay(newSelectedDate);
  };

    return(
        <div className="w-full border-b border-gray-200 bg-gray-50 h-16 flex gap-4 px-5 items-center justify-center text-gray-600">
            <button onClick={prevWeek}><FaAngleLeft  className="h-12"/></button>
            <button onClick={nextWeek}><FaAngleRight  className="h-12"/></button>
            <p className="text-2xl font-normal capitalize">{stringMonth(currentDay)} {stringYear(currentDay)}</p>
        </div>
    )
}