import React, {Component } from 'react';
import { ComponentWrapper,MultislotTransclusionComponent } from './lib/component.base.jsx'
import { kebapCase,classifyItems } from './lib/utils.js'

export class Tab extends Component{
  static classes = [TabTitle]
  render(){
    const classification = classifyItems(this.props.children,this.constructor.classes)
    return <div></div>
  }
}
export class TabTitle extends ComponentWrapper{}

export class Tabs extends Component{
  
    /** order counts */
    static classes = [Tab]
  state={
    sidebar:true,
    color:true
  }
  switchTab(){
    this.setState({...this.state,sidebar:!this.state.sidebar});
    console.log('toggleSidebar',this.state);
  }
  render(){
    const classification = classifyItems(this.props.children,this.constructor.classes)
    return <div className="app-layout" sidebar-collapsed={this.state.sidebar.toString()}>
      <div className="app-title"><div className='layout-button' onClick={this.toggleSidebar.bind(this)}></div>{classification['AppTitle']}</div>
      <div className="app-sidebar">{classification['AppSidebar']}</div>
      <div className="app-toolbar">{classification['AppToolbar']}</div>
      <div className="app-content">{classification['AppContent']}</div>
      <div className="app-statusbar">{classification['AppStatusbar']}</div>
    </div>
  }
}