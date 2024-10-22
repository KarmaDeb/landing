import { Anchor, Container, Group, Text, Title } from '@mantine/core';
import DateFrom from '../Date/DateFrom';
import avatar from '../../assets/img/avatar.jpg';

function Profile(): JSX.Element {
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
            </Container>
        </Group>
    )
}

export default Profile;