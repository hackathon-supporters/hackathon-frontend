import type {NextPage} from "next";
import {Box, Button, Center, chakra, Input} from "@chakra-ui/react";

const SignUpPage:NextPage = ()=>{
    return <Center w={"full"} h="100vh">
        <Box border="solid 1px #f0f0f0" w={"400px"} h={"500px"}>
            <chakra.h1 pt={14} fontSize="30px" textAlign="center">ユーザー登録</chakra.h1>
            <Box pt={20}>
                <Box p={5}>
                    <Input placeholder="メールアドレス"/>
                </Box>
                <Box p={5}>
                    <Input type="password" placeholder="パスワード"/>
                </Box>
            </Box>
            <Center pt={10} pl={5} pr={5}>
                <Button colorScheme="green" w={"full"}>
                    登録
                </Button>
            </Center>
        </Box>
    </Center>
}
export default SignUpPage
