import { Box, Container, Spinner } from "@chakra-ui/react";
import { ReactNode, useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout ({ children }: { children: React.ReactNode }) {

    return (
        <Container maxW="full" w="full" margin="0" padding="0" transition="0.75s ease-out">
            <Header />
            {children}
            <Footer />
        </Container>
    )
}