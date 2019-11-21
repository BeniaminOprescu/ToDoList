import React, { Component } from 'react'
import './headerComponent.css';

export class HeaderComponent extends Component {
    
    constructor(props){
        super(props)

        this.state = {

        }
    }
        
    render () {
        return(
            <header className="flex">
                <h1>{this.props.title}</h1>
            </header>
        )
    }
}