import { Text, Wrap, Tag, WrapItem } from "@chakra-ui/react";

export default function Technologies({technologies}) {
    return (
        <Wrap>
            <WrapItem>
                <Text as="b">Technologies:</Text>
            </WrapItem>
            {technologies.map((technology, index) => {
                return (
                    <WrapItem key={index}>
                        <Tag key={index}>{technology}</Tag>
                    </WrapItem>
                )
            })}
        </Wrap>
    )
}