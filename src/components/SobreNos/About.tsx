import Image from 'next/image'

import { 
    SimpleGrid,
    Box,
    Heading,
    Text,
    Container
} from "@chakra-ui/react";

export default function About()
{
    
    return (
        <Container 
            background="URL(./images/white-pattern.jpg) 50% + 50% no-repeat"
            backgroundSize="cover"
            backgroundPosition="center"
            color="#0C0C0C"
            w="full"
            maxW="full"
        >
            <Container maxWidth="1600px">
                <SimpleGrid columns={[1, 1, 3]} spacing='40px' padding="100px 20px">
                    <Box maxW="400px">
                        <Heading as='h1' size='4xl'>
                            Quem Somos
                        </Heading>
                    </Box>
                    <Box>
                        <Text>
                            Somos uma igreja que tem como base a Palavra de Deus e o amor que Jesus nos ensinou.
                            Acreditamos que cada pessoa é importante e tem um papel fundamental na construção do Reino de Deus.
                            Por isso, buscamos acolher a todos de braços abertos, sem distinção de raça, gênero,
                            classe social ou qualquer outra característica que possa separar as pessoas.
                            <br/>
                            <br/>
                            Somos uma comunidade que valoriza a oração e a adoração.
                            Buscamos ter um relacionamento íntimo com Deus através da leitura da Bíblia,
                            da meditação em Sua Palavra e da comunhão com o Espírito Santo. 
                        </Text>
                    </Box>
                    <Box>
                        <Text>
                            Nosso culto é uma oportunidade para louvarmos juntos e agradecermos a Deus pelas Suas bênçãos em nossas vidas.
                            <br/>
                            <br/>
                            Além disso, acreditamos que nossa fé deve ser expressa em ações concretas.
                            Por isso, estamos sempre empenhados em servir nossa comunidade e ajudar os necessitados.
                            Por fim, gostaria de destacar que somos uma família. Uma família que se apoia, se incentiva, se ama e se ajuda mutuamente.
                            Aqui, todos têm um lugar e são amados. Juntos, construímos uma comunidade forte e unida em Cristo Jesus.
                        </Text>
                    </Box>
                </SimpleGrid>
            </Container>
        </Container>
    )
}