import Head from 'next/head'
import Image from 'next/image'

import { 
    SimpleGrid,
    Box,
    Heading,
    Text,
    Container
} from "@chakra-ui/react";
import BanksAccount from '@/components/Contribuir/BanksAccount';
import Grupos from '@/components/Conectar/Grupos';

export default function Conectar() {
    return (
        <main>
            <Grupos />
        </main> 
    )
}


