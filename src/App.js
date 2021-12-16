import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import LedgerPage from './pages/LedgerPage'
import WorkPage from './pages/WorkPage'
import ConceptPage from "./pages/ConceptPage";
import SimpleHashPage from "./pages/SimpleHashPage"
import LedgerHashPage from "./pages/LedgerHashPage";
import BlockchainPage from './pages/BlockchainPage'

/*const Navbar = () => {
  return (
    <>
<h3>crypto demystified</h3>
    <div id="navbar" class="contentWindow">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route users='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
    </>
  );
};*/

/*function App() {

  return (
    <>
      <Navbar />
      <div id="mainWindow" class="contentWindow">
        <div id="demonstration">
              <h1>Welcome to crypto demystified.</h1>
              <p>
                The purpose of this web application is to explain how a
                cryptocurrency like bitcoin works.
              </p>
              <p>
                To accomplish this, we will first learn about money, currency,
                ledgers, and a few computer science topics.
              </p>
              <p>
                My hopes in making this guide is to make crypto technology
                understandable to people of 'non-computery' backgrounds. Plenty
                of articles exist which go into the nitty-gritty, technological
                side of cryptocurrency. It is my hope that this guide will
                demystify cryptocurrency.
              </p>
            </>
        </div>
        <div id="interpretation">
          <h2>How to use this application</h2>
          <p>
            There are two sections to this web application: The top section,
            containing diagrams and interactive components, and the bottom
            section, containing interpretation and instructions. I want people
            to interact with the concepts of cryptocurrency in hopes this will
            further aid understanding.
          </p>
          <p>
            The top section will contain graphics. Click
            <button onClick={} class="interpretationButton">
              this button
            </button>
            to see the type of graphic you may encounter.
          </p>
          <p>Keep an eye out for buttons and input boxes. They will be your guides to crypto-salvation.</p>
        </div>
      </div>
    </>
  );
}*/

const App = () => {
  return (
    <Router>
      <nav id="navbar">
        <h1 id="title">understanding crypto</h1>
        <div id='icon'>ADD SOME COLOR</div>   
        <div id='iconTwo'>MORE</div> 
          
      </nav>

      <Switch>
        <Route exact path='/concept'>
          <ConceptPage />
        </Route>

        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/ledgers">
          <LedgerPage />
        </Route>

        <Route exact path='/simplehash'>
          <SimpleHashPage />
        </Route>

        <Route exact path='blockchain'>
          <BlockchainPage />
        </Route>

        <Route exact path='/ledgerhash'>
          <LedgerHashPage />
        </Route>

        <Route exact path='/proofofwork'>
          <WorkPage />
        </Route>

      </Switch>
    </Router>
  );
};


export default App;
