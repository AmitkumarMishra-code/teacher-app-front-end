import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { ChakraProvider } from '@chakra-ui/react';
import App from './components/App';

ReactDOM.render( <
    ChakraProvider >
    <
    App / >
    <
    /ChakraProvider> ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals