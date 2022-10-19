import React from 'react';
import { Link } from 'react-router-dom';

import {Flex } from '@chakra-ui/react';

import './Button.css';

const Button = props => {
  if (props.href) {
    return (
      <a
        className={`button button--${props.size || 'default'} ${props.inverse &&
          'button--inverse'} ${props.danger && 'button--danger'}`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
     <Flex
     justifyContent="center" 
     alignItems="center"
     fontFamily={'Rubik'}     
     >
        <Link
            to={props.to}
            exact={props.exact}
            className={`button button--${props.size || 'default'} ${props.inverse &&
            'button--inverse'} ${props.danger && 'button--danger'}`}
            >
            { props.children}
        </Link>

     </Flex>
    );
  }
  return (


    <Flex 
    justifyContent="center" 
    alignItems="center"
    fontFamily={'Rubik'}
    >
    <button
    
      className={`button button--${props.size || 'default'} ${props.inverse &&
        'button--inverse'} ${props.danger && 'button--danger'}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
    </Flex>
 
  );
};

export default Button; 