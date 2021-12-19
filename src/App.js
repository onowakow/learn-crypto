import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage'
import LedgerPage from './pages/LedgerPage'
import WorkPage from './pages/WorkPage'
import ConceptPage from "./pages/ConceptPage";
import SimpleHashPage from "./pages/SimpleHashPage"
import LedgerHashPage from "./pages/LedgerHashPage";
import BlockchainPage from './pages/BlockchainPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <nav id="navbar">
        <h1 id="title">understanding crypto</h1>
        {/*
        <Link to='/ledger'>
          <button id='icon'>ledgers</button>
        </Link>
        <Link to='/simplehash'>
          <button id='icon'>hashes</button>
        </Link>
        <Link to='/ledgerhash'>
          <button id='icon'>ledger with hashes</button>
        </Link>
        <Link to='/difficulthash'>
          <button id='icon'>difficult hashes</button>
        </Link>
        <Link to='/noncehash'>
          <button id='icon'>nonce</button>
        </Link>
        */}
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

        <Route exact path="/ledger">
          <LedgerPage />
        </Route>

        <Route exact path='/simplehash'>
          <SimpleHashPage />
        </Route>

        <Route exact path='/blockchain'>
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
