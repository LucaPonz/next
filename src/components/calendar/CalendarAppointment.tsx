import { UseAppointmentsContext } from "@/src/hooks/hooks";
import { Appointment } from "@prisma/client";
import { stringAppointmentHour } from "@/src/lib/utils";
import { FaRegCircleXmark } from "react-icons/fa6";
import { FaPen } from "react-icons/fa6";
import { deleteAppointmentById } from "@/src/lib/actions";

export default function CalendarAppointment(props: { item: Appointment }) {
  const appointmentDuration = 1;
  const slotHeight = 96;
  const slotPadding = 6;

  const appointmentsContext = UseAppointmentsContext()

  const appointmentTop = `${
    (new Date(props.item.startIso).getUTCHours() +
      new Date(props.item.startIso).getUTCMinutes() / 60 -
      8) *
    slotHeight
  }px`;

  const containerHeightClass = `${
    appointmentDuration * slotHeight - slotPadding
  }px`;

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget as HTMLElement;
    target.classList.toggle("shadow-lg");
  };

  const handleDelete = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    deleteAppointmentById(props.item.id)
  };

  const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    deleteAppointmentById(props.item.id)
  };

  const start =
    new Date(props.item.startIso).getUTCHours() * 60 +
    new Date(props.item.startIso).getUTCMinutes();
  const end = start + 60;

  return (
    <div
      onClick={handleClick}
      className={"absolute z-10 left-0 right-0 rounded mr-6 p-3 text-white flex flex-col justify-between " + props.item.color}
      style={{ height: `${containerHeightClass}`, top: `${appointmentTop}` }}
    >
      <div>
        <h3 className="">
          {/* {props.item.clientOne ? props.item.clientOne : "senza titolo"}
          {props.item.clientTwo ? ` - ${props.item.clientTwo}` : ""} */}
        </h3>
        <p>
          {stringAppointmentHour(start)} - {stringAppointmentHour(end)}
        </p>
      </div>

      <div className="self-end flex gap-3">
        <form onSubmit={handleEdit}>
          <button type="submit"><FaPen/></button>
        </form>
        
        <form onSubmit={handleDelete}>
          <button type="submit"><FaRegCircleXmark /></button>
        </form>
      </div>
    </div>
  );
}
