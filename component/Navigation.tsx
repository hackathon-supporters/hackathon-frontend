import {Box, Center, chakra, Flex, IconButton, Spacer} from "@chakra-ui/react";
import {ChatIcon, EditIcon} from "@chakra-ui/icons";
import {useRouter} from "next/router";
import Link from "next/link";

const Navigation = ()=>{
    const router = useRouter();
    const VisitEdit=()=>{
        router.push("/editprofile");
    }
    const VisitChat=()=>{
        router.push("/chat");
    }
    return <Box borderBottom="1px solid #e9e9e9" w="full" h="64px">
        <Flex m={5}>
            <Center>
                <Link passHref={true} href="/">
                    <chakra.a>
                        MatchQuiter
                    </chakra.a>
                </Link>
            </Center>
            <Spacer/>
            <IconButton mr={3} onClick={()=>{VisitEdit()}} aria-label={"edit"}>
                <EditIcon/>
            </IconButton>
            <IconButton onClick={()=>{VisitChat()}} aria-label={"chat"}>
                <ChatIcon/>
            </IconButton>
        </Flex>
    </Box>
}

export default Navigation
