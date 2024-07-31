"use server"

import { Appointment } from "@prisma/client"
import { signIn } from "./auth"
import prisma from "./db"
import { revalidatePath } from "next/cache"

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

export async function addAppointment(newAppointment: Omit<Appointment, "id">) {

    await prisma.appointment.create({
        data: {
            startIso: newAppointment.startIso,
            endIso: newAppointment.endIso,
            color: newAppointment.color,
        }
    })
    revalidatePath("/", "layout")
}

export async function deleteAppointmentById(appointmentId: Appointment["id"]) {

    const appointment = getAppointmentById(appointmentId)

    if(!appointment){
        console.log("app not found")
    }

    try {
        await prisma.appointment.delete({
          where: {
            id: appointmentId,
          },
        });
      } catch (error) {
        return {
          message: "Could not delete pet.",
        };
      }
    
    revalidatePath("/", "layout");
}


