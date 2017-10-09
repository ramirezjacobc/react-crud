import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import BookPage from './components/BookPage';
import BookForm from './components/BookForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Header">
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item" href="#">
                <img src={logo} alt="Frontend app" width="112" height="28" />
              </a>
            </div>
          </nav>
        </header>

        <section className="Section">
          <Switch>
            <Route exact path="/" component={BookPage} />
            <Route path="/books/new" component={BookForm} />
            <Route path="/book/:_id" component={BookForm} />
          </Switch>
        </section>
      </div>
    );
  }
}

export default App;
