import CalendarHeaderDayCell from "./CalendarHeaderDayCell";

export default function CalendarHeader(props:{week: Date[]}) {
  
  const weekDatesCells = 
    props.week.map((day: Date) => {
      return <CalendarHeaderDayCell day={day} key={day.getDay()}></CalendarHeaderDayCell>
    })

  return (
    <div className="w-full bg-gray-50 border-b border-gray-200">
        <div className="ml-24 h-24 flex">
          {weekDatesCells}
        </div>
    </div>
  )
}
