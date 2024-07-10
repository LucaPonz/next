import { Appointment } from "@/app/lib/types";

export default function CalendarAppointment(props:{item: Appointment}) {

    const appointmentLenght =
      (new Date(props.item.end).getTime() - new Date(props.item.start).getTime()) /
      (1000 * 60 * 60);

    const appointmentTop = `${new Date(props.item.start).getUTCHours() * 48}px`;

    const containerHeightClass = `${appointmentLenght * 48}px`;

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      const target = e.target as HTMLElement;
      target.classList.toggle("shadow-lg");
    };

    return (
      <div
        onClick={handleClick}
        className="bg-blue-400 absolute z-50 left-0 right-0 rounded mr-6 px-2"
        style={{ height: `${containerHeightClass}`, top: `${appointmentTop}` }}
      >
        {props.item.title}
      </div>
    );
  };