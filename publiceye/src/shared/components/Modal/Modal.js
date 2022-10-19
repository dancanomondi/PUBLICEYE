import React, {useState} from "react";
import ReactDOM from "react-dom";

import { Container, Modal } from "@chakra-ui/react";

import './Modal.css'; 
import Button from "../Button/Button";

const MapModal = ({show, close, title, children}) => {

    return(
        ReactDOM.createPortal(
            <>
            {
                show ? 
                    <div className="modal">
                        <header className="modal_header" onClick={(e) => e.stopPropagation}>
                            <h2 className="modal_header-title">
                                {title}
                            </h2>
                        </header>
                        <main className="modal_content">
                            {children}
                        </main>
                        <footer className="modal_footer">
                            <Button onClick={close}>Close</Button>
                        </footer>                        
                    </div>
           
                : null
            }
            </>
            ,document.getElementById("modal-hook"))

        
  
        
    )
}

export default MapModal; 

