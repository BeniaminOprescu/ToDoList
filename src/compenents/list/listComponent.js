import React, { Component } from 'react'
import ButtonComponent from '../button/buttonComponent'
import TodoElementComponent from '../todoElement/todoElementComponent'

export default class ListComponent extends Component{

    constructor(props) {
        super(props)

        this.state = this.props.state
    }

    render() {

        const listElements = this.props.elements.map(
            (element) => 
                <TodoElementComponent
                    id={element.id}    
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