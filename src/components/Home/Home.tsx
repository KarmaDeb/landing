import { lazy, ReactElement, Suspense, useEffect, useState } from 'react';
import { Collapse } from '@mantine/core';
import Info from '../Info/Info';
import Profile from '../Profile/Profile';
import { TabContext } from '../TabContext';

const Projects: React.LazyExoticComponent<() => ReactElement> = lazy(() => import('../Projects/Projects'));

function Home() {
	const [tab, setTab] = useState<('projects'|'blog')>('projects');

	return (
		<>
			<TabContext.Provider value={{tab, setTab}}>
				<Collapse in={tab === 'projects'} mx='sm' mt='xl'>
					<Profile/>
					<Info />
				</Collapse>
				<Suspense fallback={<div>Loading...</div>}>
					<Projects />
				</Suspense>
			</TabContext.Provider>
		</>
	);
}

export default Home;