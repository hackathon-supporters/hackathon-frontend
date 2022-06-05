import {Box, Center, Flex, IconButton, Spacer} from "@chakra-ui/react";
import {ChatIcon, EditIcon} from "@chakra-ui/icons";
import {useRouter} from "next/router";

const Navigation = ()=>{
    const router = useRouter();
    const VisitEdit=()=>{
        router.push("/editprofile");
    }
    return <Box borderBottom="1px solid #e9e9e9" w="full" h="64px">
        <Flex m={5}>
            <Center>
                <Box>
                    MatchQuiter
                </Box>
            </Center>
            <Spacer/>
            <IconButton mr={3} onClick={()=>{VisitEdit()}} aria-label={"edit"}>
                <EditIcon/>
            </IconButton>
            <IconButton aria-label={"chat"}>
                <ChatIcon/>
            </IconButton>
        </Flex>
    </Box>
}

export default Navigation
