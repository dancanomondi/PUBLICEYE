import React from "react";
import { Box } from "@chakra-ui/react";

import UserCrime from "./userCrime";
import MainNavigation from "../../shared/pages/MainNavigation/MainNavigation";

import './userCrimes.css'

const UserCrimes = (props) => {
    if(props.items.length === 0){
        return(
            <Box className="center">
                <div >
                    <h2>No crimes reported </h2>        
                </div>
            </Box>
        )
    }
    return(
      <div>
          <MainNavigation/>
        <ul className="user-crimes  grid--4--cols"
        
        >
            {props.items.map(userCrime => (
              <UserCrime 
                key={userCrime.id} 
                id={userCrime.id} 
                image={userCrime.image}
                video={userCrime.video}
                name={userCrime.name}
                description = {userCrime.description}
               />
        ))}
        </ul>
      </div>
    )
    
}

export default UserCrimes; 