import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, MantineProvider } from '@mantine/core';
import App from './vendor/App';

import '@mantine/core/styles.css';
import './index.css';

const theme = createTheme({});

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MantineProvider theme={theme} defaultColorScheme='auto'>
			<App>
				
			</App>
		</MantineProvider>
	</StrictMode>,
)