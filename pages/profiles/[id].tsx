import {Avatar, Box, Button, Center, chakra, Flex, StackDivider, VStack} from "@chakra-ui/react";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {Profile} from "../../model/Profile";
import Navigation from "../../component/Navigation";

const ProfilePage = ()=>{

    //user_id
    const {id} = useRouter().query

    const [profile,setProfile] = useState<Profile>()

    useEffect(()=>{
        (async ()=>{
            const r = await fetch(`https://matchquiter.herokuapp.com/api/v1/profile/who?user_id=${id}`)
            if(!r.ok){
                return
            }
            const j:Profile = await r.json()
            console.log(j)
            setProfile(j)
        })()
    },[])

    return profile && <Box>
        <Navigation/>
        <Box display="flex" justifyContent="center" w={"full"} h="100vh">
            <Box pt="100px">
                <Flex justifyContent="space-between" h="128px" w={"500px"}>
                    <Avatar size='2xl' name='aaaa' src={profile.avatar} />
                    <Center>
                        <chakra.h1 fontSize="30px">aaaa</chakra.h1>
                    </Center>
                    <Center>
                        <Button colorScheme='blue'>まずは話を聞いてみる</Button>
                    </Center>
                </Flex>
                <Box>
                    <Box pt={10} pb={10}>
                        <chakra.p fontWeight="bold" fontSize="25px">経歴</chakra.p>
                    </Box>
                    <VStack divider={<StackDivider borderColor='gray.200' />} spacing={4} align='stretch'>
                        {
                            profile.histories.map(i=>{
                                return <Box>
                                    <Flex>
                                        <Avatar size='sm' name='company' src={i.company.logoicon} />
                                        <Center pl={3}>
                                            <chakra.p>{i.company.companyname}</chakra.p>
                                        </Center>
                                    </Flex>
                                    <Box pt={5}>
                                        <chakra.p>{`${i.position}として勤務`}</chakra.p>
                                        <chakra.p>{`${i.startYear}/${i.startMonth}から${i.endYear}/${i.endMonth}まで`}</chakra.p>
                                    </Box>
                                </Box>
                            })
                        }
                    </VStack>
                </Box>
            </Box>
        </Box>
    </Box>
}

export default ProfilePage
