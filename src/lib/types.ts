import { Client, User, Appointment } from "@prisma/client";

export type TAppointmentsContext = {
  appointmentsOfTheWeek: Appointment[][];
  handleSetAppointmentsOfTheWeek: (updatedAppointments: Appointment[][]) => void
}

export type TAppointmentsContextProviderProps = {
  data: Appointment[][];
  children: React.ReactNode;
};

export type THourSlot = {
  startTime: number,
  key: string,
  label: string,
}

export type TClientsContext = {
  clients: Client[];
  handleChangeSelectedClientId: (id: string) => void;
  handleAddClient: (newClient :Client) => void;
  handleDeleteClient: (selectedClientId : string) => void;
  selectedClient: Client | undefined;
}

export type TClientsContextProviderProps = {
  data: Client[];
  children: React.ReactNode;
};

export type TSearchContext = {
  search: string;
  handleChangeSearch: (newValue: string) => void
}

export type TSearchContextProviderProps = {
  data: string;
  children: React.ReactNode;
};

export type TUsersContext = {
  users: User[],
}

export type TUsersContextProviderProps = {
  data: User[];
  children: React.ReactNode;
}

export type TCurrentDayContext = {
  currentDay: Date;
  handleChangeCurrentDay: (newDay: Date) => void
}

export type TCurrentDayContextProviderProps = {
  data: Date;
  children: React.ReactNode;
}

