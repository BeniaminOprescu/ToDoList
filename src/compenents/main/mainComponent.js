import React, { Component } from 'react';
import { HeaderComponent } from '../header/headerComponent';
import ListComponent from '../list/listComponent';
import TodoElementComponent from '../todoElement/todoElementComponent';

export default class MainComponent extends Component{

    constructor(props){
        super(props)

        this.state = {
            elements: [{id: 0, element: new TodoElementComponent()}],
            currentElement: {id: 0, element: new TodoElementComponent()}
        }
    }

    addElement = () => {
        const newElement = {id: Date.now(), element: new TodoElementComponent};
        this.setState({
            elements: [...this.state.elements, newElement],
            currentElement: null
        })                
    }

    deleteElement = (id) => {
        const Items = this.state.elements.filter(element => {
            return element.id !== id
        })
        this.setState({
            elements: Items
        })
    }

    render() {

        return(
            <>
            <HeaderComponent title="ToDoList"></HeaderComponent>     
            <ListComponent elements={this.state.elements} 
                            addElement={this.addElement}
                            deleteElement={this.deleteElement}>
            </ListComponent>
            </>);

    }
}