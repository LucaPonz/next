import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import CalendarAppointmentForm from "./CalendarAppointmentForm";
import { THourSlot } from "@/app/lib/types";


export default function Cell(props: { hourKey: string; day: Date; hoursItems: THourSlot[]; week: Date[] }) {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className="border-l border-gray-200 h-12 border-b rounded-none bg-white data-[pressed=true]:scale-1"
        onPress={onOpen}
      ></Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {/* {props.start.toString()} - {props.end.toString()} */}
              </ModalHeader>

              <ModalBody>
                <div className="flex gap-4">
                  <div className="w-full flex flex-col gap-4">
                    <CalendarAppointmentForm day={props.day} hourKey={props.hourKey} hoursItems={props.hoursItems} week={props.week}/>
                  </div>
                </div>
              </ModalBody>

              <ModalFooter>

                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>

                <Button
                  color="primary"
                  onPress={onClose}
                  type="submit"
                  form="addAppointment"
                >
                  Action
                </Button>

              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
