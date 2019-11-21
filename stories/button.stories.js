import React, { Component } from 'react'
import '../src/compenents/button/buttonComponent.css';
import ButtonComponent from '../src/compenents/button/buttonComponent';

export default {
    title: "ButtonMixin"
};

const deleteSomthing = () =>{
    alert('Esti sigur>');
}

export const button = () => <ButtonComponent methodToRun={deleteSomthing} name="Delete"></ButtonComponent>