// React imports
import { BrowserRouter as Router, Route } from "react-router-dom";

// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';

// CSS imports
import './App.css';

// Local imports
import PortfolioNavbar from './pageComponents/PortfolioNavbar';
import BottomBar from './pageComponents/BottomBar';
import Home from './pages/Home';
import projectPageMetaData from "./pages/projectPageMetaData";

function App() {
  return (
    <Router>
      <PortfolioNavbar />

      <Route path="/" exact>
        <Home />
      </Route>

      {/* Give all the projects a proper route name */}
      {
        projectPageMetaData.map((data, index) => {
          return (
            <Route key={index} path={data.path} component={data.component} />
          );
        })
      }

      <BottomBar />
    </Router>
  );
}

export default App;
