export type Appointment = {
  startIso: string;
  endIso: string;
  id: string;
  title: string;
};

export type TAppointmentsContext = {
    appointments: Appointment[];
    handleAddAppointment: (newAppointment: Appointment) => void;
    handleDeleteAppointment: (appointmentIds: string) => void;
}

export type THourSlot = {
  startTime: number,
  key: string,
  label: string,
}

