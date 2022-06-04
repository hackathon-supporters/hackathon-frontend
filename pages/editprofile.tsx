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
    Flex
} from "@chakra-ui/react";
import {CheckIcon, CloseIcon, EditIcon} from "@chakra-ui/icons";
function CustomControlsExample() {
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
                <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
                <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
            </ButtonGroup>
        ) : (
            <Flex justifyContent='center'>
                <IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
            </Flex>
        )
    }
    return (
        <Box display="flex" justifyContent="center" w={"full"} h="100vh">
            <Box pt="100px">
                <Flex justifyContent="space-between" h="128px" w={"600px"}>
                    <Avatar size='2xl' name='aaaa' src='https://pbs.twimg.com/media/EZu_kWdUEAUW6gq.jpg' />
                    <Center>
                        <Editable
                            textAlign='center'
                            defaultValue='aaaa'
                            isPreviewFocusable={false}
                            >
                            <EditablePreview />
                            <Input as={EditableInput} />
                            <EditableControls />
                        </Editable>
                    </Center>
                    <Center>
                        <Button colorScheme='blue'>変更を保存</Button>
                    </Center>
                </Flex>
                <VStack divider={<StackDivider borderColor='gray.200' />} spacing={4} align='stretch'>
                    <Box h='40px' bg='pink.100'>
                        <Avatar size='sm' name='company' src='https://pbs.twimg.com/profile_images/1161189849048600576/u_k9IPM2_400x400.jpg' />
                        <Editable
                            textAlign='center'
                            defaultValue='株式会社ウカツキコデマヌシ'
                            isPreviewFocusable={false}
                        >
                            <EditablePreview />
                            <Input as={EditableInput} />
                            <EditableControls />
                        </Editable>
                    </Box>
                </VStack>
            </Box>
        </Box>
    );
}