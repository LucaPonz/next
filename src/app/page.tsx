import AppTopBar from "../components/AppTopBar";
import Calendar from "../components/calendar/Calendar";
import {NextUIProvider} from "@nextui-org/system";


export default function Home() {

  return (
  <main>
    <NextUIProvider>
        <AppTopBar isDashboard={false}/>
        <Calendar/>
    </NextUIProvider>
  </main>
  );
}
