import Searchbar from "../components/searchbar"
import Card from "../components/noteCard"
import TitleBar from "../components/titlebar"

function Allnotes() {
  return (
    <main>
      <div className="container">
      <TitleBar title="All notes" buttonLabel="new note" type="note" />
      <Searchbar />
      <Card note="about school lldajdljldjljd aldakjdlfjkaldkjflajd la dlkajdflkjaldjflajd
        a dlaj dfljaldjf ad adljaj fdadj al jdflaj jfd jadfflj aljfd aljfda dflaj flad fla
        jlj afllj dalj laj dfaj da; dj
        about school lldajdl aldakjdlfjkaldkjflajd la dlkajdflkjaldjflajd a dlaj
        dfljaldjf ad adljaj fdadj al jdflaj jfd jadfflj aljfd aljfda dflaj flad fla jlj afllj dalj laj dfaj da; dj
        "
      />
      <Card note="about school"/>
      <Card note="about school"/>
      <Card note="about school"/>
      <Card note="about school"/>
      <Card note="about school"/>
      <Card note="about school"/>
      <Card note="about school"/>
      <Card note="about school"/>
      <Card note="about school"/>
      </div>
    </main>
  )
}

export default Allnotes