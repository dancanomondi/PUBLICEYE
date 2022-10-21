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
    document.getElementById('input3').value='';
    document.getElementById("input4").value = "";
    document.getElementById("input5").value = "";
    document.getElementById("input6").value='';
    document.getElementById('input 7').value='';
  
  }
  console.log(brayo);
  
  const Reportpage = () => {
    
    return (
        
      <Box overflowY="scroll" height={1180}  backgroundImage={brayo}>
        <MainNavigation/>
          <Box pb='30px' >
            <Text fontSize="1.5em" textAlign="left" fontWeight="bold">
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
            
            
            
                  <FormControl pb='30px'>
                    <FormLabel> Your Name </FormLabel>
                    <Input
                      width="400px"
                      bg="white"
                      placeholder="Enter your name"
                      id="input1"
                    />
                  </FormControl>
                  
                  <FormControl isRequired pb='30px'>
                    <FormLabel>Contact</FormLabel>
                    <Input
                      width="400px"
                      bg="white"
                      placeholder="Enter your Phone Number/Email"
                      id="input2"
                    />
                  </FormControl>
            
                  <FormControl isRequired pb='30px'>
                    <FormLabel>Date of crime [DD/MM/YYYY]</FormLabel>
                    <Input
                      width="400px"
                      bg="white"
                      placeholder="DD/MM/YYYY "
                      id= "input3"
                    />
                  </FormControl>
                 <FormControl isRequired pb='30px'>
                  <FormLabel>Location of crime</FormLabel>
            
            <Select  width="400px" id='input4' placeholder ='Please select crime location'>
            
              <option value="Gatundu North"> Gatundu North </option>
              <option value="Suicide">Gatundu South</option>
              <option value="Githunguri">Githunguri</option>
              <option value="Juja">Juja</option>
              <option value="Kabete">Kabete</option>
              <option value="Kiambaa">Kiambaa</option>
              <option value="Kiambu">Kiambu</option>
              <option value="Kikuyu">Kikuyu</option>
              <option value='Lari'>Lari</option>
              <option value='Limuru'>Limuru</option>
              <option value='Ruiru'>Ruiru</option>
              <option value='Lari'>Lari</option>
              <option value='Thika East'>Thika East</option>
              <option value='Thika West'>Thika West</option>
            </Select>
          </FormControl>

          <FormControl isRequired pb='30px'>
                    <FormLabel>Specific Location Description</FormLabel>
                    <Input
                      width="400px"
                      bg="white"
                      placeholder="Enter location specifics"
                      id="input7"
                    />
                  </FormControl>
  
                
            
                        <FormControl isRequired align='left' pb='30px'>
                    <FormLabel>Crime</FormLabel>
            
              <Select  width="400px" id='input5' placeholder ='Please select crime'>
              
                <option value="terrorism"> Terrorism </option>
                <option value="suicide">Suicide</option>
                <option value="burglary">Burglary</option>
                <option value="domestic violence">Domestic violence</option>
                <option value="child abuse">Child Abuse</option>
                <option value="robbery with violence">Robbery with violence</option>
                <option value="homicide">Homicide</option>
                <option value="arson">Arson</option>
                <option value='sexual harassment'>Sexual Harrasment</option>
              </Select>
            </FormControl>
            <FormControl isRequired align='left' pb='30px'>
                    <FormLabel>Select gender of the offender</FormLabel>
            
              <Select  width="400px" id='input6' placeholder ='Sex'>
              
                <option value="male"> Male </option>
                <option value="female">Female</option>
              </Select>
            </FormControl>
            <FormControl isRequired>
                    <FormLabel>Select file to upload</FormLabel>
            <Box align="left" pb="90px">
            <UploadButton uploadToken="YOUR_UPLOAD_TOKEN">Choose file</UploadButton>
            </Box>
            </FormControl>
            <Box align="left">
                              <Button marginRight={70} colorScheme="blue" variant="outline" onClick={ClearFields}>
                  Cancel
                </Button>
                <Button colorScheme="blue">Submit</Button>
                            </Box>
          </Box>
        
      </Box>
    );
  };
  
  export default Reportpage;