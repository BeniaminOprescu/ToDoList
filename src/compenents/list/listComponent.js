import React, { Component } from 'react'
import ButtonComponent from '../button/buttonComponent'
import TodoElementComponent from '../todoElement/todoElementComponent'
import { isTSMethodSignature } from '@babel/types'

export default class ListComponent extends Component{

    constructor(props) {
        super(props)

        this.state = this.props.state
    }

    render() {
        console.log(this.props)

        const listElements = this.props.elements.map(
            (element) => 
                <TodoElementComponent 
                    key={element.key}    
                    deleteElement ={this.props.deleteElement}>
                </TodoElementComponent>
        )

        return(
            <>
            <ButtonComponent 
                methodToRun={this.props.addElement} 
                name = "Add">
            </ButtonComponent>
            <div>
                {listElements}
            </div>
            </>);
    }
      
}