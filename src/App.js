import React from 'react';
import './App.css';
import TestComponent from './components/test/testComponent'
import { Provider } from 'react-redux';
import store from './rootStore'
import { } from 'react-router-dom'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AnotherComponent from './components/another/component';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TestComponent}/>
          <Route path="/testpath/:id" component={AnotherComponent} />
          <Route path="/testpath" component={AnotherComponent} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
