import Head from 'next/head'
import Image from 'next/image'

import { 
    SimpleGrid,
    Box,
    Heading,
    Text,
    Container
} from "@chakra-ui/react";
import MessageBanner from '@/components/Contribuir/MessageBanner';
import BanksAccount from '@/components/Contribuir/BanksAccount';
import About from '@/components/SobreNos/About';

export default function Sobre() {
    return (
        <main>
            <About />
        </main> 
    )
}