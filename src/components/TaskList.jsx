import { List } from '@chakra-ui/react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <List spacing={3}>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
};

export default TaskList;