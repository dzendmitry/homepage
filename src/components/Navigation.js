import { HStack, Link, Text } from "@chakra-ui/react";
import { faHouseUser, faDiagramProject, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navigation({onClose}) {

    const handleNavigation = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        if (onClose) {
            onClose();
        }
    };

    return (
        <>
            <Link href="#" onClick={handleNavigation("home")}>
                <HStack textAlign="center">
                    <FontAwesomeIcon icon={faHouseUser} size="2x" style={{color: "#004166"}} /><Text as="b">Home</Text>
                </HStack>
            </Link>
            <Link href="/#work" onClick={handleNavigation("work")}>
                <HStack textAlign="center">
                    <FontAwesomeIcon icon={faBriefcase} size="2x" style={{color: "#004166"}} /><Text as="b">Work</Text>
                </HStack>
            </Link>
            <Link href="/#projects" onClick={handleNavigation("projects")}>
                <HStack textAlign="center">
                    <FontAwesomeIcon icon={faDiagramProject} size="2x" style={{color: "#004166"}} /><Text as="b">Projects</Text>
                </HStack>
            </Link>
        </>
    )
}