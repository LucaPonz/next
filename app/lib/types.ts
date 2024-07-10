export type Appointment = {
  start: string;
  end: string;
  id: string;
  title: string;
};

export type TAppointmentsContext = {
    appointments: Appointment[];
    handleAddAppointment: (newAppointment: Appointment) => void;
}
