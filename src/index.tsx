import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';
import "@cyntler/react-doc-viewer/dist/index.css";

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<HashRouter>
			<Routes>
				<Route path='*' element={<App />} />
			</Routes>
		</HashRouter>
	</React.StrictMode>
);

