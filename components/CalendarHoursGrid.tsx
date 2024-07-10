import Cell from "./Cell"

export default function CalendarHoursGrid(props: {week: Date[], hoursItems: number[]}) {
    

    const weekHoursRows = 
    props.hoursItems.map((startHour: number) => {
        return (
          <div className="w-full flex" key={startHour}>
            {props.week.map((day: Date) => {
              return <Cell day={day} startHour={startHour} key={startHour + day.getDay()}></Cell>
            })}
          </div>
        )
    })

    return(
        <div className="w-full">
          {weekHoursRows}
        </div>
    )
}