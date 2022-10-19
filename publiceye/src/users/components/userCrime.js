import React from 'react';
import {Link as Redirect} from 'react-router-dom'; 

import './userCrime.css'


import {
  Box, 
  Image, 
  Stack, 
  Flex,
  Spacer, 
  Text, 
  Badge, 
  Button, 

}
from '@chakra-ui/react'


const UserCrime = (props) => {


  return(

 
      <Box
          className='user-crime__box' 
          w="300px" rounded="4px" 
           overflow="hidden"
           boxShadow="0 3.2.rem 6.4rem rgba(0, 0, 0, 0.075)" 
           fontFamily={"Rubik"}
           mt={10}>
        <Image src={props.image}
               alt="Card Image" boxSize="200px"
               w={'100%'}
               >
        </Image>
        <Box p={5}>
          <Stack align="center">
            <Badge variant="solid" colorScheme="blue" 
              rounded="full" px={2}>
            {props.name}
            </Badge>
          
          </Stack>
          <Stack align="left">
            <Text fontWeight="light">
              {props.description}
            </Text>
          </Stack>
          <Flex>  
            <Spacer />
            <Redirect to={`/crimes/${props.id}`}>
            <Button variant="solid" 
              colorScheme="blue" size="sm">
                View More Details
            </Button>
            </Redirect>
          
          </Flex>
        </Box>
      </Box>

 
  ); 

}
export default UserCrime;