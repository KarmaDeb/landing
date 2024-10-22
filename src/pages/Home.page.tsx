import { AppShell, Burger, Title, Text, Group, NavLink } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Home from '../components/Home/Home';
import { useDisclosure } from '@mantine/hooks';
import { FaHome, FaSchool, FaCalendarDay } from 'react-icons/fa';
import { useState } from 'react';

import './Home.module.css';
import Schedule from '@/components/Schedule/Schedule';

export function HomePage() {
	const [site, setSite] = useState<string>('index');
	const [opened, { toggle }] = useDisclosure();

	const renderContent = () => {
		switch (site) {
			case 'index':
				return <Home />;
			case 'schedule':
				return <Schedule />;
			default:
				return <Text gradient={{from: 'darkred', to: 'red'}}>Page not found</Text>;
		}
	}

	return (
		<>
			<AppShell
				header={{ height: 60 }}
				navbar={{
					width: 300,
					breakpoint: 'sm',
					collapsed: { mobile: !opened },
				}}
				>
				<AppShell.Header>
					<Group justify='space-between' wrap='nowrap'>
						<Burger
							opened={opened}
							onClick={toggle}
							hiddenFrom="sm"
							size="sm"
						/>

						<Title ml='sm'>
							<Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'blueviolet' }}>
								KarmaDev 
							</Text>
						</Title>
						
						<ColorSchemeToggle />
					</Group>
				</AppShell.Header>

				<AppShell.Navbar p="md">
					<NavLink 
						label='Home'
						active={site === 'index'}
						onClick={() => setSite('index')}
						leftSection={<FaHome/>}
						color='violet'
						/>
					<NavLink 
						label='School projects'
						leftSection={<FaSchool/>}
						color='violet'
						childrenOffset={28}
						>
							<NavLink
								label='Schedule'
								active={site === 'schedule'}
								onClick={() => setSite('schedule')}
								leftSection={<FaCalendarDay/>}
								color='violet'
							/>
					</NavLink>
				</AppShell.Navbar>

				<AppShell.Main>
					{renderContent()}
				</AppShell.Main>
			</AppShell>
		</>
	);
}
