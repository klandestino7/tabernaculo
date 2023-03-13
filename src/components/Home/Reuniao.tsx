import { Button, ButtonProps, Flex, useColorModeValue, Heading, Text, Box } from '@chakra-ui/react';
import { useState } from 'react';

function randomColor() {
    return Math.floor(Math.random() * 5);
}

const colorList: string[] = [
    '#E53E3E',
    '#38A169',
    '#00B5D8',
    '#44337A',
    '#ED64A6',
];

export default function Reuniao(props: ButtonProps) {
    const [colorCode, setColorCode] = useState(colorList[randomColor()]);

    return (
        <Flex
            h="50vh"
            justifyContent="center"
            backgroundImage="./images/bg.jpg"
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            padding="30px 20px"
        >
            <Box
                maxW="500px"
                display="flex"
                flexDirection="column"
                justifyContent="space-around"
                alignItems="center"
                color="white"
            >
                <Box>
                    <Heading as='h2' size='xl' align="center">
                        Reuniões Dominicais
                    </Heading>

                    <Heading as='h4' size='md' align="center">
                        Domingo às 20h - Hotel Geranium, Av. Brasil, 2970 - Balneário Camboriú
                    </Heading>
                </Box>

                <Button
                    {...props}
                    px={8}
                    color={'white'}
                    variant='outline'
                    rounded={'md'}
                    _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                    }}
                    onClick={() => setColorCode(colorList[randomColor()])}>
                    Quero me inscrever
                </Button>


                <Text>
                    Entrada livre e gratuita. Clique para se inscrever!
                </Text>
            </Box>
            
        </Flex>
    );
}