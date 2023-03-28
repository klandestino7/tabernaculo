import Image from 'next/image'

import { 
    SimpleGrid,
    Box,
    Heading,
    Text,
    Container
} from "@chakra-ui/react";

export default function MessageBanner()
{
    
    return (
        <Container 
            background="URL(./images/white-pattern.jpg) 50% + 50% no-repeat"
            backgroundSize="cover"
            backgroundPosition="center"
            w="full"
            maxW="full"
        >
            <Container maxWidth="1600px">
                <SimpleGrid columns={[1, 1, 3]} spacing='40px' padding="100px 20px">
                    <Box maxW="400px">
                        <Heading as='h1' size='4xl'>
                            Adoração através
                            de ofertas.
                        </Heading>
                    </Box>
                    <Box>
                        <Text>
                            A primeira vez que o dízimo foi mencionado na Bíblia está registrado em Gênesis 14 onde Abrão 
                            (ainda não era Abraão), adorou a Deus pela vitória obtida numa guerra entre muitos reis da época. 
                            Um sacerdote, chamado Melquizedeque, admirado com a destreza e nobreza de Abrão, veio ao seu encontro. 
                            Abrão, viu Deus na pessoa de Melquizedeque e entendeu que este representava Deus. 
                            Nesse encontro, honrou-o com seus dízimos, como se honrando a Deus.
                            <br/>
                            <br/>
                            A segunda referência de dízimos encontramos em Gênesis 22 onde Jacó,
                            em sua experiência com Deus e anjos dos céus,
                            decidiu honrar a Deus com os dízimos.
                        </Text>
                    </Box>
                    <Box>
                        <Text>
                            Diante desses dois acontecimentos, entendemos que, uma das formas de adorarmos a Deus e honrá-Lo,
                            é entregarmos nossos dízimos e ofertas a Ele.
                            <br/>
                            <br/>
                            E como não O vemos, entregamos aos Seus representantes que se tornam
                            responsáveis diante de Deus no que tange a aplicações desses valores ou bens.
                            <br/>
                            <br/>
                            Nós acreditamos que as ofertas são uma forma direta de adoração a Deus.
                            <br/>
                            Nós amamos demonstrar com alegria a nossa gratidão e devoção a Deus
                            através de dízimos e ofertas  vindos das bênçãos que Deus tem nos entregado.
                        </Text>
                    </Box>
                </SimpleGrid>
            </Container>
        </Container>
    )
}