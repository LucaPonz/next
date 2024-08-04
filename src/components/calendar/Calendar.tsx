import React, { useState} from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarHoursGrid from "./CalendarHoursGrid";
import CalendarAppointmentsPlanner from "./CalendarAppointmentsPlanner";
import CalendarHoursColumn from "./CalendarHoursColumn";
import CalendarTopBar from "./CalendarTopBar";
import prisma from "@/src/lib/db";

export default async function Calendar() {

  return (
    <div className="container mx-auto px-5">
      <div className="bg-white border-b border-gray-200 h-40 sticky top-0 w-full z-20">
        <CalendarTopBar />
        <CalendarHeader />
      </div>

      <div className="flex">

        <CalendarHoursColumn/>

        <div className="w-full">

          <CalendarAppointmentsPlanner />

          <CalendarHoursGrid />
        </div>

      </div>
    </div>
  );
}
