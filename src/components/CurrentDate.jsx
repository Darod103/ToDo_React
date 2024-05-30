import { useState,useEffect } from "react";
import { Box,Text,Flex } from "@chakra-ui/react";
import ColorModeSwitcher from "./colorModeSwitcher";

const CurrentDate = () => {
    const [currentDate,setCurrentDate] = useState('');
   
    useEffect(() => {
        const date = new Date().toLocaleDateString('en-GB', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        });
        setCurrentDate(date);
      }, []);

      return (
        <Flex justifyContent="space-between">
        <Box textAlign="left" m="15px 15px">
          <Text fontSize="26px" fontWeight="bold" >
             {currentDate}
          </Text>
        </Box>
        <ColorModeSwitcher />
        </Flex>
      );

}

export default CurrentDate