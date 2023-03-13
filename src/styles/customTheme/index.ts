import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

import colors from './colors';
import fonts from './fonts';

const customTheme = extendTheme({
    styles: {
        global: (props: any) => ({
            body: {
                color: mode('blackAlpha.800', 'whiteAlpha.900')(props),
                bg: mode('white', 'blackAlpha.800')(props),
            },
        }),
    },
    fonts,
    colors,
    components : {
    },
});

export default customTheme;