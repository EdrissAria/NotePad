import TitleBar from "../components/titlebar"
import CatagoryCard from "../components/catagoryCard"

function EditTodoCats() {
  return (
    <main>
      <div className="container pt-4">
        <TitleBar title="Edit todo catagories" type="none" />
        <CatagoryCard />
        <CatagoryCard />
        <CatagoryCard />
        <CatagoryCard />
      </div>
    </main>
  )
}

export default EditTodoCats