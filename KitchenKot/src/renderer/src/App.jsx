import { Route, Routes, Link } from "react-router-dom"
import TableComponent from "./components/TableComponent"
import BillComponent from "./components/BillComponent"
import MenuComponent from "./components/MenuComponent"

function App() {
  // const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
    <Routes>
      <Route path='/' element={<TableComponent/>}/>
      <Route path='/bill' element={<BillComponent/>}/>
      <Route path='/menu' element={<MenuComponent/>}/>

    </Routes>

    <nav>
      <ul>
      <li ><Link to='/menu'>Menu</Link></li>
        <li ><Link to='/bill'>Bill</Link></li>
        <li ><Link to='/'>Table</Link></li>

      </ul>
    </nav>

    </>
  )
}

export default App

