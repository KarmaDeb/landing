import { Container, Title, Text, Anchor, Paper, List, ThemeIcon, Group, Collapse } from '@mantine/core';
import { FaDiscord, FaTelegram, FaJava, FaPhp, FaJs, FaNodeJs, FaHtml5, FaCss3, FaReact } from 'react-icons/fa6';
import { SiTypescript } from "react-icons/si";
import { IoMailOpenSharp } from "react-icons/io5";
import { useTabContext } from '../TabContext';

function Info(): JSX.Element {
    const {tab} = useTabContext();

    return (
        <>
            <Collapse in={tab === 'projects'} mx='sm' mt='xl'>
                <Group h='100%' align='flex-start'>
                    <Container>
                        <Title>Contact me</Title>
                        <Paper p="xl">
                            <Text>You can contact me through different ways</Text>
                            <List center>
                                <List.Item mt='md' icon={
                                    <ThemeIcon>
                                        <IoMailOpenSharp />
                                    </ThemeIcon>
                                }>
                                    <Anchor href='mailto:eegea03@gmail.com' rel='noopener noreferrer' underline='never'>Email</Anchor>
                                </List.Item>
                                <List.Item mt='md' icon={
                                    <ThemeIcon>
                                        <FaDiscord />
                                    </ThemeIcon>
                                }>
                                    <Anchor href='https://discordapp.com/users/329428934946979844' rel='noopener noreferrer' underline='never'>Discord</Anchor>
                                </List.Item>
                                <List.Item mt='md' icon={
                                    <ThemeIcon>
                                        <FaTelegram />
                                    </ThemeIcon>
                                }>
                                    <Anchor href='https://t.me/hetoloy' rel='noopener noreferrer' underline='never'>Telegram</Anchor>
                                </List.Item>
                            </List>
                        </Paper>
                    </Container>

                    <Container>
                        <Title>My skills</Title>
                        <Paper p='xl'>
                            My most knowledge relies on{' '}
                            <Anchor href='https://en.wikipedia.org/wiki/Java_(programming_language)' rel='noopener noreferrer' target='_blank'  underline='never'>
                                <FaJava/> Java
                            </Anchor>
                            {' '}in which language I code sin I was 16 yo' and I started learning{' '}
                            <Anchor href='https://en.wikipedia.org/wiki/PHP' rel='noopener noreferrer' target='_blank'  underline='never'>
                                <FaPhp/> PHP
                            </Anchor>
                            {' '}for about 2 years after. Then I started with{' '}
                            <Anchor href='https://en.wikipedia.org/wiki/JavaScript' rel='noopener noreferrer' target='_blank'  underline='never'>
                                <FaJs/> JavaScript
                            </Anchor>
                            {' '}and dropped PHP. With JavaScript, I started with{' '}
                            <Anchor href='https://en.wikipedia.org/wiki/Node.js' rel='noopener noreferrer' target='_blank'  underline='never'>
                                <FaNodeJs/> NodeJS
                            </Anchor>
                            {' '}, as it allowed me to run javascript code on the server. I also know{' '}
                            <Anchor href='https://en.wikipedia.org/wiki/HTML' rel='noopener noreferrer' target='_blank'  underline='never'>
                                <FaHtml5/> HTML
                            </Anchor>
                            {' '}and{' '}
                            <Anchor href='https://en.wikipedia.org/wiki/CSS' rel='noopener noreferrer' target='_blank'  underline='never'>
                                <FaCss3/> CSS
                            </Anchor>
                            {' '}even though I now make websites using{' '}
                            <Anchor href='https://en.wikipedia.org/wiki/React_(JavaScript_library)' target='_blank'  rel='noopener noreferrer' underline='never'>
                                <FaReact/> React
                            </Anchor>
                            {' '}using{' '}
                            <Anchor href='https://en.wikipedia.org/wiki/TypeScript' target='_blank' rel='noopener noreferrer' underline='never'>
                                <SiTypescript/> TypeScript
                            </Anchor>.
                        </Paper>
                    </Container>
                </Group>
            </Collapse>
        </>
    )
}

export default Info;