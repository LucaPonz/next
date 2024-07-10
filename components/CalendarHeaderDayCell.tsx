export default function CalendarHeaderDayCell(props: { day: {
    getFullYear(): number;
    getMonth: () => number;
    getDate: () => number };
}) {
    const now = new Date()
    const day = {
        day: props.day.getDate(),
        month: props.day.getMonth() + 1,
        year: props.day.getFullYear()
    }
    const today = {
        day: now.getDate(),
        month: now.getMonth() + 1,
        year: now.getFullYear()
    }
    return (
        <div className="flex items-center justify-center h-full basis-[14.285%] border-l">
            <div className={ day.day===today.day && day.month===today.month && day.year===today.year ? "bg-blue-400 text-white radius-full rounded-full h-16 w-16 flex items-center justify-center" : "" }>{day.day} | {day.month}</div>
        </div>
    )
}