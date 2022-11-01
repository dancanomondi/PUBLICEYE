import React from "react";
import { Box,Text ,HStack,Flex, Image, VStack} from "@chakra-ui/react";
import MainNavigation from "../pages/MainNavigation/MainNavigation";
import criminalia from '../hero section/images/criminalia.jpg'
import witness from '../hero section/images/witness.PNG'
console.log(criminalia);
console.log(witness);
const HowItWorks = () => {
    return(
       <Box bgColor={'blue.100'} height='1200px'>
        <MainNavigation/>

       <Text fontWeight='extrabold'>How to use page</Text>
       <Text fontWeight={'bold'}>Please follow the following safety precautions</Text>
<Flex>
    <VStack>
    <Text fontStyle={'italic'} fontWeight='bold'>Step 1: Ensure you are at a safe distance from the active scene of crime</Text>
    <HStack>

<Box>
    <Image src={witness} pr='140px'  />
</Box>
<Box>
    <Image src={criminalia}/>
</Box>
   
</HStack>
    </VStack>

</Flex>



















       </Box>
    ); 
}

export default HowItWorks; 