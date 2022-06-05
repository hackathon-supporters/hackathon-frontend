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
import {Profile} from "../model/Profile";
import {useEffect,useState} from "react";
import {useRecoilState} from "recoil";
import {NextRouter, useRouter} from "next/router";
import {loginStatusAtom} from "../atom/loginstatus";
import {LoginToken} from "../model/LoginToken";

const visitEditprofile = (router:NextRouter)=>{

    router.push("/editprofile");
};
const ApplyChatting = (router:NextRouter,he:string)=>{
    const fd = new FormData();
    fd.set("email",he);
    const r = fetch(`https://matchquiter.herokuapp.com/api/v1/recouces/request/${he}`,{
        method: "POST",
        body: fd,
    })
}
const MyPage:NextPage = ()=>{
    const router = useRouter();
    const [me,setMe] = useRecoilState(loginStatusAtom);
    const [profile,setProfile] = useState<Profile>({avatar: "", histories: [{
            company: {logoicon: "", id: "364364", companyname: "Microsoft"},
            endMonth: 0,
            endYear: 0,
            position: "CEO",
            startMonth: 0,
            startYear: 0
        }], id: "114514", name: "TaroTanaka"});
    if(me && me.id===profile.id){
        return <Box>
            <Navigation/>
            <Box display="flex" justifyContent="center" w={"full"} h="100vh">
                <Box pt="100px">
                    <Flex justifyContent="space-between" h="128px" w={"600px"}>
                        <Avatar size='2xl' src={profile.avatar} />
                        <Center>
                            <chakra.h1 fontSize="30px">{profile.name}</chakra.h1>
                        </Center>
                        <Center>
                            <Button onClick = {()=>{visitEditprofile(router)}} colorScheme='green'>プロフィールを編集</Button>
                        </Center>
                    </Flex>
                    <VStack divider={<StackDivider borderColor='gray.200' />} spacing={4} align='stretch'>
                        {/*<Box h='40px' bg='pink.100'>*/}
                        {/*    <Avatar size='sm' name='company' src='https://pbs.twimg.com/profile_images/1161189849048600576/u_k9IPM2_400x400.jpg' />*/}
                        {/*    株式会社ウカツキコデマヌシ*/}
                        {/*</Box>*/}
                        {
                            profile.histories.map(i=>{
                                return <Box h='40px' bg='pink.100'>
                                    <Avatar size='sm' src={i.company.logoicon} />
                                    {i.company.companyname}
                                    :
                                    {i.startMonth}-{i.startYear}~{i.endMonth}-{i.endYear}
                                    ({i.position})
                                </Box>
                            })
                        }
                    </VStack>
                </Box>
            </Box>
        </Box>;
    }
    else {
        return <Box>
            <Navigation/>
            <Box display="flex" justifyContent="center" w={"full"} h="100vh">
                <Box pt="100px">
                    <Flex justifyContent="space-between" h="128px" w={"600px"}>
                        <Avatar size='2xl' src={profile.avatar}/>
                        <Center>
                            <chakra.h1 fontSize="30px">{profile.name}</chakra.h1>
                        </Center>
                        <Center>
                            <Button onClick={()=>{ApplyChatting(router,profile.id)}} colorScheme='blue'>まずは話を聞いてみる</Button>
                        </Center>
                    </Flex>
                    <VStack divider={<StackDivider borderColor='gray.200'/>} spacing={4} align='stretch'>
                        {/*<Box h='40px' bg='pink.100'>*/}
                        {/*    <Avatar size='sm' name='company' src='https://pbs.twimg.com/profile_images/1161189849048600576/u_k9IPM2_400x400.jpg' />*/}
                        {/*    株式会社ウカツキコデマヌシ*/}
                        {/*</Box>*/}
                        {
                            profile.histories.map(i => {
                                return <Box h='40px' bg='pink.100'>
                                    <Avatar size='sm' src={i.company.logoicon}/>
                                    {i.company.companyname}
                                    :
                                    {i.startMonth}-{i.startYear}~{i.endMonth}-{i.endYear}
                                    ({i.position})
                                </Box>
                            })
                        }
                    </VStack>
                </Box>
            </Box>
        </Box>;
    }
}

export default MyPage
