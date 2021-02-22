import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wrapper from "./components/Wrapper";
import './App.css';

function App() {
  return (
    <Router basename ={process.env.PUBLIC_URL}>
    <Wrapper>
      <Route exact path="/" component={Home} />
      <Route path="/Home" component={Home} />
    </Wrapper>
</Router>
  );
}

export default App;
