import { Route, Routes, useLocation, useNavigate } from "react-router";
import { Header } from "./routes/header/Header"
import "./styles.css"
import NexusAbout from "./routes/about/About";
import NexusDownload from "./routes/download/Download";
import NexusMarket from "./routes/marketplace/Marketplace";
import NexusHome from "./routes/home/Home"

export function NexusRoot() {
    const nav = useNavigate();
    const location = useLocation();

    const changePage = (tab: string) => {
        nav(tab);
    }

    return <div style={{ height: "100vh" }} id="nexus-root">
        <Header changePage={changePage} />

        <Routes location={location}>
            <Route path="/" element={<NexusHome />} />
            <Route path="/about" element={<NexusAbout />} />
            <Route path="/download" element={<NexusDownload />} />
            <Route path="/marketplace" element={<NexusMarket />} />
        </Routes>

    </div>

}