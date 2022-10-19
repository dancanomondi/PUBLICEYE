import React from 'react';
import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FaRegHeart } from 'react-icons/fa';
import { GiPoliceOfficerHead } from "react-icons/gi";
import {MdOutlineSafetyDivider} from "react-icons/md"

import './why.css'

interface WhyProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Reason = ({ title, text, icon }: WhyProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'blue.500'}
        rounded={'full'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

const Why = () => {
  return (
    <Box p={4} 
    className="why"
    fontFamily={"Rubik"}


    >
      <div>
            <h2 className='why-header center'
            fontWeight='400'
            >Why bother?</h2>
            <br/>
            <hr/>
      </div> 
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Reason
          icon={<Icon as={MdOutlineSafetyDivider} w={10} h={10} />}
          title={'Keep your neighborhood safe'}
          text={
            'Report every crime, and let police investigate it. Soon, your community will be of criminals. Ensure no criminals roll around freely when you have the evidence to keep them away'
          }
        />
        <Reason
          icon={<Icon as={GiPoliceOfficerHead} w={10} h={10} />}
          title={'Help Police'}
          text={
            'Provide the police with enough evidence for the current crimes they are solving by taking pictures and videos of crimes scenes. That way no criminals is released back to the society for lack of evidence.'
          }
        />
        <Reason
          icon={<Icon as={FaRegHeart} w={10} h={10} />}
          title={'Save Lives'}
          text={
            'Provide information that can prompt of police officers to potential crimes. Help police from stopping potential criminals'
          }
        />
      </SimpleGrid>
    </Box>
  );
}

export default Why; 