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
const CustomControlsExample:NextPage = ()=> {
    /* Here's a custom control */
    function EditableControls() {
        const {
            isEditing,
            getSubmitButtonProps,
            getCancelButtonProps,
            getEditButtonProps,
        } = useEditableControls()

        return isEditing ? (
            <ButtonGroup justifyContent='center' size='sm'>
                <IconButton aria-label="" icon={<CheckIcon />} {...getSubmitButtonProps()} />
                <IconButton aria-label="" icon={<CloseIcon />} {...getCancelButtonProps()} />
            </ButtonGroup>
        ) : (
            <Flex justifyContent='center'>
                <IconButton aria-label="" size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
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
                            <Avatar size='2xl' name='aaaa' src='https://pbs.twimg.com/media/EZu_kWdUEAUW6gq.jpg' />
                        </Box>
                        <Center>
                            <Editable
                                textAlign='center'
                                defaultValue='aaaa'
                                isPreviewFocusable={false}
                            >
                                <EditablePreview />
                                <Flex>
                                    <Input as={EditableInput} />
                                    <EditableControls />
                                </Flex>
                            </Editable>
                        </Center>
                        <Center>
                            <Button colorScheme='blue'>変更を保存</Button>
                        </Center>
                    </Flex>
                    <VStack pt={10} divider={<StackDivider borderColor='gray.200' />} spacing={4} align='stretch'>
                        <Flex p={5} boxSizing="content-box" justifyContent="space-between" h='40px' bg='pink.100'>
                            <Avatar size='sm' name='company' src='https://pbs.twimg.com/profile_images/1161189849048600576/u_k9IPM2_400x400.jpg' />
                            <Editable
                                pl={5}
                                w="full"
                                justifyContent="space-between"
                                textAlign='center'
                                display="flex"
                                defaultValue='株式会社ウカツキコデマヌシ'
                                isPreviewFocusable={false}
                            >
                                <EditablePreview />
                                <Input as={EditableInput} />
                                <EditableControls />
                            </Editable>
                        </Flex>
                    </VStack>
                </Box>
            </Box>
        </Box>
    );
}

export default CustomControlsExample
