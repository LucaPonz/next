import Image from "next/image";
import Calendar from "../components/Calendar";
import {NextUIProvider} from "@nextui-org/system";
import AppointmentsContextProvider from "@/contexts/AppointmentsContextProvider";


export default function Home() {

  return (
  <main>
    <NextUIProvider>
        <Calendar/>
    </NextUIProvider>
  </main>
  );
}
