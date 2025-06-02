import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar";
import Footers from "../component/footers"
export default function Layout() {
    return <>
    <header>
        <Navbar/>
    </header>
    <main>
        <Outlet/>
    </main>
    <footer>
        <Footers/>
    </footer>
    </>} 
