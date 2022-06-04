import {Box} from "@chakra-ui/react";
import Chat from "../../component/Chat";
import Navigation from "../../component/Navigation";

const ChatListTop = ()=>{
    return <Box>
        <Navigation/>
        <Chat chatList={[]} displayId={""}/>
    </Box>
}

export default ChatListTop
