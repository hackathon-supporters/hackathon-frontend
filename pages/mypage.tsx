import {
    Box,
    Button,
    Center,
    chakra,
    Input,
    Wrap,
    WrapItem,
    Avatar,
    AvatarBadge,
    AvatarGroup,
    Flex
} from "@chakra-ui/react";
import {NextPage} from "next";

const MyPage:NextPage = ()=>{
    return <Box display="flex" justifyContent="center" w={"full"} h="100vh">
        <Box pt="100px">
            <Flex justifyContent="space-between" h="128px" w={"600px"}>
                <Avatar size='2xl' name='aaaa' src='https://pbs.twimg.com/media/EZu_kWdUEAUW6gq.jpg' />
                <Center>
                    <chakra.h1 fontSize="30px">aaaa</chakra.h1>
                </Center>
                <Center>
                    <Button colorScheme='blue'>まずは話を聞いてみる</Button>
                </Center>
            </Flex>
            <Box pt="100px">
                aaa
            </Box>
        </Box>
    </Box>;
}

export default MyPage
