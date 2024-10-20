import { Button, Group, Tooltip, useMantineColorScheme } from '@mantine/core';
import { IconMoonStars, IconSunHigh, IconSunMoon } from '@tabler/icons-react';

export function ColorSchemeToggle() {
	const { colorScheme, setColorScheme } = useMantineColorScheme();

	return (
		<Group justify="center" mr='md' mt='sm'>
			{colorScheme === 'light' ? <Tooltip label='Dark mode'>
				<Button onClick={() => setColorScheme('dark')}><IconMoonStars /></Button>
			</Tooltip> : <Tooltip label='Light mode'>
				<Button onClick={() => setColorScheme('light')}><IconSunHigh /></Button>
			</Tooltip>}

			<Tooltip label='Auto'>
				<Button onClick={() => setColorScheme('auto')}><IconSunMoon /></Button>
			</Tooltip>
		</Group>
	);
}
