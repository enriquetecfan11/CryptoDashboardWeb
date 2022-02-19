import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import MainPage from "./pages/mainpage"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/mainpage" element={ <MainPage/> } />
      </Routes>
    </div>
  )
}

export default App