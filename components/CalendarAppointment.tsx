import { Appointment } from "@/app/lib/types";
import { stringAppointmentHour } from "@/app/lib/utils";

export default function CalendarAppointment(props:{item: Appointment}) {

    const appointmentDuration = 1
    const slotHeight = 96
    const slotPadding = 6

    const appointmentTop = `${(new Date(props.item.startIso).getUTCHours() + new Date(props.item.startIso).getUTCMinutes()/60 - 8) * slotHeight}px`;

    const containerHeightClass = `${appointmentDuration * slotHeight - slotPadding}px`;

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      const target = e.target as HTMLElement;
      target.classList.toggle("shadow-lg");
    };

    const start = new Date(props.item.startIso).getUTCHours()*60 + new Date(props.item.startIso).getUTCMinutes()
    const end = start + 60
    
    return (
      <div
        onClick={handleClick}
        className="bg-blue-400 absolute z-50 left-0 right-0 rounded mr-6 px-2 text-white"
        style={{ height: `${containerHeightClass}`, top: `${appointmentTop}` }}
      >
        <h3>{props.item.title}</h3>
        <p>{stringAppointmentHour(start)} - {stringAppointmentHour(end)}</p> 
      </div>
    );
  };