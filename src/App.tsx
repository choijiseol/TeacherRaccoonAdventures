import './App.css'
import RootRouter from "./routers/RootRouters.tsx";
import {BrowserRouter} from "react-router";

function App() {

  return (
    <BrowserRouter>
        <RootRouter/>
    </BrowserRouter>
  )
}

export default App
