import TitleBar from "../components/titlebar"
import CatagoryCard from "../components/catagoryCard"
function EditNoteCats() {
  return (
    <main>
      <div className="container pt-4">
      <TitleBar title="Edit note catagories" buttonLabel=""/>
      <CatagoryCard />
      <CatagoryCard />
      <CatagoryCard />
      <CatagoryCard />
      </div>
    </main>
  )
}

export default EditNoteCats