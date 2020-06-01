import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Posts from './components/Posts';
import Post_Detail from './components/Post_Detail';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Post from './components/Post';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/posts/:post_id' component={Post_Detail} />
            <Route path='/posts/' component={Posts} />
            <Route path='/:post_id' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
