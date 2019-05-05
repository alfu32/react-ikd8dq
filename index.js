import React, { Component } from 'react';
import { render } from 'react-dom';
import './layout.sass';
import {
  AppTitle,
  AppSidebar,
  AppToolbar,
  AppContent,
  AppStatusbar,
  AppLayout
} from './layout.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <AppLayout>
        <AppTitle>Title</AppTitle>
        <AppSidebar>Sidebar</AppSidebar>
        <AppToolbar>Toolbar</AppToolbar>
        <AppContent>
            <h1>It Works</h1>
            <p>message</p>
        </AppContent>
      </AppLayout>
    );
  }
}

render(<App />, document.getElementById('root'));
