import CalendarHeaderDayCell from "./CalendarHeaderDayCell";

export default function CalendarHeader(props:{week: Date[]}) {
  
  const weekDatesCells = 
    props.week.map((day: Date) => {
      return <CalendarHeaderDayCell day={day} key={day.getDay()}></CalendarHeaderDayCell>
    })

  return (
    <div className="w-full">
        <div className="ml-24 h-24 flex border-b border-gray-200">
          {weekDatesCells}
        </div>
    </div>
  )
}
