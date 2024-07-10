export default function CalendarHoursColumn( props: {hoursItems: number[]}) {
    return(
        <div className="basis-24 flex flex-col pt-24">
            {props.hoursItems.map((offset: number) => {
                return(
                    <div key={offset} className="h-12 text-xs text-right pr-2">{String(Math.floor(offset*60/60)).padStart(2,'0')} : {String(offset*60%60).padStart(2,'0')}</div>
                )
            })}
        </div>
    )
}