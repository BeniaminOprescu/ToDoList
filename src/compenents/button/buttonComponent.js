import React from 'react'

function ButtonComponent(props){
    return (<button onClick={props.methodToRun}>{props.name}</button>)
}

export default ButtonComponent