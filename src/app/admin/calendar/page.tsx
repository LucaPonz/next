import { Appointment } from "@prisma/client";
import AppTopBar from "../../../components/AppTopBar";
import Calendar from "../../../components/calendar/Calendar";
import {NextUIProvider} from "@nextui-org/system";
import { week } from "@/src/lib/planner";
import prisma from "@/src/lib/db";
import AppointmentsContextProvider from "@/src/contexts/AppointmentsContextProvider";
import { UseCurrentDayContext } from "@/src/hooks/hooks";

export default async function Home() {
  
  async function getAppointmentsOfTheWeek(currentDay: Date) {
    const appointmentsOfTheWeek: Appointment[][] = [];
    const weekDays = week(currentDay);
    
    for(const weekDay of weekDays) {
      const appointmentsOfTheDay = await prisma.appointment.findMany({
        where: {
          start: {
            gte: new Date(weekDay.setHours(0, 0)),
            lte: new Date(weekDay.setHours(23, 99)),
          },
        },
      });
      appointmentsOfTheWeek.push(appointmentsOfTheDay);
    };
  
    return appointmentsOfTheWeek;
  }
  
  const appointmentsOfTheWeek = await getAppointmentsOfTheWeek(new Date())
  

  return (
  <main>
    <NextUIProvider>
      <AppointmentsContextProvider data={appointmentsOfTheWeek}>
          <Calendar/>
      </AppointmentsContextProvider>
    </NextUIProvider>
  </main>
  );
}
