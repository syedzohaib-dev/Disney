import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Header />} />
      </Routes>
      <Home />
    </>
  )
}

export default App
