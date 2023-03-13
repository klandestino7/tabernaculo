import Image from 'next/image'

import { 
    SimpleGrid,
    Box,
    Heading,
    Text,
    Container
} from "@chakra-ui/react";

export default function BanksAccount()
{
    return (
        <Container 
            background="black"
            // backgroundSize="cover"
            // backgroundPosition="center"
            w="full"
            maxW="full"
            color="white"
        >
            <Container maxWidth="1600px">
                <SimpleGrid columns={[1, 1, 3]} spacing='40px' padding="100px 20px">
                    <Box maxW="400px">
                        <Heading as='h2' size='3xl'>
                            Formas de contribuir
                        </Heading>
                    </Box>
                    <Box>
                        <Text
                            fontSize="20px"
                            fontWeight="bold"
                        >
                            Pix
                        </Text>
                        <Text
                            fontSize="15px"
                        >
                            222.222.222.222
                        </Text>
                    </Box>
                    <Box>
                        <Text>
                            Qrcode
                        </Text>
                    </Box>
                </SimpleGrid>
            </Container>
        </Container>
    )
}