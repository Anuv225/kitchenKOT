import { Route, Routes, Link } from "react-router-dom"
import TableComponent from "./components/TableComponent"
import BillComponent from "./components/BillComponent"

function App() {
  // const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
    <Routes>
      <Route path='/' element={<TableComponent/>}/>
      <Route path='/bill' element={<BillComponent/>}/>
    </Routes>

    <nav>
      <ul>
        <li ><Link to='/bill'>Bill</Link></li>
        <li ><Link to='/'>Table</Link></li>

      </ul>
    </nav>

    </>
  )
}

export default App

