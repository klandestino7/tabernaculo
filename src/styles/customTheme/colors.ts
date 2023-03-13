import { DeepPartial, Theme } from "@chakra-ui/react";

/** @extend additional colors here */
const extendedColors : DeepPartial<
    Record<string, Theme['colors']['blackAlpha']>
    >= {
    brand: {
        100: "#e1c2ff",
        200: "#422AFB",
        300: "#a03ffc",
        400: "#8c17fc",
        500: "#8200FF",
        600: "#3311DB",
        700: "#02044A",
        800: "#190793",
        900: "#11047A",
    },
    brandScheme: {
        100: "#e1c2ff",
        200: "#8c17fc",
        300: "#8c17fc",
        400: "#8c17fc",
        500: "#8200FF",
        600: "#3311DB",
        700: "#02044A",
        800: "#190793",
        900: "#02044A",
    },
    brandTabs: {
        100: "#e1c2ff",
        200: "#8200FF",
        300: "#8200FF",
        400: "#8200FF",
        500: "#8200FF",
        600: "#3311DB",
        700: "#02044A",
        800: "#190793",
        900: "#02044A",
    },
    secondaryGray: {
        100: "#E0E5F2",
        200: "#E1E9F8",
        300: "#F4F7FE",
        400: "#E9EDF7",
        500: "#8F9BBA",
        600: "#A3AED0",
        700: "#707EAE",
        800: "#707EAE",
        900: "#1B2559",
    },
    red: {
        100: "#FEEFEE",
        500: "#EE5D50",
        600: "#E31A1A",
    },
    blue: {
        50: "#EFF4FB",
        500: "#3965FF",
    },
    orange: {
        100: "#FFF6DA",
        500: "#FFB547",
    },
    green: {
        100: "#E6FAF5",
        500: "#01B574",
    },
    navy: {
        50: "#d0dcfb",
        100: "#aac0fe",
        200: "#a3b9f8",
        300: "#728fea",
        400: "#3652ba",
        500: "#1b3bbb",
        600: "#24388a",
        700: "#1B254B",
        800: "#111c44",
        900: "#0b1437",
    },
    gray: {
        100: "#FAFCFE",
    },
}



/** @override chakra colors here */
const overrideChakraColors: DeepPartial<Theme["colors"]> = {};

const colors = {
    ...overrideChakraColors,
    ...extendedColors,
};

export default colors;