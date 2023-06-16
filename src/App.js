import Header from "./component/js/Header";
import "../src/component/css/body/body.css";
import "../src/component/css/body/skills.css";
import Main from "./component/js/Main";
import Card from "./component/js/Card";
import Skills from "./component/js/Skills";
import MainSkills from "./component/js/MainSkills";

function App() {
  return (
    <div className="App">
      <Header />

      <Main />
      <div className="flexCard">
        <Card className="card1" />
        <Card className="card2" />
        <Card className="card3" />
      </div>
      <Skills />
      <MainSkills />
    </div>
  );
}

export default App;
