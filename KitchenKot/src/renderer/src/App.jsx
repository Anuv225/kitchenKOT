import TableComponent from "./components/TableComponent"

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <TableComponent/>
    </>
  )
}

export default App

