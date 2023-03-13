import { Button, ButtonProps, Flex, useColorModeValue, Heading, Text, Box } from '@chakra-ui/react';
import { useState } from 'react';

export default function ShortAbout(props: ButtonProps) {
    return (
        <Flex
            h="50vh"
            justifyContent="center"
            bgColor={`black`}
            padding="30px 15px"
            color="white"
        >
            <Box
                maxW="700px"
                display="flex"
                flexDirection="column"
                justifyContent="space-around"
                alignItems="center"
            >
                <Box>
                    <Heading as='h2' size='xl' align="center">
                        "Não por força, nem pela violência, mas pelo Espírito Santo."
                    </Heading>

                    <Heading as='h4' size='md' align="center">
                        ZACARIAS 4:6
                    </Heading>
                </Box>
            </Box>
            
        </Flex>
    );
}