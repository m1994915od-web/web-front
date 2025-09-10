import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navigationBar/NavigationBar";
import HeaderLogo from "./components/headerLogo/HeaderLogo";
import HomePage from "./pages/HomePage";
import PaintingsPage from "./pages/PaintingsPage";
import PaintingDetail from "./pages/PaintingDetail";
import StatementPage from "./pages/StatementPage";
import CvPage from "./pages/CvPage";
import "./styles/App.css";

function App() {
	return (
		<BrowserRouter>
			<div className="appMainContainer">
				<NavigationBar />
				<div className="appPageContainer">
					<HeaderLogo />
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
		</BrowserRouter>
	);
}

export default App;
