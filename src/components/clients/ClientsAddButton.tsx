"use client"

import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { FaPlus } from "react-icons/fa6";
import ClientsAddForm from "./ClientsAddForm";

export default function ClientsAddButton() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        radius="full"
        className="h-12 w-12 flex items-center justify-center p-0 min-w-0 absolute bottom-8 right-8"
        onPress={onOpen}
      >
        <FaPlus />
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>

              <ModalBody>
                <div className="flex gap-4">
                  <div className="w-full flex flex-col gap-4">
                    <ClientsAddForm />
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
                  form="addClient"
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
