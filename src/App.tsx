import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AddressProvider } from "./context/AddressContext";
import NavigationBar from "./components/navigationBar/NavigationBar";
import HeaderLogo from "./components/headerLogo/HeaderLogo";
import HomePage from "./pages/HomePage";
import PaintingsPage from "./pages/PaintingsPage";
import PaintingDetail from "./pages/PaintingDetail";
import StatementPage from "./pages/StatementPage";
import CvPage from "./pages/CvPage";

import "./styles/App.css";
import "./assets/fonts/fonts.css";

const AppRoutes: React.FC = () => {
	const location = useLocation();
	const hideAll = location.pathname === "/";

	return (
		<div className="appMainContainer">
			{!hideAll && <NavigationBar />}
			<div className="appPageContainer">
				{!hideAll && <HeaderLogo />}
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/address/:address" element={<PaintingsPage />} />
					<Route
						path="/painting/:address/:title"
						element={<PaintingDetail />}
					/>
					<Route path="/statement" element={<StatementPage />} />
					<Route path="/cv" element={<CvPage />} />
				</Routes>
			</div>
		</div>
	);
};

function App() {
	return (
		<BrowserRouter>
			<AddressProvider>
				<AppRoutes />
			</AddressProvider>
		</BrowserRouter>
	);
}

export default App;
