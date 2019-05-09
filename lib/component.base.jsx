import React, { Component } from 'react';
import { kebapCase,classifyItems } from './utils.js'

export class ComponentWrapper extends Component{
    render() {
        return this.props.children
    }
}
export class MultislotTransclusionComponent extends Component{
    static classes=[];
    nodeDecorator(node,klass){
      console.log(node);
      //node.className=kebapCase(klass.name)
      return node;
    }
    render() {
        const classification = classifyItems(this.props.children,this.constructor.classes)
        return <div class={kebapCase(this.constructor.name)}>
            {this.constructor.classes.map( 
                klass => this.nodeDecorator(<div className={kebapCase(klass.name)}>{classification[klass.name]||[]}</div>,klass)
            )}
        </div>
    }
}

export class MultislotClassifier{
  classifier(children){}
}