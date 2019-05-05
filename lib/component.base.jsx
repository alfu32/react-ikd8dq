import React, { Component } from 'react';
import { kebapCase } from './utils.js'
export function classifyItems(array,classes){
    return array.reduce( (a,c) => {
        if(classes.indexOf(c.type) > -1){
            (a[c.type.name] = a[c.type.name]||[]).push(c)
        }else{
            a.default.push(c);
        }
        return a;
    },{default:[]})
}

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