import { AppShell, Burger, Title, Text, Group } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { useDisclosure } from '@mantine/hooks';
import classes from './Home.module.css';

export function HomePage() {
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
				padding="md">
				<AppShell.Header>
					<Burger
						opened={opened}
						onClick={toggle}
						hiddenFrom="sm"
						size="sm"
					/>
					<Group justify='space-between'>
						<Title ml='sm'>
							<Text className={classes.title} inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'blueviolet' }}>
								KarmaDev 
							</Text>
							{' '}landing
						</Title>
						
						<ColorSchemeToggle />
					</Group>
				</AppShell.Header>

				<AppShell.Navbar p="md">Navbar</AppShell.Navbar>

				<AppShell.Main>
					<Welcome />
				</AppShell.Main>
			</AppShell>
		</>
	);
}
