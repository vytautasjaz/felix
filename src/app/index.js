import React from 'react';
import './index.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Link,
  // Redirect,
} from 'react-router-dom';

import PageLayout from './components/PageLayout';

import Login from './pages/Login.js';
import Home from './pages/Home.js';
import Content from './pages/Content.js';
import PrivateRoute from './pages/PrivateRoute';

function App() {
  return (
    <Router>
      <PageLayout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path='/content' component={Content} />
          <Route path='*'>
            <div>404 Page not found</div>
          </Route>
        </Switch>
      </PageLayout>
    </Router>
  );
}

export default App;
