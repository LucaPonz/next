import { THourSlot } from "./types";
import { stringAppointmentHour } from "./utils";

export const today = new Date();

const plannerFirstHour = 8
const plannerEndHour = 20

function slots(){
  const slots : number[] = []
  for(let i=plannerFirstHour*60; i<=plannerEndHour*60; i+=30){
    slots.push(i)
  }
  return slots
}

export const hoursItems: Array<THourSlot> = [];
slots().map((slot: number, index: number) => {
  hoursItems.push({ key: index.toString(), label: stringAppointmentHour(slot), startTime: slot });
});


export const week = (selectedDay: Date) => {
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
    return week;
};