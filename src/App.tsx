import './App.css';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { About } from './pages/about/About';
import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { AnimatePresence } from 'framer-motion';
import { Transition } from './components/Transitions';
import { Home } from './pages/home/Home';
import { ProjectDetailsPage } from './pages/projects/details-page/ProjectDetailsPage';
import { Projects } from './pages/projects/Projects';


export default function App() {
	const [_, setSelectedTab] = useState('/');
	const location = useLocation();
	const [showHeader, setShowHeader] = useState(location.pathname === "/");
	const nav = useNavigate();

	useEffect(() => {
		setShowHeader(location.pathname === "/" || location.pathname.split("/")[1] === "nexus");
	}, [location.pathname]);


	const changePage = (tab: string) => {
		setSelectedTab(tab);
		nav(tab);
	}


	return (
		<>
			<AnimatePresence mode='wait'>
				{!showHeader && (
					<Transition>
						<Header callback={changePage} />
					</Transition>
				)}
			</AnimatePresence>

			<AnimatePresence mode='wait'>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Transition><Home changePage={changePage} /></Transition>} />
					<Route path="/about" element={<Transition><About changePage={changePage} /></Transition>} />
					<Route path="/projects" element={<Transition><Projects changePage={changePage} /></Transition>} />
					<Route path="/projects/:id" element={<Transition><ProjectDetailsPage /></Transition>} />
				</Routes>
			</ AnimatePresence>
		</>

	);
}
