import { stringMonth, stringYear } from "@/src/lib/utils";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function CalendarTopBar(props:{
    selectedDay: Date,
    setSelectedDay: React.Dispatch<React.SetStateAction<Date>>
}) {

  const monthString = props.selectedDay.getMonth()


  // Bottoni prev/next week

  const nextWeek = () => {
    const newSelectedDate = new Date(props.selectedDay);
    newSelectedDate.setDate(props.selectedDay.getDate() + 7);
    props.setSelectedDay(newSelectedDate);
  };
  const prevWeek = () => {
    const newSelectedDate = new Date(props.selectedDay);
    newSelectedDate.setDate(props.selectedDay.getDate() - 7);
    props.setSelectedDay(newSelectedDate);
  };

    return(
        <div className="w-full border-b border-gray-200 bg-gray-50 h-16 flex gap-4 px-5 items-center justify-center text-gray-600">
            <button onClick={prevWeek}><FaAngleLeft  className="h-12"/></button>
            <button onClick={nextWeek}><FaAngleRight  className="h-12"/></button>
            <p className="text-2xl font-normal capitalize">{stringMonth(props.selectedDay)} {stringYear(props.selectedDay)}</p>
        </div>
    )
}