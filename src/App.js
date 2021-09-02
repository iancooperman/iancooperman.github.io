// React imports
import { BrowserRouter as Router, Route } from "react-router-dom";

// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';

// CSS imports
import './App.css';

// Local imports
import PortfolioNavbar from './pageComponents/PortfolioNavbar';
import BottomBar from './pageComponents/BottomBar';
import metadata from "./pages/metadata";

function App() {
  return (
    <Router>
      <PortfolioNavbar />

      {/* Give all the pages a proper route name */}
      {
        metadata.map((data, index) => {
          return (
            <Route key={index} path={data.path} exact component={data.component} />
          );
        })
      }

      <BottomBar />
    </Router>
  );
}

export default App;
