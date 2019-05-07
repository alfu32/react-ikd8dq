import React, { Component } from 'react';
import { render } from 'react-dom';
import './layout.scss';
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
            <b> one app layout inside another one's content</b>
            <div style={{ position:"relative", minHeight:'440px',margin:'20px' }}>
              <AppLayout>
                <AppTitle>Layout 1</AppTitle>
                <AppSidebar>Sidebar</AppSidebar>
                <AppToolbar>Toolbar</AppToolbar>
                <AppContent>
                    <p>message 1</p>
                </AppContent>
              </AppLayout>
            </div>
            
            <b> another app layout inside another one's content</b>
            <div style={{ position:"relative", minHeight:'440px',margin:'20px' }}>
              <AppLayout>
                <AppTitle>Layout 2</AppTitle>
                <AppSidebar>Sidebar</AppSidebar>
                <AppToolbar>Toolbar</AppToolbar>
                <AppContent>
                    <p>message 2</p>
                    
                    <b> multiple nested layouts </b>
                    <div style={{ position:"relative", minHeight:'840px',margin:'20px' }}>
                      <AppLayout>
                        <AppTitle>subLayout 2.4</AppTitle>
                        <AppSidebar>Sidebar</AppSidebar>
                        <AppToolbar>Toolbar</AppToolbar>
                        <AppContent>
                            <p>message 2.4</p>
                        </AppContent>
                      </AppLayout>
                    </div>
                </AppContent>
              </AppLayout>
            </div>
            
            <b> a third app layout inside main app layout </b>
            <div style={{ position:"relative", minHeight:'440px',margin:'20px' }}>
              <AppLayout>
                <AppTitle>Layout 2</AppTitle>
                <AppSidebar>Sidebar</AppSidebar>
                <AppToolbar>Toolbar</AppToolbar>
                <AppContent>
                    <p>message 3</p>
                </AppContent>
                <AppStatusbar>
                  <em>status 3</em>
                </AppStatusbar>
              </AppLayout>
            </div>
        </AppContent>
      </AppLayout>
    );
  }
}

render(<App />, document.getElementById('root'));
