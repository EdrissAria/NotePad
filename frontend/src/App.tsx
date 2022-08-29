import { Route, Routes } from "react-router-dom"
//import pages
import MainHeader from "./layout/MainHeader"
import NoteSidebar from './layout/NotesSidebar'
import TodoSidbar from "./layout/TodoSidbar"
import Addnote from "./pages/Addnote"
import Allnotes from "./pages/Allnotes"
import Delnotes from "./pages/Delnotes"
import Notfound from "./pages/Notfound"
import Viewnote from "./pages/Viewnote"
import EditNoteCats from './pages/EditNoteCats'
import Favnotes from "./pages/Favnotes"
import Setting from "./pages/Setting"
import Alltodos from "./pages/Alltodos"
import Viewtodo from "./pages/Viewtodo"
import Deltodos from "./pages/Deltodos"
import EditTodoCats from "./pages/EditTodoCats"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<MainHeader />}>
        <Route path="notes" element={<NoteSidebar />}>
          <Route index element={<Allnotes />} />
          <Route path=":catg" element={<Allnotes />} />
          <Route path="note/:id" element={<Viewnote />} />
          <Route path="deletedNotes" element={<Delnotes />} />
          <Route path="addNote" element={<Addnote />} />
          <Route path="editNoteCats" element={<EditNoteCats />} />
          <Route path="favNotes" element={<Favnotes />} />
        </Route>
        <Route path="/todos" element={<TodoSidbar />}>
          <Route index element={<Alltodos />} />
          <Route path=":catg" element={<Alltodos />} />
          <Route path="todo/:id" element={<Viewtodo />} />
          <Route path="deletedTodos" element={<Deltodos />} />
          <Route path="editTodoCats" element={<EditTodoCats />} />
        </Route>
        <Route path="settings" element={<Setting />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
