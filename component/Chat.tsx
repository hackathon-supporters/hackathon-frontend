import {Avatar, Box, Center, chakra, Divider, Flex, Spacer, VStack} from "@chakra-ui/react";
import {ChatRoom} from "../model/Chat";
import React, {useState} from "react";
import {useRecoilState} from "recoil";
import {loginStatusAtom} from "../atom/loginstatus";
import {Profile} from "../model/Profile";

const Chat:React.FC<{users:{[key:string]:Profile},chatList:ChatRoom[],displayId?:string}> = (props)=>{

    const [profile,setProfile] = useRecoilState(loginStatusAtom);

    return <Flex h="calc(100vh - 84px)">
        <Box borderRight="1px solid #cacaca" w="400px" h="100%" overflowY="scroll">
            <VStack divider={<Divider/>}>
                {
                    props.chatList.map(i=>{
                        return <Flex p={5} w="full">
                            <Avatar src={i.society_id === profile?.id ? i.student_id : i.society_id}/>
                            <Center pl={3}>
                                <chakra.p>{
                                    i.society_id === profile?.id ?
                                        (props.users[i.student_id] ? props.users[i.student_id].name : "") :
                                        (props.users[i.society_id] ? props.users[i.society_id].name : "")
                                }</chakra.p>
                            </Center>
                        </Flex>
                    })
                }
            </VStack>
        </Box>
        <Box h="100%" overflowY="scroll" w="calc(100% - 400px)">
            <VStack divider={<Divider/>} display="block" w="full">
                {
                    props.chatList.map(i=>{
                        return <Box p={5}>
                            <Flex>
                                <Spacer/>
                                <Box>
                                    <Avatar/>
                                    <chakra.p>{props.users[i.student_id] ? props.users[i.student_id].name : ""}</chakra.p>
                                </Box>
                            </Flex>
                            <Box pt={5}>
                                <Box borderRadius="10px" color="white" bgColor={"#04790d"} p={5}>
                                    こんにちは
                                </Box>
                            </Box>
                        </Box>
                    })
                }
            </VStack>
        </Box>
    </Flex>
}

export default Chat
