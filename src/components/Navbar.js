import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

const Navbar = () => {
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
};

export default Navbar;
