import React, { Component } from 'react';
import { kebapCase,classifyItems } from './utils.js'

export class ComponentWrapper extends Component{
    render() {
        return this.props.children
    }
}
export class MultislotTransclusionComponent extends Component{
    static classes=[];
    render() {
        const classification = classifyItems(this.props.children,this.constructor.classes)
        return <div>
            {this.constructor.classes.map( 
                klass => <div slot={/*kebapCase*/(klass.name)}>{classification[klass.name]||[]}</div>
            )}
        </div>
    }
}