import Card from "@/src/components/Card";
import ClientsAddButton from "@/src/components/clients/ClientsAddButton";
import ClientsDetails from "@/src/components/clients/ClientsDetails";
import ClientsList from "@/src/components/clients/ClientsList";
import ClientSearchForm from "@/src/components/clients/ClientsSearchForm";
import {NextUIProvider} from "@nextui-org/system";

export default function Page() {

  return (
  <main>
    <NextUIProvider>
      <div className="container mx-auto px-5 mt-12 grid grid-cols-3 grid-rows-[45px_1fr] gap-4 min-h-[600px]">
        <div className="row-start-1 row-span-1 col-start-1 col-span-1">
          <ClientSearchForm></ClientSearchForm>
        </div>
        <div className="col-start-2 col-span-2 row-start-1 row-span-full">
          <Card>
            <ClientsDetails></ClientsDetails>
          </Card>
        </div>
        <div className="col-start-1 col-span-1 row-start-2 max-h-[50vh]">
          <Card>
            <ClientsList></ClientsList>
            <ClientsAddButton></ClientsAddButton>
          </Card>
        </div>
      </div>
    </NextUIProvider>
  </main>
  );
}
