import Calendar from "../components/Calendar";
import {NextUIProvider} from "@nextui-org/system";


export default function Home() {

  return (
  <main>
    <NextUIProvider>
        <Calendar/>
    </NextUIProvider>
  </main>
  );
}
