import {Avatar, Box, chakra, Divider, Flex, Spacer, VStack} from "@chakra-ui/react";
import {ChatRoom} from "../model/Chat";
import React from "react";

const Chat:React.FC<{chatList:ChatRoom[],displayId:string|undefined}> = (props)=>{

    return <Flex h="calc(100vh - 84px)">
        <Box borderRight="1px solid #cacaca" w="400px" h="100%" overflowY="scroll">
            <VStack divider={<Divider/>}>
                {
                    props.chatList.map(i=>{
                        return <Box>

                        </Box>
                    })
                }
            </VStack>
        </Box>
        <Box h="100%" overflowY="scroll" w="calc(100% - 400px)">
            <VStack display="block" w="full">
                <Box p={5}>
                    <Flex>
                        <Spacer/>
                        <Box>
                            <Avatar/>
                            <chakra.p>学生A</chakra.p>
                        </Box>
                    </Flex>
                    <Box pt={5}>
                        <Box borderRadius="10px" color="white" bgColor={"#04790d"} p={5}>
                            それってあなたの感想ですよね？
                        </Box>
                    </Box>
                </Box>
                <Box>
                    a
                </Box>
            </VStack>
        </Box>
    </Flex>
}

export default Chat
