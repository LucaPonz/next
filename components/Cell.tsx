import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Time } from "@internationalized/date";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { RadioGroup, Radio } from "@nextui-org/radio";
import { Input } from "@nextui-org/input";
import { useContext } from "react";
import { UseAppointmentsContext } from "@/app/hooks/hooks";

export default function Cell(props: { startHour: number, day: Date }) {

  const appointmentContext = UseAppointmentsContext()

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    target.classList.toggle("bg-gray-100");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const start = new Date(props.day.setUTCHours(props.startHour, 0, 0))
    const end = new Date(props.day.setUTCHours(props.startHour + 1, 0, 0))
    console.log(start)
    const newAppointment = {
      start: start.toISOString() as string,
      end: end.toISOString() as string,
      id: Math.random().toString() as string,
      title: formData.get("title") as string,
    };
    console.log(newAppointment)
    appointmentContext.handleAddAppointment(newAppointment)
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const items: number[] = [];
  for (let i = props.startHour; i <= 24; i++) {
    items.push(i);
  }

  return (
    <>
      <Button
        className="basis-[14.285%] border-l border-gray-200 h-12 border-b rounded-none"
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
                    <div className="flex flex-col gap-8">

                      <form id="addAppointment" onSubmit={handleSubmit}>
                        <Input
                          key="title"
                          type="text"
                          label="Titolo"
                          labelPlacement="outside"
                          name="title"
                        />
                        <Input
                          key="id"
                          type="text"
                          label="Titolo"
                          labelPlacement="outside"
                          name="id"
                        />

                        {/* <RadioGroup>
                          <Radio value="buenos-aires">Lezione Singola</Radio>
                          <Radio value="sydney">Lezione a Duetto</Radio>
                        </RadioGroup> */}

                        <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">

                          <Select
                            labelPlacement="outside"
                            label="Start"
                            className="max-w-xs"
                            defaultSelectedKeys={[]}
                            name="start"
                          >
                            {items.map((item) => (
                              <SelectItem key={item} value={item}>
                                {String(Math.floor((item * 60) / 60)).padStart(
                                  2,
                                  "0"
                                ) +
                                  " : " +
                                  String((item * 60) % 60).padStart(2, "0")}
                              </SelectItem>
                            ))}
                          </Select>

                          <Select
                            labelPlacement="outside"
                            label="End"
                            // placeholder="Select an animal"
                            className="max-w-xs"
                            defaultSelectedKeys={[String(props.startHour + 1)]}
                            name="end"
                          >
                            {items.map((item) => (
                              <SelectItem key={item} value={item}>
                                {String(Math.floor((item * 60) / 60)).padStart(
                                  2,
                                  "0"
                                ) +
                                  " : " +
                                  String((item * 60) % 60).padStart(2, "0")}
                              </SelectItem>
                            ))}
                          </Select>

                        </div>

                        <Button
                          color="danger"
                          variant="light"
                          onPress={onClose}
                        >
                          Close
                        </Button>
                        <Button color="primary" onPress={onClose} type="submit" form="addAppointment">
                          Action
                        </Button>

                      </form>
                    </div>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
