import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CardList from "./components/CardList";
import Header from "./components/Header";

function App() {
  return (<div>
    <Header/>
    <div>
      <CardList/>
    </div>
  </div>);
}

export default App;
