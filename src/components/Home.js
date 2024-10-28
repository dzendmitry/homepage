import { Avatar, Flex, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { faGolang } from "@fortawesome/free-brands-svg-icons";
import { faBrain, faCircleNodes, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
    return (
        <Flex
        id="home-section"
        minHeight="100vh" 
        bg="gray.200" 
        pt="20" 
        justifyContent="center" 
        alignItems="center">
            <Stack 
            direction={{base: "column", md: "row"}}
            p={10}
            m={5}
            spacing={7}
            bg="white"
            borderRadius={10}
            boxShadow="3px 3px 10px grey">
                <Avatar name='Dmitrii Zenin' size="2xl" src={require('../img/avatar.jpg')} />
                <VStack alignItems="left">
                    <Heading as="h3" size="lg" color="#454545" pb="2">Dmitry Zenin</Heading>
                    <Text align="justify" maxW={1024}>I’m a dedicated <b>Engineering Team Lead</b> with a strong passion for building scalable solutions, team leadership, and continuous learning in emerging tech. My journey through diverse roles has shaped me into a well-rounded leader and developer, skilled in <b>Golang</b><FontAwesomeIcon icon={faGolang} style={{color: "#3f99de"}} size="lg"/> and experienced in creating <b>high-performance backend systems</b><FontAwesomeIcon icon={faServer} style={{color: "#36ab53"}} size="lg"/>.</Text>
                    <Text align="justify" maxW={1024}>In my current role, I lead a cross-functional team where I focus on talent development, fostering collaboration, and aligning project goals with technical excellence. I’ve enjoyed success in previous roles as well, developing video platforms, SEO analytics, and cloud-based telephony services that handle high volumes of data with efficiency.</Text>
                    <Text align="justify" maxW={1024}>Beyond work, I’m excited by advancements in <b>AI</b><FontAwesomeIcon icon={faBrain} style={{color: "#fd7a7a"}} size="lg"/>, <b>scalable architectures</b><FontAwesomeIcon icon={faCircleNodes} style={{color: "#97a112"}} size="lg"/>, and anything that pushes the boundaries of innovation. Whether contributing to a team or leading one, I’m motivated to make a real impact through technology and empower those around me to do the same.</Text>
                </VStack>
            </Stack>
        </Flex>
    )
}