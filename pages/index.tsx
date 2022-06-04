import type { NextPage } from 'next'
import {Box, Button, Center, chakra, Flex, Input, Wrap} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {Company} from "../model/Company";
import Navigation from "../component/Navigation";

const Home: NextPage = () => {

  const [companies,setCompanies] = useState<Company[]>([]);

  useEffect(()=>{
    console.log("初回ロード時に実行される内容")
  },[])

  return <Box>
    <Navigation/>
    <div>
      <Center pt="100px">
        <chakra.h1 color="gray" fontSize="40px">
          MatchQuiter
        </chakra.h1>
      </Center>
      <Center>
        <chakra.p>就活生と退職者をつなぐ</chakra.p>
      </Center>
      <Center pt={10}>
        <Flex>
          <Input placeholder="会社名を入力" w="480px"/>
          <Box w="20px"/>
          <Button>検索</Button>
        </Flex>
      </Center>
      <Center pt={10}>
        <Wrap maxW="572px">
          {
            companies.map(i => {
              return <Box key={i.id} pr={2} pb={2}>
                <Box borderWidth="1px" w="100px" h="100px">
                  {i.name}
                </Box>
              </Box>
            })
          }
        </Wrap>
      </Center>
    </div>
  </Box>
}

export default Home
