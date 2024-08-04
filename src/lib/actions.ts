"use server"

import { Appointment } from "@prisma/client"
import { signIn } from "./auth"
import prisma from "./db"
import { revalidatePath } from "next/cache"
import { week } from "./planner"

export async function getAppointmentById(appointmentId: Appointment["id"]) {
    const appointment = await prisma.appointment.findUnique({
      where: {
        id: appointmentId,
      },
    });
    return appointment;
}

export async function login(formData: FormData) {
    const authData = Object.fromEntries(formData.entries())
    
    await signIn("credentials", authData)
}

export async function addAppointment(newAppointment: Omit<Appointment, "id">, clientOneId: string, clientTwoId?: string) {

    await prisma.appointment.create({
        data: {
            start: newAppointment["start"],
            end: newAppointment["end"],
            color: newAppointment["color"],
            clients: {
                connect: [
                    { id: clientOneId  },
                ]
            }
        },

    })
    revalidatePath("/admin/calendar", "page");
}

export async function deleteAppointmentById(appointmentId: Appointment["id"]) {

    const appointment = getAppointmentById(appointmentId)

    if(!appointment){
        console.log("appointment not found")
    }else{
        console.log("appointment found")
    }

    try {
        await prisma.appointment.delete({
          where: {
            id: appointmentId,
          },
        });
      } catch (error) {
          console.log({error})
      }
    
    revalidatePath("/admin/calendar", "page");
}

export async function getClientsByAppointment(app: Appointment) {
    const clients = await prisma.client.findMany({
        where: {
            appointments: {
                some: {}
            }
        }
    })
    return clients
}


