import {Box, Center, Flex, IconButton, Spacer} from "@chakra-ui/react";
import {ChatIcon, EditIcon} from "@chakra-ui/icons";
import {useRouter} from "next/router";
import {loginStatusAtom} from "../atom/loginstatus";

const Navigation = ()=>{
    const router = useRouter(loginStatusAtom);
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
            <IconButton onClick={()=>{VisitEdit()}} aria-label={"edit"}>
                <EditIcon/>
            </IconButton>
            <Spacer/>
            <IconButton aria-label={"chat"}>
                <ChatIcon/>
            </IconButton>
        </Flex>
    </Box>
}

export default Navigation
