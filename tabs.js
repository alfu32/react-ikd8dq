import React, {Component } from 'react';
import { ComponentWrapper,MultislotTransclusionComponent } from './lib/component.base.jsx'
import { kebapCase,classifyItems } from './lib/utils.js'

export class Tab extends Component{
  static classes = [TabTitle]
  render(){
    const classification = classifyItems(this.props.children,this.constructor.classes)
    return <div>
      <div class="tab-title">{classification['TabTitle']}</div>
      <div class="tab-content">{classification['TabContent']}{classification['default']}</div>
    </div>
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
  classifier(ch) {
    return classifyItems(cs,this.constructor.classes)
  }
  switchTab(){
    this.setState({...this.state,sidebar:!this.state.sidebar});
    console.log('toggleSidebar',this.state);
  }
  render(){
    const classification = classifyItems(this.props.children,this.constructor.classes)
    const 
    tabTitles=classification["Tab"].reduce( a,t => {
      const cls=classification = classifyItems(this.props.children,this.constructor.classes)
      return a;
    },{title:[],content:[]})
    this.props.children.reduce
    return <div className="tabs-layout" sidebar-collapsed={this.state.sidebar.toString()}>
      <div className="tabs-titles"><div className='layout-button' onClick={this.toggleSidebar.bind(this)}></div>{classification['AppTitle']}</div>
      <div className="tabs-content">{classification['AppSidebar']}</div>
    </div>
  }
}