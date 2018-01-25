import React from 'react';
import SplashPage from './SplashPage';
import Error404 from './Error404';
import { Router, Route, hashHistory } from 'react-router';
import '../stylesheets/ui.scss';

function App() {
  return(
    <div className="app">
      <Router history={hashHistory}>
        <Route path="/" component={SplashPage} />
        <Route path="*" component={Error404}/>
      </Router>
    </div>
  );
}


export default App;
