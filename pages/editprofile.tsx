import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview, ButtonGroup, IconButton,
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
    Flex, useEditableControls
} from "@chakra-ui/react";
import {CheckIcon, CloseIcon, EditIcon} from "@chakra-ui/icons";
import type {NextPage} from "next";
import Navigation from "../component/Navigation";
import {Profile} from "../model/Profile";
import {useState} from "react";

const EditProfilePage: NextPage = () => {
    /* Here's a custom control */
    const [profile,setProfile] = useState<Profile>({avatar: "", histories: [{
            company: {icon: "", id: "364364", name: "Microsoft"},
            endMonth: 0,
            endYear: 0,
            position: "CEO",
            startMonth: 0,
            startYear: 0
        }], id: "114514", name: "TaroTanaka"});
    function EditableControls() {
        const {
            isEditing,
            getSubmitButtonProps,
            getCancelButtonProps,
            getEditButtonProps,
        } = useEditableControls()

        return isEditing ? (
            <ButtonGroup justifyContent='center' size='sm'>
                <IconButton aria-label="" icon={<CheckIcon/>} {...getSubmitButtonProps()} />
                <IconButton aria-label="" icon={<CloseIcon/>} {...getCancelButtonProps()} />
            </ButtonGroup>
        ) : (
            <Flex justifyContent='center'>
                <IconButton aria-label="" size='sm' icon={<EditIcon/>} {...getEditButtonProps()} />
            </Flex>
        )
    }

    return (
        <Box>
            <Navigation/>
            <Box display="flex" justifyContent="center" w={"full"} h="100vh">
                <Box pt="100px">

                    <Flex justifyContent="space-between" h="128px" w={"600px"}>
                        <Box>
                            <Avatar size='2xl' src={profile.avatar}/>
                        </Box>
                        <Center>
                            <Editable
                                textAlign='center'
                                defaultValue={profile.name}
                                isPreviewFocusable={false}
                            >
                                <EditablePreview/>
                                <Flex>
                                    <Input as={EditableInput}/>
                                    <EditableControls/>
                                </Flex>
                            </Editable>
                        </Center>
                        <Center>
                            <Button colorScheme='blue'>変更を保存</Button>
                        </Center>
                    </Flex>
                    <VStack pt={10} divider={<StackDivider borderColor='gray.200'/>} spacing={4} align='stretch'>
                        {
                            profile.histories.map(i=>{
                                return <Box mt={10} boxSizing="content-box" borderWidth="0.8px" p={5}>
                                    <Box>{i.company.name}に勤務</Box>
                                    <Box>{i.position}に所属</Box>
                                    <Box>{`${i.startYear}年${i.startMonth}月から${i.endYear}年${i.endMonth}月まで所属`}</Box>
                                </Box>
                            })
                        }
                    </VStack>
                </Box>
            </Box>
        </Box>
    );
}

export default EditProfilePage
