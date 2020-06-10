import React from 'react';
import { Provider } from 'react-redux';

import store from './state';

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
import SinglMovie from './pages/SingleMovie.js';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <PageLayout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/content' component={Content} />
            <PrivateRoute exact path='/movie/:id' component={SinglMovie} />
            <Route path='*'>
              <div>404 Page not found</div>
            </Route>
          </Switch>
        </PageLayout>
      </Router>
    </Provider>
  );
}

export default App;
