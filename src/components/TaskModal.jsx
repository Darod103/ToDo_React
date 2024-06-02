import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input
} from '@chakra-ui/react';

const TaskModal = ({ isOpen, onClose, task, setTask, onSave }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Task</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            value={task ? task.text : ''}
            onChange={(e) => setTask({ ...task, text: e.target.value })}
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onSave}>
            Save
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TaskModal;