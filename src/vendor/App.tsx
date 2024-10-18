import { AppShell, Burger, Group, Image, Title, ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMoonFilled, IconSunFilled } from '@tabler/icons-react';
import logo from '../assets/logo.svg';

export default function AppMain(): JSX.Element {
	const [opened, { toggle }] = useDisclosure();

	return (
		<>
			<AppShell
				header={{ height: 60 }}
				navbar={{
					width: 300,
					breakpoint: 'sm',
					collapsed: { mobile: !opened },
				}}
				padding="md"
			>
				<AppShell.Header>
					<Group w="95%" h="100%" px="md">
						<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
						<Image className='logo' src={logo} alt="KarmaDev logo" w="auto" fit="contain" />

						<Title order={1}>KarmaDev</Title>
					</Group>
					<Group>
					<ActionIcon variant="filled" aria-label="Settings">
						<IconMoonFilled style={{ width: '70%', height: '70%' }} stroke={1.5} />
						<IconSunFilled style={{ width: '70%', height: '70%' }} stroke={1.5} />
					</ActionIcon>
					</Group>
				</AppShell.Header>

				<AppShell.Navbar p="md">
					
				</AppShell.Navbar>

				<AppShell.Main>
					
				</AppShell.Main>
			</AppShell>
		</>
	);
}