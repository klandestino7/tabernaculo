import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';
import SocialButton from '../components/SocialButton';

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
            w="full"
            display="flex"
            justifyContent="center"
        >
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}
            >
                <Text>Tabernáculo das Nações - Balneário Camboriú</Text>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Instagram'} href={'https://www.instagram.com/tabernaculobc/'}>
                        <FaInstagram />
                    </SocialButton>
                    <SocialButton label={'Twitter'} href={'https://twitter.com/TabernaculoG12'}>
                        <FaTwitter />
                    </SocialButton>
                    <SocialButton label={'YouTube'} href={'https://www.youtube.com/@tabernaculodasnacoes6474'}>
                        <FaYoutube />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
}