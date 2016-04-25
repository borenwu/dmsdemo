import React,{Component} from 'react'
import ReactDOM from 'react-dom'

export default class Layout extends Component{

    render(){
        return(
            <div>
                {this.props.sidebar}
                {this.props.content}
            </div>
        )
    }
}