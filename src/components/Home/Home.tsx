import { useEffect, useState } from 'react';
import { Collapse } from '@mantine/core';
import Info from '../Info/Info';
import Profile from '../Profile/Profile';
import Projects from '../Projects/Projects';
import { TabContext } from '../TabContext';

function Home() {
	const [tab, setTab] = useState<('projects'|'blog')>('projects');

	return (
		<>
			<TabContext.Provider value={{tab, setTab}}>
				<Collapse in={tab === 'projects'} mx='sm' mt='xl'>
					<Profile/>
					<Info />
				</Collapse>
				<Projects />
			</TabContext.Provider>
		</>
	);
}

export default Home;