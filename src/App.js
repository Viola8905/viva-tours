import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./router/Pages";
import "./App.css";

function App() {
  return (
    <Router>
      <Pages />
    </Router>
  );
}

export default App;
