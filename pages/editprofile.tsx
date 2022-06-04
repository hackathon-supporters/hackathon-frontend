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
import {Profile} from "../model/Profile.ts";
import {useState} from "react";

const CustomControlsExample: NextPage = () => {
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
                                return <Box h='40px' bg='pink.100'>
                                    <Avatar size='sm' src={i.company.avatar} />
                                    {i.company.name}
                                    :
                                    {i.startMonth}-{i.startYear}~{i.endMonth}-{i.endYear}
                                    ({i.position})
                                </Box>
                            })
                        }
                    </VStack>
                </Box>
            </Box>
        </Box>
    );
}

export default CustomControlsExample
