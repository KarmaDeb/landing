import { Button, Group, Tooltip, useMantineColorScheme } from '@mantine/core';
import { FaSun, FaMoon } from 'react-icons/fa6';
import { LuSunMoon } from 'react-icons/lu';

export function ColorSchemeToggle() {
	const { colorScheme, setColorScheme } = useMantineColorScheme();

	return (
		<Group justify="center" mr='md' mt='sm' wrap='nowrap'>
			{colorScheme === 'light' ? <Tooltip label='Dark mode'>
				<Button onClick={() => setColorScheme('dark')}><FaMoon /></Button>
			</Tooltip> : <Tooltip label='Light mode'>
				<Button onClick={() => setColorScheme('light')}><FaSun /></Button>
			</Tooltip>}

			<Tooltip label='Auto'>
				<Button onClick={() => setColorScheme('auto')}><LuSunMoon /></Button>
			</Tooltip>
		</Group>
	);
}
