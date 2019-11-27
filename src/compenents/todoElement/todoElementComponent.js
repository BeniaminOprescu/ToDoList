import React, { Component } from 'react'
import ButtonComponent from '../button/buttonComponent'
import './todoElementComponent.css'

export default class TodoElementComponent extends Component{

    constructor(props) {
        super(props)

        this.state = {
            text: "",
            checked: false
        }
    };

    onEnter = (event) => {
        if(event.keyCode === 13){
            this.setState({ text: event.target.value});
        }

    }

    checkedFunction = () => { 
        if(this.state.checked){
            this.setState({checked: false})
        } else{
            this.setState({checked: true})
        }
    }

    render() {
        const style = {
            backgroundColor: this.state.checked ? "red" : "white",
            width: "200px",
            display: "inline-block"
        }

        return(
            <>
            <div id="element-container">
                {this.state.text === "" ? 
                    <input onKeyUp={this.onEnter} type="text" placeholder="Description"></input> : 
                    <p style={style}>{this.state.text}</p>}
                <div id="functional-container">
                    <input onChange={this.checkedFunction} type="checkbox"></input>
                    <ButtonComponent 
                        methodToRun={() => this.props.deleteElement(this.props.id)} 
                        name = "Delete">
                    </ButtonComponent>
                </div>
            </div>
            </>);
    }
      
}