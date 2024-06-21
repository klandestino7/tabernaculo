
import { 
    SimpleGrid,
    Box,
    Heading,
    Image,
    Text,
    Container
} from "@chakra-ui/react";

export default function BanksAccount()
{
    return (
        <Container 
            background="#0C0C0C"
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
                        <Box>
                            <Text
                                fontSize="20px"
                                fontWeight="bold"
                            >
                                Banco Itaú - Conta
                            </Text>
                            <Text
                                fontSize="15px"
                            >
                                Agência 8984
                            </Text>
                            <Text
                                fontSize="15px"
                            >
                                Conta corrente 30340-7 
                            </Text>
                            <Text
                                fontSize="15px"
                            >
                                Poupança 30340-7/500
                            </Text>
                        </Box>
                        <Box>
                            <Text
                                fontSize="20px"
                                fontWeight="bold"
                            >
                                Chave pix
                            </Text>
                            <Text
                                fontSize="15px"
                            >
                                f63e449c-9f6d-42cf-8053-a49a55e2abd2
                            </Text>
                        </Box>
                    </Box>
                    <Box>
                        <Text>
                            Qrcode
                        </Text>
                        <Image src={"./images/qrcode.jpg"} width={200} alt="qrcode-pix" />
                    </Box>
                </SimpleGrid>
            </Container>
        </Container>
    )
}