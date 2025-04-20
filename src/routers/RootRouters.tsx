import {Route, Routes} from "react-router";
import RootPage from "../pages/root/RootPage.tsx";
import HomePage from "../pages/home/HomePage.tsx";
import Sceen from "../screens/sceen/Sceen.tsx";

export default function RootRouter() {
    return <Routes location={location} key={location.pathname}>
        <Route>
            <Route path={"/"} element={<RootPage/>}/>
            <Route path={"/home"} element={<HomePage/>}/>
            <Route path={"/play"} element={<Sceen/>}/>
            <Route path={"*"} element={<RootPage/>}/>
        </Route>
    </Routes>
}