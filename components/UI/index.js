import React from 'react';
import ScreenUI from '@/components/UI/ScreenUI'
import { ChakraProvider } from '@chakra-ui/react'
import Modal from './Modal';
const index = () => {
    return (
        <>
            <ChakraProvider>
                <ScreenUI></ScreenUI>
                <Modal></Modal>
            </ChakraProvider>
            
        </>
    );
};

export default index;