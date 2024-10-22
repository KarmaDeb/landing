import { useEffect, useState } from 'react';
import Info from '../Info/Info';
import Profile from '../Profile/Profile';
import Projects from '../Projects/Projects';
import { TabContext } from '../TabContext';

function Home() {
	const [tab, setTab] = useState<string>('projects');

	return (
		<>
			<Profile/>
			<TabContext.Provider value={{tab, setTab}}>
				<Info />
				<Projects />
			</TabContext.Provider>
		</>
	);
}

export default Home;