import React from 'react'
// import logo from './logo.svg'
import './App.css'

//单层页面的route同级
export default class App extends React.Component{

    render(){

        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}