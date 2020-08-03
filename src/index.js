import 'bootstrap/dist/css/bootstrap.min.css'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Layout from 'containers/layout';
import Objects from 'containers/objects';
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducers from 'reducers'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)

class Hello extends Component {
render(){
  return('Hello World')
}
}

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/branch/1' component={Hello}/>
        <AppRoute path='/' layout={Layout} component={Hello}/>
      </Switch>
  </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
