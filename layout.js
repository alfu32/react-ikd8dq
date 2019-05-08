import React, {Component } from 'react';
import { ComponentWrapper,MultislotTransclusionComponent } from './lib/component.base.jsx'
import { kebapCase,classifyItems } from './lib/utils.js'

export class AppTitle extends ComponentWrapper { }
export class AppSidebar extends ComponentWrapper { }
export class AppToolbar extends ComponentWrapper { }
export class AppContent extends ComponentWrapper { }
export class AppStatusbar extends ComponentWrapper { }
export class AppLayout extends Component{
    /** order counts */
    static classes = [AppTitle, AppSidebar, AppToolbar, AppContent, AppStatusbar]
  state={
    sidebar:true,
    color:true
  }
  scrollContent(evt){
    console.log(evt.target.getBoundingClientRect().top)
  }
  toggleSidebar(){
    this.setState({...this.state,sidebar:!this.state.sidebar});
    console.log('toggleSidebar',this.state);
  }
  render(){
    const classification = classifyItems(this.props.children,this.constructor.classes)
    return <div className="app-layout" sidebar-collapsed={this.state.sidebar.toString()}>
      <div className="app-title"><div className='layout-button' onClick={this.toggleSidebar.bind(this)}></div>{classification['AppTitle']}</div>
      <div className="app-sidebar">{classification['AppSidebar']}</div>
      <div className="app-toolbar">{classification['AppToolbar']}</div>
      <div className="app-content" onScroll={this.scrollContent}>{classification['AppContent']}</div>
      <div className="app-statusbar">{classification['AppStatusbar']}</div>
    </div>
  }
}
export default ({ name }) => <h1>Hello {name}!</h1>;
