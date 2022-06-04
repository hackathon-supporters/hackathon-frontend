import {Box, Button, Center, chakra, Input, Wrap, WrapItem, Avatar, AvatarBadge, AvatarGroup} from "@chakra-ui/react";
import {NextPage} from "next";

const MyPage:NextPage = ()=>{
    return <Center w={"full"} h="100vh">
        <Center w={"600px"} h="100vh">
        <Wrap>
            <WrapItem>
                <Avatar size='2xl' name='aaaa' src='https://pbs.twimg.com/media/EZu_kWdUEAUW6gq.jpg' />
            </WrapItem>
        </Wrap>
        <chakra.h1>aaaa</chakra.h1>
        <Button colorScheme='blue'>まずは話を聞いてみる</Button>
        </Center>
    </Center>;
}

export default MyPage
