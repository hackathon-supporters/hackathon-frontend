import type {NextPage} from "next";
import {Avatar, Box, Center, chakra, Divider, Flex, Spacer, VStack, Wrap} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {Company} from "../../../model/Company";
import {useRouter} from "next/router";
import {Profile} from "../../../model/Profile";
import Link from "next/link";
import Navigation from "../../../component/Navigation";

const BelongCompanyPeoples:NextPage = ()=>{

    const {company_id} = useRouter().query

    const [company,setCompany] = useState<Company>();

    const [peoples,setPeoples] = useState<Profile[]>([])

    useEffect(()=>{

    },[])

    return <Box pb={10}>
        <Navigation/>
        <Center w="full">
            <Box w={"500px"}>
                <Flex pl={5} pr={5} pt="100px">
                    <Avatar size="2xl" src={company?.logoicon}/>
                    <Spacer/>
                    <Center>
                        <chakra.h1 fontSize="25px">{company?.companyname}に所属していた社員の方々</chakra.h1>
                    </Center>
                </Flex>
                <Box pt={10}>
                    <VStack divider={<Divider/>} p={5} borderWidth="1px" borderRadius="10px">
                        {
                            peoples.map(i=>{
                                return <Box _hover={{textDecoration:"underline"}} w="full" pt={5} pb={3}>
                                    <Link href={`/profiles/${i.id}`}>
                                        <a>
                                            <Flex>
                                                <Avatar size="2xl" src={company?.logoicon}/>
                                                <Center pl={5}>
                                                    <Box>
                                                        <chakra.p fontSize="25px">{i.name}</chakra.p>
                                                        <Box pt={4}>
                                                            {
                                                                (i.histories ? i.histories : []).map(j=>{
                                                                    return <chakra.p>{`${j.startYear}/${j.startMonth}から${j.endYear}/${j.endMonth}まで`}</chakra.p>
                                                                })
                                                            }
                                                        </Box>
                                                    </Box>
                                                </Center>
                                            </Flex>
                                        </a>
                                    </Link>
                                </Box>
                            })
                        }
                    </VStack>
                </Box>
            </Box>
        </Center>
    </Box>
}

export default BelongCompanyPeoples
