import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { BookProvider } from "./utils/GlobalState"
import Navigation from '../src/components/Navbar';
import Search from '../src/pages/Search';
import Saved from '../src/pages/Saved';


function App() {
  return (
    <div className="App">
      <BookProvider>
        <Router>
          <div>
            <Navigation />
            <Route exact path="/" component={Search}></Route>
            <Route exact path="/saved" component={Saved}></Route>
          </div>
        </Router>
      </BookProvider>
    </div>
  );
}

export default App;
