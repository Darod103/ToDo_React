import  { useState, useEffect } from 'react';
import { Box, Button, Input, useDisclosure, Flex } from '@chakra-ui/react';
import TaskList from './components/TaskList';
import TaskModal from './components/TaskModal';



function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [currentTask, setCurrentTask] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    useEffect(() => {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
  
    const addTask = () => {
      if (newTask.trim()) {
        setTasks([...tasks, newTask.trim()]);
        setNewTask('');
      }
    };
  
    const deleteTask = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    };
  
    const editTask = (index) => {
      setCurrentTask({ text: tasks[index], index });
      onOpen();
    };
  
    const saveTask = () => {
      const updatedTasks = [...tasks];
      updatedTasks[currentTask.index] = currentTask.text;
      setTasks(updatedTasks);
      setCurrentTask(null);
      onClose();
    };
  
    return (
      <Box p={5} maxW="600px" mx="auto">
        <Flex direction={{ base: 'column', md: 'row' }} mb={4}>
          <Input
            placeholder="New task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            
            mr={{ base: 0, md: 2 }}
            mb={{ base: 2, md: 0 }}
            // flex="1"
          />
          <Button onClick={addTask}>Add Task</Button>
        </Flex>
        <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} />
        <TaskModal
          isOpen={isOpen}
          onClose={onClose}
          task={currentTask}
          setTask={setCurrentTask}
          onSave={saveTask}
        />
      </Box>
    );
  }
  
  export default App;