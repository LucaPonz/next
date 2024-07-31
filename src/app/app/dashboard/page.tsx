import { auth } from "@/src/lib/auth";
import { NextUIProvider } from "@nextui-org/system";
import { redirect } from "next/navigation";
import prisma from "@/src/lib/db"
import { Image } from "@nextui-org/image";
import UserDetailsInfo from "@/src/components/user/UserDetailsInfo";
import UserAppointmentsInfo from "@/src/components/user/UserAppointmentsInfo";

export default async function Page() {
    const session = await auth()
    if(!session?.user){
        redirect("/login")
    }
    
    const client = await prisma.client.findUnique({
        where: {
            userId: session.user.id,
        }
    })

    return(
    <main>
        <NextUIProvider>
        <section className="w-full h-full flex flex-col">
      {client ? 
        <>
          <header className="bg-gray-100 flex items-center justify-between p-5 rounded-tl-md rounded-tr-md">
            <div className="flex items-center container mx-auto px-5">
                <Image
                  src="https://picsum.photos/seed/picsum/200/300"
                  alt="client photo"
                  width={75}
                  height={75}
                  radius="full"
                  className="bg-gray-200 h-[75px] w-[75px]"
                ></Image>
                <h3 className="ml-5 text-3xl font-semibold leading-7 text-gray-800">
                  {client?.name} {client?.surname}
                </h3>
            </div>
          </header>

          <div className="container mx-auto px-5 mt-5 grid grid-cols-2 gap-4">
            <UserDetailsInfo client={client}></UserDetailsInfo>
            <UserAppointmentsInfo client={client}></UserAppointmentsInfo>
          </div>
          

          {/* <ClientsDetailsAppointments></ClientsDetailsAppointments>

          <ClientsDetailsHistory></ClientsDetailsHistory> */}

          <footer className="p-5 self-end mt-auto">
            
          </footer>
        </>
       : <div className="p-5">Nessun Cliente associato con questo Utente</div>}
    </section>
        </NextUIProvider>
    </main>
    )
}