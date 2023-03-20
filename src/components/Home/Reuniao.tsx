import { Button, ButtonProps, Flex, useColorModeValue, Heading, Text, Box, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';
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
    const router = useRouter();
    const [colorCode, setColorCode] = useState(colorList[randomColor()]);

    const moveToConnectPage = () => {
        router.push("/conectar");
    }

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
                    <Heading as='h2' size='xl' textAlign="center">
                        Reuniões Dominicais
                    </Heading>

                    <Heading as='h4' size='md' textAlign="center">
                        Domingo às 20h - Hotel Geranium, Av. Brasil, 2970 - Balneário Camboriú
                    </Heading>
                </Box>
                <Link
                    href={"https://chat.whatsapp.com/CEWokY2sSrs02gRjA0ShGG"}
                    target="_blank"
                >
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
                        >
                        Quero me conectar
                    </Button>
                </Link>

                <Text>
                    Entrada livre e gratuita.
                </Text>
            </Box>
            
        </Flex>
    );
}