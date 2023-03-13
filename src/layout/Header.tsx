import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    AspectRatio,
    Image
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import SocialButton from '../components/SocialButton';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <>
            <Collapse 
                in={isOpen} 
                animateOpacity
            >
                <MobileNav />
            </Collapse>
            <Box>
                <Box
                    w="100%"
                    h="470px"
                    position="absolute"
                    top="0"
                    zIndex="-2"
                >
                    <AspectRatio 
                        ratio={16 / 4}
                        height="470px"
                    >
                        <video width="100%" height="470" autoPlay playsInline loop={true} muted={true} >
                            <source src="https://cdn.subsplash.com/videos/2CD49G/_source/77fb07bd-5f8b-40b0-b26d-efc9cf818ddb/video.mp4" type="video/mp4" />
                        </video>
                    </AspectRatio>
                </Box>

                
                <Flex
                    bg={"transparent"}
                    color={useColorModeValue('whiteAlpha.900', 'white')}
                    minH={'470px'}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    borderBottom={1}
                    borderColor={useColorModeValue('gray.200', 'gray.900')}
                    align={'center'}
                    justifyContent="space-between"
                    direction="column"
                    padding="0 50px"
                    zIndex="10"
                >
                    <Flex
                        display={{ base: 'flex', md: 'none' }}
                        p="2px"
                        m="15px"
                        background="black"
                    >
                        <IconButton
                            onClick={onToggle}
                            icon={
                                isOpen ? <CloseIcon w={5} h={5} /> : <HamburgerIcon w={8} h={8} />
                            }
                            variant={'ghost'}
                            aria-label={'Toggle Navigation'}
                        />
                    </Flex>
                    
                    <Flex display={{ base: 'none', md: 'flex' }} p="20px">
                        <DesktopNav />
                    </Flex>

                    
                    <AspectRatio 
                        minWidth="330px"
                        ratio={16 / 4.5}
                    >
                        <Image
                            src="./images/logo.png"
                        />
                    </AspectRatio>

                    <Flex justify={{ base: 'center', md: 'start' }}
                        direction="column"
                        align="center"
                    >
                        <Stack direction={'row'} spacing={6} h="80px">
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
                    </Flex>

                </Flex>
            </Box>
        </>
        
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('whiteAlpha.900', 'white');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={4} >
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'md'}
                                textTransform="uppercase"
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            color="black"
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('gray.50', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'blackAlpha.600' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'blackAplha.600'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}
            position="absolute"
            top="60px"
            w="100%"
            zIndex="999"
        >
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Início',
        href: '#',
    },
    {
        label: 'Sobre nós',
        href: '#',
    },
    {
        label: 'Conectar',
        children: [
            {
                label: 'Explore Design Work',
                subLabel: 'Trending Design to inspire you',
                href: '#',
            },
            {
                label: 'New & Noteworthy',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
        ],
    },
    {
        label: 'Contribuir',
        href: '#',
    }
];