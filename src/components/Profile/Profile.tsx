import { Anchor, Container, Group, Text, Title, rem } from '@mantine/core';
import { FaLinkedin, FaInstagram, FaXTwitter, FaGithub, FaGitlab } from 'react-icons/fa6';
import DateFrom from '../Date/DateFrom';
import avatar from '../../assets/img/avatar.jpg';

function Profile(): JSX.Element {
    const iconStyle = { width: rem(30), height: rem(30) };

    return (
        <Group justify='center' mt='md'>
            <img src={avatar} alt='avatar' style={{
                width: '15vw',
                height: '15vw',
                maxWidth: '100%',
                borderRadius: '50%',
                objectFit: 'cover'
            }} />
            <Container m='md'>
                <Title>
                    Who am I?
                </Title>
                <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
                    Hi, my name is Eloy Egea, I am a{' '}
                    <Anchor target='_blank' rel='noopener noreferrer' href='https://en.wikipedia.org/wiki/Web_development#Full-stack_development' size='lg'>full-stack</Anchor>
                    {' '}developer. I am a{' '}
                    <DateFrom date='06-08-2003' />
                    {' '}yo' male. I am currently studying web development in{' '}
                    <Anchor target='_blank' rel='noopener noreferrer' href='https://esliceu.cat/' size=''>Es Liceu</Anchor>
                    , in Spain at Palma de Mallorca
                </Text>

                <Group>
                    <Anchor href='https://www.linkedin.com/in/eloy-egea-moreno-48172a23a' target='_blank' rel='noopener noreferrer' underline='never'>
                        <FaLinkedin style={iconStyle} />
                    </Anchor>
                    <Anchor href='https://www.instagram.com/e.gea_03/' target='_blank' rel='noopener noreferrer' underline='never'>
                        <FaInstagram style={iconStyle} />
                    </Anchor>
                    <Anchor href='https://x.com/karma_developer' target='_blank' rel='noopener noreferrer' underline='never'>
                        <FaXTwitter style={iconStyle} />
                    </Anchor>
                    <Anchor href='https://github.com/KarmaDeb/' target='_blank' rel='noopener noreferrer' underline='never'>
                        <FaGithub style={iconStyle} />
                    </Anchor>
                    <Anchor href='https://gitlab.com/karmadev/' target='_blank' rel='noopener noreferrer' underline='never'>
                        <FaGitlab style={iconStyle} />
                    </Anchor>
                </Group>
            </Container>
        </Group>
    )
}

export default Profile;