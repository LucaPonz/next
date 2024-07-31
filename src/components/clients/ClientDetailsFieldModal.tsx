import { Button } from "@nextui-org/button";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/modal";
import ClientsDetailsFieldForm from "./ClientsDetailsFieldForm";
import { Client } from "@prisma/client";

export default function ClientsDetailsFieldModal(props:{
    field: string,
    selectedClient: Client,
    isOpen: boolean,
    onOpenChange: () => void,
}) {

    return(
        <Modal isOpen={props.isOpen} onOpenChange={props.onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
              </ModalHeader>

              <ModalBody>
                    <ClientsDetailsFieldForm field={props.field} selectedClient={props.selectedClient}></ClientsDetailsFieldForm>
              </ModalBody>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>

                <Button
                  color="primary"
                  onPress={onClose}
                  type="submit"
                  form="nameEdit"
                >
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    )
}