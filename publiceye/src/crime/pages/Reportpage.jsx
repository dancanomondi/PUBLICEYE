import React from "react";
import { UploadButton } from "@api.video/react-upload-button"
import {

  Box,
    Text,
    Input,
    Button,
    Select,
    FormControl,
    FormLabel,
  } from "@chakra-ui/react";
  import MainNavigation from "../../shared/pages/MainNavigation/MainNavigation";
  import brayo from '../../shared/hero section/images/brayo.jpg'
  function ClearFields() {
  
    document.getElementById("input1").value = "";
    document.getElementById("input2").value="";
    document.getElementById("input4").value = "";
    document.getElementById("input5").value = "";
  
  }
  console.log(brayo);
  
  const Reportpage = () => {
    
    return (
        
      <Box overflowY="scroll" h="100%" backgroundImage={brayo}>
        <MainNavigation/>
          <Box >
            <Text fontSize="1.5em" textAlign="left" fontWeight="bold" bgColor='blue.100'>
              Report crime
            
            </Text>
            <Text
              fontWeight="bold"
              paddingTop="3"
              paddingBottom="3"
              fontSize="18px"
              align="left"
            >
              Fill in the following information
            </Text>
            
            
            
                  <FormControl>
                    <FormLabel>Name </FormLabel>
                    <Input
                      width="400px"
                      bg="white"
                      placeholder="Enter your name"
                      id="input1"
                    />
                  </FormControl>
  
                  <FormControl isRequired>
                    <FormLabel>Location of crime</FormLabel>
                    <Input
                      width="400px"
                      bg="white"
                      placeholder="Enter location"
                      id= "input2"
                    />
                  </FormControl>
  
                  <FormControl isRequired>
                    <FormLabel>Phone Number/ Email</FormLabel>
                    <Input
                      width="400px"
                      bg="white"
                      placeholder="Enter contact"
                      id="input4"
                    />
                  </FormControl>
            
            
                        <FormControl isRequired>
                    <FormLabel>Crime</FormLabel>
                 
                  
            
            <Box align="left" pb="90px">
              <Select  width="400px" id='input5' placeholder ='Please select crime'>
              
                <option value="terrorism"> Terrorism </option>
                <option value="suicide">Suicide</option>
                <option value="burglary">Burglary</option>
                <option value="domestic violence">Domestic violence</option>
                <option value="child abuse">Child Abuse</option>
                <option value="robbery with violence">Robbery with violence</option>
                <option value="homicide">Homicide</option>
                <option value="arson">Arson</option>
              </Select>
            </Box>
            </FormControl>
            <FormControl isRequired>
                    <FormLabel>Select file to upload</FormLabel>
            <Box align="left" pb="90px">
            <UploadButton uploadToken="YOUR_UPLOAD_TOKEN">Choose file</UploadButton>
            </Box>
            </FormControl>
            <Box align="left">
                              <Button colorScheme="blue" variant="outline" onClick={ClearFields}>
                  Cancel
                </Button>
                <Button colorScheme="blue">Submit</Button>
                            </Box>
          </Box>
        
      </Box>
    );
  };
  
  export default Reportpage;