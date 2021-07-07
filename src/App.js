import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Index from './Components/pages/Index';

function App() {
  return (

    <Router>
      <Switch>
        <Route path="/">
          <Index/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
