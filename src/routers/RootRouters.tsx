import {Route, Routes} from "react-router";
import RootPage from "../pages/root/RootPage.tsx";
import HomePage from "../pages/home/HomePage.tsx";

export default function RootRouter() {
    return <Routes location={location} key={location.pathname}>
        <Route>
            <Route path={"/"} element={<RootPage/>}/>
            <Route path={"/home"} element={<HomePage/>}/>
            <Route path={"*"} element={<RootPage/>}/>
        </Route>
    </Routes>
}