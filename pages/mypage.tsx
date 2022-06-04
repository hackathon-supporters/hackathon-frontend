import {
    StackDivider,
    VStack,
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
import Navigation from "../component/Navigation";

const MyPage:NextPage = ()=>{
    return <Box>
        <Navigation/>
        <Box display="flex" justifyContent="center" w={"full"} h="100vh">
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
                <VStack divider={<StackDivider borderColor='gray.200' />} spacing={4} align='stretch'>
                    <Box h='40px' bg='pink.100'>
                        <Avatar size='sm' name='company' src='https://pbs.twimg.com/profile_images/1161189849048600576/u_k9IPM2_400x400.jpg' />
                        株式会社ウカツキコデマヌシ
                    </Box>
                </VStack>
            </Box>
        </Box>
    </Box>;
}

export default MyPage
