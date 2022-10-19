import React, {ReactElement, 
                useState, 
                useEffect, 
                ReactFragment 
            } from 'react';
import { useParams } from 'react-router-dom';

import {BiTimeFive} from 'react-icons/bi';
import {GrContactInfo} from 'react-icons/gr'; 
import {RiCriminalLine} from 'react-icons/ri'; 
import {FaRegSadCry} from 'react-icons/fa'; 
import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    Box, 
    IconButton, 
    useBreakpointValue,   
  } from '@chakra-ui/react';

import Button from '../../shared/components/Button/Button';
import { USERS } from "./../../data";
import CrimeList from './CrimeList';
import Modal from '../../shared/components/Modal/Modal'
import Map from '../../shared/components/Map/Map'

  
interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }

const getCrime =(id)=>USERS.find((crime)=>crime.id === id); 

const Crime = () => {
    const {id} = useParams(); 

    const [crime, setCrime] = useState({});
    
    useEffect(()=>{
        const data = getCrime(id); 
        setCrime(data||{})
    }, [id]);


    const[showMap, setShowMap] = useState(false); 

    const openMapHandler = () => setShowMap(true);

    const closeMapHandler = () => setShowMap(false);

  
    
    console.log(crime.coordinate)

  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={12}
          h={12}
          align={'center'}
          justify={'center'}
          rounded={'md'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
    return (
     <React.Fragment> 
      


         <Container className='crime-class' maxW={'6xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          
        <Flex>
            <Image
              rounded={'md'}
              alt={crime.name}
              src={crime.image}
              objectFit={'cover'}
            />
            
          </Flex>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.600'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.100', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              {crime.address} 
            
              
            </Text>
          
            <Heading>{crime.name}</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              {crime.long_description}
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
                <Feature
                icon={<Icon as={BiTimeFive} color={'blue.500'} w={6} h={6} />}
                iconBg={useColorModeValue('blue.100')}
                text={crime.time}
              />
           
             
              <Feature
                icon={<Icon as={GrContactInfo} color={'green.500'} w={6} h={6} />}
                iconBg={useColorModeValue('green.100')}
                text={`Reporter contact info: ${crime.contact}`}
              />
              <Feature
                icon={
                  <Icon as={RiCriminalLine} color={'blue.500'} w={6} h={6} />
                }
                iconBg={useColorModeValue('blue.100')}
                text={`Suspect: ${crime.suspect}`}
                
              />
                          <Feature
                icon={
                  <Icon as={FaRegSadCry} color={'green.500'} w={6} h={6} />
                }
                iconBg={useColorModeValue('green.100')}
                text={`Victim: ${crime.victim}`}
                
              />
            </Stack>
          </Stack>
        
        </SimpleGrid>
      </Container>
      <Container className='crime-actions' maxW={'6xl'} py={2}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={2}>
          <Modal 
                show={showMap} 
                close={closeMapHandler}
                title = {crime.address}
                >
                 
                  <Map 
                  center= { crime.coordinate } 
                   zoom= {16} />
          </Modal>
            
            
            <Button danger>DELETE CRIME!</Button>
            <Button inverse onClick={openMapHandler}>VIEW LOCATION ON MAP</Button>
            <Button>LAUCH INVESTIGATION</Button>
        </SimpleGrid>
    

      </Container>
     </React.Fragment>
    );
}

  export default Crime; 