import React, { Component } from 'react'
import ButtonComponent from '../button/buttonComponent'
import './todoElementComponent.css'

export default class TodoElementComponent extends Component{

    constructor(props) {
        super(props)

        this.state = {

        }
    };

    render() {
        console.log(this.props)

        return(
            <>
            <div id="element-container">
                <input type="text" placeholder="Description"></input>
                <div id="functional-container">
                    <input type="checkbox"></input>
                    <ButtonComponent 
                        methodToRun={() => this.props.deleteElement(this.props.key)} 
                        name = "Delete">
                    </ButtonComponent>
                </div>
            </div>
            </>);
    }
      
}