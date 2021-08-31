// React imports
import { BrowserRouter as Router, Route } from "react-router-dom";

// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';

// CSS imports
import './App.css';

// Local imports
import PortfolioNavbar from './PortfolioNavbar';
import Home from './Home';
import { projectList, ProjectIntro } from "./Projects";
import { projectNameToURL } from './utility'

function App() {
  return (
    <Router>
      <PortfolioNavbar />

      <Route path="/" exact>
        <Home />
      </Route>

      {/* Give all the projects a proper route name */}
      {
        projectList.map((projectInfo, index) => {
          return (
            <Route key={index} path={projectNameToURL(projectInfo.name)}>
              
              <ProjectIntro projectInfo={projectInfo} />
              {projectInfo.body}
            </Route>
          );
        })
      }
    </Router>
  );
}

export default App;
