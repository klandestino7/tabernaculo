import Image from 'next/image'

import { 
    SimpleGrid,
    Box,
    Heading,
    Text,
    Container,
    Button
} from "@chakra-ui/react";

export default function Grupos()
{
    
    return (
        <Container 
            background="URL(./images/white-pattern.jpg) 50% + 50% no-repeat"
            backgroundSize="cover"
            backgroundPosition="center"
            w="full"
            maxW="full"
        >
            <Container maxWidth="1600px"
                display="flex"
                flexDirection="column"
                justifyContent="space-around"
                alignItems="center"

                padding="100px 20px"
            >
                <Box
                    maxW="900px"
                    color="blackAlpha.800"
                >
                    <Text
                        fontSize="20px"
                    >
                        GRUPOS DE CÉLULAS são os encontros da igreja preparados para você se conectar à igreja e à novas pessoas.
                        Nesse dia você terá a oportunidade de experimentar a cultura e o DNA da nossa casa, compreender nossa visão e ouvir uma mensagem transformadora.
                        Todos são bem-vindos!
                    </Text>

                    <Button
                        m="40px 0"
                        px={8}
                        color={'blackAlpha.800'}
                        colorScheme="black"
                        variant='outline'
                        rounded={'md'}
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                        }}
                    >
                        Quero participar
                    </Button>

                </Box>
            </Container>
        </Container>
    )
}