export type TAppointment = {
  startIso: string;
  endIso: string;
  id: string;
  clientOne: string;
  clientTwo: string | undefined;
  color: string; 
};

export type TAppointmentsContext = {
    appointments: TAppointment[];
    handleAddAppointment: (newAppointment: TAppointment) => void;
    handleDeleteAppointment: (appointmentIds: string[] | string) => void;
}

export type TAppointmentsContextProviderProps = {
  appointments: TAppointment[];
  children: React.ReactNode;
};

export type THourSlot = {
  startTime: number,
  key: string,
  label: string,
}

export type TClient = {
  name: string,
  surname: string,
  age: number,
  key: string,
}

export type TClientsContext = {
  clients: TClient[];
}

export type TClientsContextProviderProps = {
clients: TClient[];
children: React.ReactNode;
};


