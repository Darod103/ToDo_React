import {ListItem, Box, IconButton, Flex} from '@chakra-ui/react';
import { DeleteIcon,EditIcon } from '@chakra-ui/icons';

const TaskItem = ({task, index, onEdit, onDelete}) => {
    return (
        <ListItem>
            <Flex justify='space-between' align='center'>
                <Box flex='1'>{task}</Box>
                <Box>
                    <IconButton icon={<EditIcon />}
                    mr={2}
                    onClick={()=> onEdit(index)}
                    />
                    <IconButton 
                    icon={<DeleteIcon />}
                    onClick={()=> onDelete(index)}
                    />
                </Box>
            </Flex>
        </ListItem>
    );
};


export default TaskItem