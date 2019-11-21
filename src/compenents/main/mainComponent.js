import React, { Component } from 'react'
import ButtonComponent from '../button/buttonComponent';
import { HeaderComponent } from '../header/headerComponent';
import ListComponent from '../list/listComponent';
import TodoElementComponent from '../todoElement/todoElementComponent'
import { element } from 'prop-types';

export default class MainComponent extends Component{

    constructor(props){
        super(props)

        this.state = {
            showHeader: false,
            elements: [{key: 0, element: new TodoElementComponent()}],
            currentElement: {key: 0, element: new TodoElementComponent()}
        }
    }

    toggleHeader = () => {
        this.setState({ showHeader: !this.state.showHeader});
    }

    addElement = () => {
        const newElement = {key: Date.now(), element: new TodoElementComponent};
        this.setState({
            elements: [...this.state.elements, newElement],
            currentElement: null
        })                
    }

    deleteElement = (key) => {
        console.log(key)
        const Items = this.state.elements.filter(element => {
            return element.key !== key
        })
        this.setState({
            elements: Items
        })

    }

    render() {

        return(
            <>
            <ButtonComponent methodToRun={this.toggleHeader} 
                             name = {this.state.showHeader ? 'hide' : 'show'}>
            </ButtonComponent>
            { this.state.showHeader ? <HeaderComponent title="Header"></HeaderComponent> : null}
            
            <ListComponent elements={this.state.elements} 
                            addElement={this.addElement}
                            deleteElement={this.deleteElement}>
            </ListComponent>
            </>);

    }
}