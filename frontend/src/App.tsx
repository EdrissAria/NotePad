import MainHeader from "./layout/MainHeader"
import Sidebar from './layout/Sidebar'

function App() {
  return (
    <>
      <MainHeader />
      <Sidebar />
      <main style={{ marginTop: '58px' }}>
        <div className="container pt-4">all notes</div>
      </main>
    </>
  )
}

export default App
