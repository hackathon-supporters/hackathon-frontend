import {Box, Center, Flex, IconButton, Spacer} from "@chakra-ui/react";
import {ChatIcon} from "@chakra-ui/icons";

const Navigation = ()=>{
    return <Box borderBottom="1px solid #e9e9e9" w="full" h="64px">
        <Flex m={5}>
            <Center>
                <Box>
                    MatchQuiter
                </Box>
            </Center>
            <Spacer/>
            <IconButton aria-label={"chat"}>
                <ChatIcon/>
            </IconButton>
        </Flex>
    </Box>
}

export default Navigation
