import {Box} from "@chakra-ui/react";
import Chat from "../../component/Chat";
import Navigation from "../../component/Navigation";
import {useEffect, useState} from "react";
import {ChatRoom} from "../../model/Chat";
import {Profile} from "../../model/Profile";
import {useRecoilState} from "recoil";
import {loginStatusAtom} from "../../atom/loginstatus";

const ChatListTop = ()=>{

    const [rooms,setRooms] = useState<ChatRoom[]>([])

    const [users,setUsers] = useState<{[key:string]:Profile}>({})

    const [profile,setProfile] = useRecoilState(loginStatusAtom);

    useEffect(()=>{
        (async ()=>{
            const r = await fetch(`https://matchquiter.herokuapp.com/api/v1/chat/chat-rooms`,{
                headers: {
                    Authorization: String(window.localStorage.getItem("authorization"))
                },
                method: "GET"
            })

            const j:{ChatRoom:ChatRoom[]} = await r.json()
            setRooms(j.ChatRoom)

            console.log(j.ChatRoom)

            const all = await Promise.all(j.ChatRoom.map(i=>{
                return fetch(`https://matchquiter.herokuapp.com/api/v1/profile/who?user_id=${i.society_id === profile?.id ? i.student_id : i.society_id}`,{
                    headers: {
                        Authorization: String(window.localStorage.getItem("authorization"))
                    }
                })
            }))

            const profiles = await Promise.all(all.map(i=>i.json()))

            profiles.forEach(i=>{
                let t = {...users}
                const a = i as Profile
                t[a.id] = a
                setUsers({...t})
            })
        })()

    },[])

    return <Box>
        <Navigation/>
        <Chat users={users} chatList={rooms} />
    </Box>
}

export default ChatListTop
