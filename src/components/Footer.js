import { Flex, Text } from "@chakra-ui/react";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <Flex
        height="40px"
        bg="#bababa"
        justifyContent="center"
        alignItems="center">
            <Text>Powered by <FontAwesomeIcon icon={faReact} color="#0A7EA3" size="xl" /></Text>
        </Flex>
    )
}