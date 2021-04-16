import './App.css';

import Home from '../Home/Home';
import Search from '../Search/Search';
import Bookings from '../Bookings/Bookings';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact render={(props) => <Home {...props} />} />
          <Route path='/search' exact render={(props) => <Search {...props} />} />
          <Route path='/bookings' exact render={(props) => <Bookings {...props} />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
