import type {NextPage} from "next";
import {Box, Button, Center, chakra, Input} from "@chakra-ui/react";
import {useState} from "react";
import {LoginToken} from "../model/LoginToken";
import {useRouter} from "next/router";

const SignUpPage:NextPage = ()=>{

    const router = useRouter();

    const [mail,setMail] = useState("");
    const [password,setPassword] = useState("");

    const login = async ()=>{
        const fd = new FormData();
        fd.set("email",mail);
        fd.set("password",password);
        const r = await fetch("https://matchquiter.herokuapp.com/api/v1/auth/signin",{
            method: "POST",
            body: fd,
        })
        if(r.ok){
            const tokenR:LoginToken = await r.json()
            window.localStorage.setItem("authorization",tokenR.token)
            router.push("/")
        }else{
            window.alert("エラーが発生しました")
        }
    }

    const handleSignUp = ()=>{
        (async ()=>{
            const fd = new FormData();
            fd.set("email",mail);
            fd.set("password",password);
            const r = await fetch("https://matchquiter.herokuapp.com/api/v1/auth/signup",{
                method: "POST",
                body: fd,
            })
            if(r.ok){
               login()
            }else{
                window.alert("エラーが発生しました")
            }
        })()
    }

    return <Center w={"full"} h="100vh">
        <Box border="solid 1px #f0f0f0" w={"400px"} h={"500px"}>
            <chakra.h1 pt={14} fontSize="30px" textAlign="center">ユーザー登録</chakra.h1>
            <Box pt={20}>
                <Box p={5}>
                    <Input onChange={(e)=>{
                        setMail(e.target.value)
                    }} placeholder="メールアドレス"/>
                </Box>
                <Box p={5}>
                    <Input onChange={(e)=>{
                        setPassword(e.target.value)
                    }}  type="password" placeholder="パスワード"/>
                </Box>
            </Box>
            <Center pt={10} pl={5} pr={5}>
                <Button onClick={handleSignUp} colorScheme="green" w={"full"}>
                    登録
                </Button>
            </Center>
        </Box>
    </Center>
}
export default SignUpPage
