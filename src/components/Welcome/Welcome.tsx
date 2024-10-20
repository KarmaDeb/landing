import { Anchor, Container, Group, Text, Title, Paper, List, ThemeIcon } from '@mantine/core';
import { IconMailOpenedFilled, IconBrandDiscordFilled, IconBrandTelegram } from '@tabler/icons-react';
import DateFrom from '../Date/DateFrom';
import avatar from '../../assets/img/avatar.jpg';

export function Welcome() {
	return (
		<>
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
						<DateFrom date='06-08-2003'/>
						{' '}yo' male. I am currently studying web development in{' '}
						<Anchor target='_blank' rel='noopener noreferrer' href='https://esliceu.cat/' size=''>Es Liceu</Anchor>
						, in Spain at Palma de Mallorca
					</Text>
				</Container>
			</Group>

			<Container m='md' mt='xl'>
				<Title>Contact me</Title>
				<Paper p="xl">
					<Text>You can contact me through different ways</Text>
					<List center>
						<List.Item mt='md' icon={
							<ThemeIcon>
								<IconMailOpenedFilled/>
							</ThemeIcon>
						}>
							<Anchor href='mailto:eegea03@gmail.com' rel='noopener noreferrer' underline='never'>Email</Anchor>
						</List.Item>
						<List.Item mt='md' icon={
							<ThemeIcon>
								<IconBrandDiscordFilled/>
							</ThemeIcon>
						}>
							<Anchor href='https://discordapp.com/users/329428934946979844' rel='noopener noreferrer' underline='never'>Discord</Anchor>
						</List.Item>
						<List.Item mt='md' icon={
							<ThemeIcon>
								<IconBrandTelegram/>
							</ThemeIcon>
						}>
							<Anchor href='https://t.me/hetoloy' rel='noopener noreferrer' underline='never'>Telegram</Anchor>
						</List.Item>
					</List>
				</Paper>
			</Container>
		</>
	);
}
