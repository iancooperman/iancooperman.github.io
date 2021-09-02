// React imports
import { BrowserRouter as Router, Route } from "react-router-dom";

// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';

// CSS imports
import './App.css';

// Local imports
import PortfolioNavbar from './PortfolioNavbar';
import BottomBar from './BottomBar';
import Home from './pages/Home';
import projectPageMetaData from "./projectPageMetaData";

function App() {
  return (
    <Router>
      <PortfolioNavbar />

      <Route path="/" exact>
        <Home />
      </Route>

      {/* Give all the projects a proper route name */}
      {
        projectPageMetaData.map((projectMetaData, index) => {
          return (
            <Route key={index} path={projectMetaData.path}>
              
              {projectMetaData.component}
            </Route>
          );
        })
      }

      <BottomBar />
    </Router>
  );
}

export default App;
