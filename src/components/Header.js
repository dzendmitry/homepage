import { IconButton, Flex, HStack, Link, useDisclosure, Drawer, DrawerHeader, DrawerContent, DrawerCloseButton, VStack } from "@chakra-ui/react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
    faTelegramPlane,
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FiMenu } from "react-icons/fi";
import { useRef, useEffect } from "react";
import Navigation from "./Navigation";

const socials = [
    {
        icon: faEnvelope,
        url: "mailto: dzendmitry at gmail dot com",
    },
    {
        icon: faGithub,
        url: "https://github.com/dzendmitry",
    },
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com/in/dzendmitry",
    },
    {
        icon: faTelegramPlane,
        url: "https://t.me/dzendmitry",
    },
];

export default function Header() {

    /* Navi hide&show */

    const { isOpen, onOpen, onClose } = useDisclosure();

    /* Header scrolling */

    const headerRef = useRef(null);

    useEffect(() => {

        let lastKnownScrollPosition = 0;
        const handleScroll = (e) => {
            if (!headerRef.current) {
                return
            }
            let direction = lastKnownScrollPosition - window.scrollY;
            if (direction > 0) { // up
                headerRef.current.style.transform = "translateY(0)";
            } else if (direction < 0) { // down
                headerRef.current.style.transform = "translateY(-200px)";
            }
            lastKnownScrollPosition = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll)
        return () => {
          window.removeEventListener('scroll', handleScroll)
        }
      }, []);

    return (
        <Flex
        ref={headerRef}
        position="fixed"
        top="0"
        left="0"
        right="0"
        height="20"
        zIndex="1"
        bg="#fff"
        borderBottomWidth="1px"
        borderBottomColor="gray.300"
        alignItems="center"
        justifyContent="space-between"
        pl="5"
        pr="5"
        translateY={0}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out">
            <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
            variant="outline"
            aria-label="open menu"
            icon={<FiMenu />}/>
            <HStack
            display={{ base: "none", md: "flex" }}
            spacing={8}>
                <Navigation />
            </HStack>
            <Drawer
            autoFocus={false}
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            size="full">
                <DrawerContent>
                    <DrawerHeader>Navigation</DrawerHeader>
                    <VStack spacing={8}>
                        <Navigation onClose={onClose}/>
                    </VStack>
                    <DrawerCloseButton size="2x" />
                </DrawerContent>
            </Drawer>
            <HStack
            spacing={8}>
                {socials.map((social, index) => {
                    return (
                        <li key={index} style={{listStyle: "none"}}>
                        <Link href={social.url} isExternal><FontAwesomeIcon icon={social.icon} size="2x" /></Link>
                        </li>
                    )
                })}
            </HStack>
        </Flex>
    );
}