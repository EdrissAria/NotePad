import Searchbar from "../components/searchbar"
import Card from "../components/card"
import TitleBar from "../components/titlebar"

function Delnotes() {
  return (
    <main>
      <div className="container pt-4">
      <TitleBar title="Recently deleted notes" buttonLabel=""/>
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

export default Delnotes